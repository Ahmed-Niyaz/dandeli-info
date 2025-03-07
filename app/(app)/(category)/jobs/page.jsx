"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaMoneyBillWave,
  FaSearch,
  FaFilter,
  FaIndustry,
  FaUserTie,
  FaTools,
  FaHospital,
  FaStore,
  FaHotel,
  FaCode,
  FaChalkboardTeacher,
  FaTruck,
} from "react-icons/fa";
import Link from "next/link";

// Dummy job listings data
const jobs = [
  {
    id: 1,
    title: "Resort Manager",
    company: "Jungle Retreat Resorts",
    category: "Hospitality",
    location: "Dandeli",
    salary: "₹35,000 - ₹45,000 per month",
    experience: "3-5 years",
    education: "Hotel Management Degree",
    description: "We are looking for an experienced Resort Manager to oversee all operations of our eco-resort in Dandeli. The ideal candidate will have experience in hospitality management and a passion for eco-tourism.",
    responsibilities: [
      "Manage day-to-day operations of the resort",
      "Supervise staff and ensure excellent customer service",
      "Handle guest inquiries and resolve issues",
      "Oversee maintenance of resort facilities",
    ],
    requirements: [
      "3-5 years of experience in resort management",
      "Excellent communication and leadership skills",
      "Knowledge of local tourism attractions",
      "Ability to work in a remote location",
    ],
    contactPerson: "Mr. Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "careers@jungleretreat.com",
    postedDate: "2023-05-15",
    icon: <FaHotel />,
  },
  {
    id: 2,
    title: "Tour Guide",
    company: "Dandeli Adventures",
    category: "Tourism",
    location: "Dandeli",
    salary: "₹20,000 - ₹25,000 per month",
    experience: "1-3 years",
    education: "High School Diploma",
    description: "Join our team as a Tour Guide to lead adventure tours in and around Dandeli. Knowledge of local wildlife, river rafting, and trekking routes is essential.",
    responsibilities: [
      "Lead groups on adventure tours and treks",
      "Provide information about local wildlife and ecology",
      "Ensure safety of tourists during activities",
      "Coordinate with resort staff for logistics",
    ],
    requirements: [
      "Experience in outdoor activities and adventure sports",
      "Knowledge of local flora, fauna, and geography",
      "Good communication skills in English and Kannada",
      "First aid certification preferred",
    ],
    contactPerson: "Ms. Priya Sharma",
    phone: "+91 87654 32109",
    email: "jobs@dandeliadventures.com",
    postedDate: "2023-05-20",
    icon: <FaUserTie />,
  },
  {
    id: 3,
    title: "Chef",
    company: "Riverside Restaurant",
    category: "Food & Beverage",
    location: "Dandeli",
    salary: "₹25,000 - ₹35,000 per month",
    experience: "2-4 years",
    education: "Culinary Arts Diploma",
    description: "We are hiring an experienced Chef specializing in local Karnataka cuisine and continental dishes for our popular riverside restaurant in Dandeli.",
    responsibilities: [
      "Prepare and cook high-quality dishes",
      "Develop new menu items featuring local ingredients",
      "Manage kitchen staff and inventory",
      "Ensure food safety and hygiene standards",
    ],
    requirements: [
      "2-4 years of experience in restaurant cooking",
      "Knowledge of local Karnataka cuisine",
      "Ability to work in a fast-paced environment",
      "Team management skills",
    ],
    contactPerson: "Mr. Venkat Rao",
    phone: "+91 76543 21098",
    email: "careers@riversiderestaurant.com",
    postedDate: "2023-05-25",
    icon: <FaStore />,
  },
  {
    id: 4,
    title: "Software Developer",
    company: "TechSolutions India",
    category: "IT & Software",
    location: "Dandeli",
    salary: "₹40,000 - ₹60,000 per month",
    experience: "2-5 years",
    education: "B.Tech/B.E in Computer Science",
    description: "TechSolutions is looking for a skilled Software Developer to join our remote-friendly team. The position is based in Dandeli with flexible work arrangements.",
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with team members on project requirements",
      "Write clean, maintainable code",
      "Troubleshoot and debug applications",
    ],
    requirements: [
      "Experience with JavaScript, React, and Node.js",
      "Knowledge of database systems",
      "Problem-solving skills",
      "Ability to work independently and in a team",
    ],
    contactPerson: "Ms. Anita Desai",
    phone: "+91 65432 10987",
    email: "hr@techsolutions.in",
    postedDate: "2023-06-01",
    icon: <FaCode />,
  },
  {
    id: 5,
    title: "School Teacher",
    company: "Dandeli Public School",
    category: "Education",
    location: "Dandeli",
    salary: "₹20,000 - ₹30,000 per month",
    experience: "1-3 years",
    education: "B.Ed with relevant subject specialization",
    description: "Dandeli Public School is hiring teachers for Mathematics, Science, and English subjects for classes 6-10.",
    responsibilities: [
      "Teach assigned subjects to students",
      "Prepare lesson plans and teaching materials",
      "Evaluate student performance and provide feedback",
      "Participate in school activities and meetings",
    ],
    requirements: [
      "B.Ed degree with subject specialization",
      "Experience in teaching middle or high school students",
      "Good communication skills",
      "Passion for education and student development",
    ],
    contactPerson: "Mr. Suresh Patil",
    phone: "+91 54321 09876",
    email: "principal@dandelipublicschool.edu",
    postedDate: "2023-06-05",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 6,
    title: "Nurse",
    company: "Dandeli Community Hospital",
    category: "Healthcare",
    location: "Dandeli",
    salary: "₹25,000 - ₹35,000 per month",
    experience: "1-3 years",
    education: "B.Sc Nursing",
    description: "Dandeli Community Hospital is seeking qualified nurses to join our healthcare team. Both day and night shifts available.",
    responsibilities: [
      "Provide patient care and administer medications",
      "Assist doctors during procedures",
      "Maintain patient records",
      "Monitor patient vital signs and conditions",
    ],
    requirements: [
      "B.Sc Nursing degree",
      "Valid nursing license",
      "Experience in hospital setting",
      "Good communication and interpersonal skills",
    ],
    contactPerson: "Dr. Meena Kulkarni",
    phone: "+91 43210 98765",
    email: "recruitment@dandelihospital.org",
    postedDate: "2023-06-10",
    icon: <FaHospital />,
  },
  {
    id: 7,
    title: "Driver",
    company: "Dandeli Transport Services",
    category: "Transportation",
    location: "Dandeli",
    salary: "₹15,000 - ₹20,000 per month",
    experience: "2+ years",
    education: "10th Pass with valid driving license",
    description: "We are hiring experienced drivers for our tourist transport service. Knowledge of local routes and tourist spots is required.",
    responsibilities: [
      "Drive tourists to various destinations safely",
      "Maintain vehicle cleanliness and condition",
      "Assist with loading and unloading luggage",
      "Provide basic information about local attractions",
    ],
    requirements: [
      "Valid commercial driving license",
      "Experience driving in hilly terrain",
      "Knowledge of local routes and attractions",
      "Good communication skills",
    ],
    contactPerson: "Mr. Ganesh Naik",
    phone: "+91 32109 87654",
    email: "jobs@dandelitransport.com",
    postedDate: "2023-06-15",
    icon: <FaTruck />,
  },
  {
    id: 8,
    title: "Maintenance Technician",
    company: "Dandeli Paper Mills",
    category: "Manufacturing",
    location: "Dandeli",
    salary: "₹18,000 - ₹25,000 per month",
    experience: "2-5 years",
    education: "ITI in relevant trade",
    description: "Dandeli Paper Mills is looking for experienced Maintenance Technicians to join our maintenance team for machinery upkeep and repairs.",
    responsibilities: [
      "Perform preventive maintenance on machinery",
      "Troubleshoot and repair equipment issues",
      "Maintain maintenance records",
      "Ensure safety protocols are followed",
    ],
    requirements: [
      "ITI in Mechanical/Electrical trade",
      "Experience in industrial maintenance",
      "Knowledge of safety procedures",
      "Ability to work in shifts",
    ],
    contactPerson: "Mr. Ramesh Hegde",
    phone: "+91 21098 76543",
    email: "careers@dandelipapermills.com",
    postedDate: "2023-06-20",
    icon: <FaTools />,
  },
];

