"use client"
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaUtensils,
  FaBed,
  FaBus,
  FaTools,
  FaShoppingBag,
  FaBriefcase,
  FaNewspaper,
  FaLandmark,
  FaGraduationCap,
  FaCommentDots,
  FaHandsHelping,
  FaHome,
  FaCalendarAlt,
  FaEllipsisH,
  FaCity,
  FaMoneyCheckAlt,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaHospital,
  FaPalette,
} from "react-icons/fa";

const categories = [
  { name: "Banks", icon: <FaMoneyCheckAlt />, slug: "banks", description: "Find local banks and ATMs" },
  { name: "About Dandeli", icon: <FaCity />, slug: "about-dandeli", description: "Learn about our beautiful city" },
  { name: "Restaurants", icon: <FaUtensils />, slug: "restaurants", description: "Discover local dining options" },
  { name: "Resorts/Lodge", icon: <FaBed />, slug: "resorts", description: "Find local resorts and lodges" },
  { name: "Transport", icon: <FaBus />, slug: "transport", description: "Local transportation services" },
  // { name: "Services", icon: <FaTools />, slug: "services" },
  // { name: "Shopping", icon: <FaShoppingBag />, slug: "shopping" },
  { name: "Jobs", icon: <FaBriefcase />, slug: "jobs", description: "Find job opportunities in Dandeli" },
  // { name: "News", icon: <FaNewspaper />, slug: "news" },
  { name: "Govt Services", icon: <FaLandmark />, slug: "govt-services", description: "Access government services" },
  { name: "Education", icon: <FaGraduationCap />, slug: "education", description: "Schools and educational resources" },
  { name: "Helpline", icon: <FaHandsHelping />, slug: "helpline", description: "Emergency and support contacts" },
  { name: "Hospitals", icon: <FaHospital />, slug: "hospitals", description: "Find hospitals and healthcare facilities" },
  { name: "Complaints", icon: <FaCommentDots />, slug: "complaints", description: "Report issues about the city to raise awareness" },
  { name: "Artists", icon: <FaPalette />, slug: "artists", description: "Discover local artists, performers, and creators" },
  { name: "Community Work", icon: <FaHandsHelping />, slug: "community-work", description: "Volunteer opportunities and community initiatives" },
  // { name: "Real Estate", icon: <FaHome />, slug: "real-estate" },
  { name: "Events", icon: <FaCalendarAlt />, slug: "events", description: "Find local events and activities" },
  // { name: "Others", icon: <FaEllipsisH />, slug: "others" },
];

export default function CategoryPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

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

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-16 mb-12`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaMapMarkedAlt className={`text-5xl mx-auto mb-4 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Welcome to Dandeli Info
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Your complete guide to services and information in Dandeli
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/about-dandeli">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium hover:from-blue-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg">
                  Explore Dandeli
                </button>
              </Link>
              <Link href="/helpline">
                <button className={`px-6 py-3 rounded-full border-2 font-medium ${currentTheme === "dark" ? "border-gray-700 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-100"} transition-all`}>
                  Emergency Contacts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
            City Services
          </h2>
          <p className={`mt-2 text-lg ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Find everything you need in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={`/${category.slug}`}
              key={category.slug}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                currentTheme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <div className="p-6">
                <div className={`text-4xl mb-4 ${
                  currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                } group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  currentTheme === "dark" ? "text-white" : "text-gray-800"
                }`}>
                  {category.name}
                </h3>
                <p className={`text-sm ${
                  currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {category.description}
                </p>
                <div className={`mt-4 text-sm font-medium ${
                  currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                } flex items-center`}>
                  <span>Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className={`py-12 ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <FaInfoCircle className={`text-4xl mb-4 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                About Dandeli Info
              </h2>
              <p className={`text-lg mb-6 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                Dandeli Info is your comprehensive guide to all services and information in Dandeli. We aim to connect residents and visitors with local resources.
              </p>
              <Link href="/about-dandeli">
                <button className={`px-5 py-2 rounded-lg font-medium ${currentTheme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white transition-colors`}>
                  Learn More
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className={`grid grid-cols-2 gap-4 max-w-md ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                <div className={`p-4 rounded-lg ${currentTheme === "dark" ? "bg-gray-700" : "bg-gray-50"} shadow-md`}>
                  <FaUtensils className="text-2xl mb-2 text-blue-500" />
                  <h3 className="font-semibold">Local Dining</h3>
                </div>
                <div className={`p-4 rounded-lg ${currentTheme === "dark" ? "bg-gray-700" : "bg-gray-50"} shadow-md`}>
                  <FaLandmark className="text-2xl mb-2 text-blue-500" />
                  <h3 className="font-semibold">Government</h3>
                </div>
                <div className={`p-4 rounded-lg ${currentTheme === "dark" ? "bg-gray-700" : "bg-gray-50"} shadow-md`}>
                  <FaGraduationCap className="text-2xl mb-2 text-blue-500" />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <div className={`p-4 rounded-lg ${currentTheme === "dark" ? "bg-gray-700" : "bg-gray-50"} shadow-md`}>
                  <FaHandsHelping className="text-2xl mb-2 text-blue-500" />
                  <h3 className="font-semibold">Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
