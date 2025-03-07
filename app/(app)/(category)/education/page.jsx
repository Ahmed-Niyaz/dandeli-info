"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaGraduationCap, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import educationData from "../../../../data/schoolData.json";

const EducationCard = ({ item, currentTheme }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
        currentTheme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="https://imgs.search.brave.com/semj0l48CuSRAuCy-5pyHuarj0VffguQwFblXUQJ5nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2Nob29sLXBp/Y3R1cmUtYmFja2dy/b3VuZC1rYngzd2tx/dWYwbGJsc3g3Lmpw/Zw"
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          quality={100}
          sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
        />
      </div>

      {/* Text content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3
            onClick={() => setExpanded(!expanded)}
            className={`text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity ${
              currentTheme === "dark" ? "text-white" : "text-gray-900"
            } ${expanded ? "" : "line-clamp-2"}`}
          >
            {item.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt className={`text-sm ${
              currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
            }`} />
            <p className={`text-sm ${
              currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
            } ${expanded ? "" : "line-clamp-2"}`}>
              {item.location}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <a
            href={item.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 text-sm font-medium ${
              currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
            } hover:opacity-80 transition-opacity`}
          >
            View on Google Maps
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function EducationPage() {
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

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-12 mb-8`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaGraduationCap className={`text-5xl mx-auto mb-4 ${
              currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
            }`} />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Education Institutions in Dandeli
            </h1>
            <p className={`text-lg mb-8 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Discover the educational opportunities in our city
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-16">
        <div className="space-y-16">
          {["schools", "preUniversity", "degreeColleges", "otherInstitutions"].map(
            (section) => (
              <section key={section} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-3xl -z-10"></div>
                <h2 className={`text-2xl font-semibold mb-8 text-center ${
                  currentTheme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {section.replace(/([A-Z])/g, " $1")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {educationData[section].map((item, index) => (
                    <EducationCard key={index} item={item} currentTheme={currentTheme} />
                  ))}
                </div>
              </section>
            )
          )}
        </div>
      </div>
    </div>
  );
}
