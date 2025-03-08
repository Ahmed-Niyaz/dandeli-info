"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaHospital,
  FaStar,
  FaClock,
  FaPhone,
  FaMapMarkerAlt,
  FaAmbulance,
  FaStethoscope,
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaTeeth,
  FaEye,
  FaChild,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import Link from "next/link";

// Add default hospital image constant
const DEFAULT_HOSPITAL_IMAGE = "/hospitals/hospital.jpg";

// Hospital data for Dandeli
const hospitals = [
  {
    id: 1,
    name: "Dandeli Government Hospital",
    type: "Government",
    category: "General Hospital",
    rating: 4.0,
    reviews: 85,
    address: "Main Road, Dandeli, Karnataka 581325",
    phone: "+91 8284-231234",
    emergency: "108",
    timing: "24 Hours",
    facilities: ["Emergency Services", "General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology"],
    description: "Government hospital providing comprehensive healthcare services to the residents of Dandeli.",
    specialties: ["General Medicine", "Emergency Care", "Surgery"],
    image: "/images/hospitals/govt-hospital.jpg",
  },
  {
    id: 2,
    name: "West Coast Paper Mills Hospital",
    type: "Corporate",
    category: "General Hospital",
    rating: 4.2,
    reviews: 62,
    address: "WCPM Township, Dandeli, Karnataka 581325",
    phone: "+91 8284-231456",
    emergency: "+91 8284-231457",
    timing: "24 Hours",
    facilities: ["Emergency Services", "General Medicine", "Surgery", "Pediatrics", "Laboratory"],
    description: "Hospital run by West Coast Paper Mills providing healthcare services to employees and local residents.",
    specialties: ["Occupational Health", "General Medicine", "Emergency Care"],
    image: "/images/hospitals/wcpm-hospital.jpg",
  },
  {
    id: 3,
    name: "Dandeli Community Health Center",
    type: "Government",
    category: "Community Health Center",
    rating: 3.8,
    reviews: 45,
    address: "Gandhi Nagar, Dandeli, Karnataka 581325",
    phone: "+91 8284-232345",
    emergency: "108",
    timing: "8:00 AM - 8:00 PM",
    facilities: ["Primary Care", "Maternal Health", "Child Health", "Immunization"],
    description: "Community health center providing primary healthcare services to the local community.",
    specialties: ["Primary Care", "Preventive Medicine", "Child Health"],
    image: "/images/hospitals/community-center.jpg",
  },
  {
    id: 4,
    name: "Dandeli Dental Clinic",
    type: "Private",
    category: "Dental Clinic",
    rating: 4.5,
    reviews: 38,
    address: "Market Road, Dandeli, Karnataka 581325",
    phone: "+91 9876543210",
    emergency: "+91 9876543210",
    timing: "9:00 AM - 7:00 PM (Closed on Sundays)",
    facilities: ["General Dentistry", "Cosmetic Dentistry", "Dental Surgery"],
    description: "Specialized dental clinic offering comprehensive dental care services.",
    specialties: ["Dental Care", "Oral Surgery", "Cosmetic Dentistry"],
    image: "/images/hospitals/dental-clinic.jpg",
  },
  {
    id: 5,
    name: "Dandeli Eye Hospital",
    type: "Private",
    category: "Eye Hospital",
    rating: 4.3,
    reviews: 42,
    address: "Station Road, Dandeli, Karnataka 581325",
    phone: "+91 9876543211",
    emergency: "+91 9876543211",
    timing: "9:00 AM - 6:00 PM (Closed on Sundays)",
    facilities: ["Eye Examinations", "Cataract Surgery", "Glaucoma Treatment", "Retina Care"],
    description: "Specialized eye hospital providing comprehensive eye care services.",
    specialties: ["Ophthalmology", "Eye Surgery", "Vision Care"],
    image: "/images/hospitals/eye-hospital.jpg",
  },
  {
    id: 6,
    name: "Dandeli Maternity Hospital",
    type: "Private",
    category: "Maternity Hospital",
    rating: 4.4,
    reviews: 56,
    address: "College Road, Dandeli, Karnataka 581325",
    phone: "+91 9876543212",
    emergency: "+91 9876543212",
    timing: "24 Hours",
    facilities: ["Obstetrics", "Gynecology", "Neonatal Care", "Antenatal Care"],
    description: "Specialized maternity hospital providing comprehensive maternal and child healthcare services.",
    specialties: ["Obstetrics", "Gynecology", "Neonatal Care"],
    image: "/images/hospitals/maternity-hospital.jpg",
  },
  {
    id: 7,
    name: "Dandeli Ayurvedic Clinic",
    type: "Private",
    category: "Ayurvedic Clinic",
    rating: 4.1,
    reviews: 32,
    address: "Temple Road, Dandeli, Karnataka 581325",
    phone: "+91 9876543213",
    emergency: null,
    timing: "8:00 AM - 8:00 PM",
    facilities: ["Ayurvedic Consultation", "Panchakarma", "Herbal Medicine"],
    description: "Ayurvedic clinic offering traditional Indian medicine and treatments.",
    specialties: ["Ayurveda", "Holistic Health", "Natural Medicine"],
    image: "/images/hospitals/ayurvedic-clinic.jpg",
  },
  {
    id: 8,
    name: "Dandeli Physiotherapy Center",
    type: "Private",
    category: "Physiotherapy Center",
    rating: 4.2,
    reviews: 28,
    address: "Sports Complex Road, Dandeli, Karnataka 581325",
    phone: "+91 9876543214",
    emergency: null,
    timing: "9:00 AM - 7:00 PM (Closed on Sundays)",
    facilities: ["Physiotherapy", "Rehabilitation", "Sports Injury Treatment"],
    description: "Specialized physiotherapy center offering rehabilitation and physical therapy services.",
    specialties: ["Physiotherapy", "Rehabilitation", "Sports Medicine"],
    image: "/images/hospitals/physio-center.jpg",
  },
];

