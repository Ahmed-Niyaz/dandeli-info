"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHandsHelping,
  FaLandmark,
  FaBriefcase,
  FaTools,
} from "react-icons/fa";

const categories = [
  {
    name: "Elected Representatives",
    icon: <FaBriefcase className="text-4xl" />,
    slug: "elected-representatives",
    description: "Meet our elected officials and their roles in city governance"
  },
  { 
    name: "Council Members", 
    icon: <FaLandmark className="text-4xl" />, 
    slug: "council-members",
    description: "Learn about our council members and their responsibilities"
  },
  { 
    name: "City Staff", 
    icon: <FaHandsHelping className="text-4xl" />, 
    slug: "city-staff",
    description: "Get to know the dedicated staff serving our community"
  },
  {
    name: "Standing Committee",
    icon: <FaTools className="text-4xl" />,
    slug: "standing-committee",
    description: "Explore our standing committees and their functions"
  },
];

export default function MunicipalCategoryPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
  const isDark = currentTheme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${isDark ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 to-white"} py-20`}>
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path fill={isDark ? "#4a90e2" : "#3b82f6"} d="M0,0 L100,0 L100,100 L0,100 Z" opacity="0.1"></path>
            <path fill={isDark ? "#4a90e2" : "#3b82f6"} d="M0,0 L100,100 L100,0 Z" opacity="0.1"></path>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-75 blur-sm"></div>
              <div className={`relative ${isDark ? "bg-gray-800" : "bg-white"} rounded-full p-4 inline-block`}>
                <FaLandmark className={`text-5xl ${isDark ? "text-blue-400" : "text-blue-600"}`} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Dandeli City Municipal Council
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Overview of our city's leadership and committees
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
          Government Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              href={`/govt-services/${category.slug}`}
              key={category.slug}
              className="group block overflow-hidden"
            >
              <div className={`h-full flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                isDark ? "bg-gray-800" : "bg-white"
              } hover:shadow-xl transform-gpu hover:scale-[1.02] origin-center`}>
                <div className={`p-8 flex flex-col h-full border-t-4 ${isDark ? "border-blue-500" : "border-blue-600"}`}>
                  <div className={`mb-5 transition-transform duration-300 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  } group-hover:scale-110 transform-gpu origin-left`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  } group-hover:text-blue-500 transition-colors`}>
                    {category.name}
                  </h3>
                  <p className={`text-sm mb-5 flex-grow ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {category.description}
                  </p>
                  <div className="mt-auto">
                    <span className={`inline-flex items-center text-sm font-medium ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}>
                      Learn more
                      <svg className="w-4 h-4 ml-2 transform-gpu group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Footer Section */}
      <div className={`py-10 ${isDark ? "bg-gray-850" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            © 2023 Dandeli City Municipal Council. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