// Group jobs by category
const groupedJobs = jobs.reduce((acc, job) => {
  if (!acc[job.category]) {
    acc[job.category] = [];
  }
  acc[job.category].push(job);
  return acc;
}, {});

export default function JobsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  // Filter jobs based on selected category
  useEffect(() => {
    let result = jobs;
    
    if (selectedCategory !== "All") {
      result = result.filter(job => job.category === selectedCategory);
    }
    
    setFilteredJobs(result);
  }, [selectedCategory]);

  // Prevent hydration mismatch by not rendering anything until mounted
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
  const categories = ["All", ...Object.keys(groupedJobs)];

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-8 mb-6`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaBriefcase className={`text-4xl mx-auto mb-3 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Local Jobs in Dandeli
            </h1>
            <p className={`text-base md:text-lg mb-4 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Find local job opportunities from small businesses and shops
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="container mx-auto px-4 mb-6">
        <div className={`p-4 rounded-lg shadow-md ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <h3 className={`text-lg font-medium mb-3 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
            <FaFilter className="inline mr-2" /> Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? currentTheme === "dark"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 text-white"
                    : currentTheme === "dark"
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 pb-8">
        <h2 className={`text-xl font-semibold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
          {selectedCategory === "All" ? "All Jobs" : `${selectedCategory} Jobs`} ({filteredJobs.length})
        </h2>
        
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} currentTheme={currentTheme} />
            ))}
          </div>
        ) : (
          <div className={`p-8 text-center rounded-lg ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <FaBriefcase className={`text-4xl mx-auto mb-4 ${currentTheme === "dark" ? "text-gray-600" : "text-gray-400"}`} />
            <p className={`text-lg ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"}`}>No jobs found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Job Card Component
function JobCard({ job, currentTheme }) {
  return (
    <div className={`p-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-blue-500 ${
      currentTheme === "dark" ? "bg-gray-800" : "bg-white"
    }`}>
      <div className="flex items-start">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
          currentTheme === "dark" ? "bg-blue-900" : "bg-blue-100"
        } mr-3`}>
          <span className={`text-lg ${currentTheme === "dark" ? "text-blue-300" : "text-blue-600"}`}>
            {job.icon || <FaBriefcase />}
          </span>
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
            {job.title}
          </h3>
          
          <div className="flex flex-wrap items-center text-sm mb-2">
            <div className={`flex items-center ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"} mr-3`}>
              <FaBuilding className="mr-1" />
              {job.company}
            </div>
            <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${
              currentTheme === "dark" ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800"
            }`}>
              {job.category}
            </span>
          </div>
          
          <div className="flex items-center mt-2">
            <FaPhone className={`mr-2 ${currentTheme === "dark" ? "text-green-400" : "text-green-600"}`} />
            <a 
              href={`tel:${job.phone}`} 
              className={`text-sm font-medium ${currentTheme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"}`}
            >
              {job.phone}
            </a>
          </div>
          
          <div className="flex space-x-2 mt-3">
            <a 
              href={`tel:${job.phone}`} 
              className={`flex-1 py-1.5 rounded-lg font-medium text-center text-sm transition-colors ${
                currentTheme === "dark" 
                  ? "bg-green-600 hover:bg-green-700 text-white" 
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              <FaPhone className="inline mr-1" /> Call Now
            </a>
            <Link href={`/jobs/${job.id}`} className="flex-1">
              <button 
                className={`w-full py-1.5 rounded-lg font-medium text-sm transition-colors ${
                  currentTheme === "dark" 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 