const categories = [
  { name: "All", icon: <FaHospital /> },
  { name: "General Hospital", icon: <FaHospital /> },
  { name: "Community Health Center", icon: <FaStethoscope /> },
  { name: "Dental Clinic", icon: <FaTeeth /> },
  { name: "Eye Hospital", icon: <FaEye /> },
  { name: "Maternity Hospital", icon: <FaChild /> },
  { name: "Ayurvedic Clinic", icon: <FaHeartbeat /> },
  { name: "Physiotherapy Center", icon: <FaBone /> },
];

export default function HospitalsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto p-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  const currentTheme = resolvedTheme || theme;

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesCategory = selectedCategory === "All" || hospital.category === selectedCategory;
    const matchesType = selectedType === "All" || hospital.type === selectedType;
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-12 mb-8`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaHospital className={`text-5xl mx-auto mb-4 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Hospitals in Dandeli
            </h1>
            <p className={`text-lg mb-8 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Find healthcare facilities and medical services in Dandeli
            </p>
            <div className="flex justify-center space-x-4">
              <a href="tel:108" className="px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-all shadow-md hover:shadow-lg flex items-center">
                <FaAmbulance className="mr-2" />
                Emergency: 108
              </a>
              <Link href="/helpline">
                <button className={`px-6 py-3 rounded-full border-2 font-medium ${currentTheme === "dark" ? "border-gray-700 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-100"} transition-all`}>
                  Helpline Numbers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search hospitals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                currentTheme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <FaSearch className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              currentTheme === "dark" ? "text-gray-400" : "text-gray-500"
            }`} />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              currentTheme === "dark"
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } transition-colors border ${
              currentTheme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className={`mt-4 p-4 rounded-lg ${
            currentTheme === "dark" ? "bg-gray-800" : "bg-white"
          } border ${
            currentTheme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}>
            <h3 className={`font-medium mb-2 ${
              currentTheme === "dark" ? "text-white" : "text-gray-900"
            }`}>Hospital Type</h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Government", "Private", "Corporate"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedType === type
                      ? "bg-blue-600 text-white"
                      : currentTheme === "dark"
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } transition-colors`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white"
                  : currentTheme === "dark"
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors border ${
                currentTheme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hospitals List */}
      <div className="container mx-auto px-4 pb-16">
        {filteredHospitals.length === 0 ? (
          <div className={`text-center py-12 ${
            currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            <FaHospital className="text-5xl mx-auto mb-4 opacity-30" />
            <h3 className="text-xl font-medium mb-2">No hospitals found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                  currentTheme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={DEFAULT_HOSPITAL_IMAGE}
                    alt={hospital.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    // onError={(e) => {
                    //   // Fallback to default image on error
                    //   e.currentTarget.src = DEFAULT_HOSPITAL_IMAGE;
                    // }}
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      hospital.type === "Government" 
                        ? "bg-green-600 text-white" 
                        : hospital.type === "Private"
                        ? "bg-blue-600 text-white"
                        : "bg-purple-600 text-white"
                    }`}>
                      {hospital.type}
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 m-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-900 bg-opacity-70 text-white`}>
                      {hospital.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    currentTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {hospital.name}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-2 ${
                    currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {hospital.description}
                  </p>
                  
                  <div className={`mb-4 ${
                    currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    <div className="flex items-start mb-2">
                      <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{hospital.address}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaPhone className="mr-2 flex-shrink-0" />
                      <a href={`tel:${hospital.phone}`} className="hover:underline">
                        {hospital.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2 flex-shrink-0" />
                      <span>{hospital.timing}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 min-h-[40px]">
                    <div className="flex items-center">
                      <FaAmbulance className="mr-2 text-red-500" />
                      <span className="font-medium text-red-500">Emergency: </span>
                      {hospital.emergency ? (
                        <a href={`tel:${hospital.emergency}`} className="ml-1 text-red-500 hover:underline">
                          {hospital.emergency}
                        </a>
                      ) : (
                        <span className="ml-1 text-gray-500">Not available</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className={`text-sm font-medium mb-2 ${
                      currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2 min-h-[32px]">
                      {hospital.specialties.slice(0, 3).map((specialty, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded-full text-xs ${
                            currentTheme === "dark"
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <a
                      href={`tel:${hospital.phone}`}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
                        currentTheme === "dark"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white transition-colors w-full justify-center`}
                    >
                      <FaPhone className="text-sm" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Emergency Information Section */}
      <div className={`py-12 ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`p-6 rounded-xl border ${
              currentTheme === "dark" ? "border-red-800 bg-red-900 bg-opacity-20" : "border-red-200 bg-red-50"
            }`}>
              <div className="flex items-start">
                <FaAmbulance className={`text-3xl mr-4 ${
                  currentTheme === "dark" ? "text-red-400" : "text-red-600"
                }`} />
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    currentTheme === "dark" ? "text-red-400" : "text-red-600"
                  }`}>
                    Emergency Medical Services
                  </h3>
                  <p className={`mb-4 ${
                    currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}>
                    In case of medical emergencies, please contact the following numbers:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-3 rounded-lg ${
                      currentTheme === "dark" ? "bg-gray-900 bg-opacity-50" : "bg-white"
                    }`}>
                      <div className="flex items-center">
                        <FaAmbulance className={`text-2xl mr-2 ${
                          currentTheme === "dark" ? "text-red-400" : "text-red-600"
                        }`} />
                        <div>
                          <div className={`font-medium ${
                            currentTheme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            Ambulance
                          </div>
                          <a href="tel:108" className={`text-lg font-bold ${
                            currentTheme === "dark" ? "text-red-400" : "text-red-600"
                          } hover:underline`}>
                            108
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg ${
                      currentTheme === "dark" ? "bg-gray-900 bg-opacity-50" : "bg-white"
                    }`}>
                      <div className="flex items-center">
                        <FaHospital className={`text-2xl mr-2 ${
                          currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                        }`} />
                        <div>
                          <div className={`font-medium ${
                            currentTheme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            Dandeli Govt Hospital
                          </div>
                          <a href="tel:+918284231234" className={`text-lg font-bold ${
                            currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                          } hover:underline`}>
                            +91 8284-231234
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}