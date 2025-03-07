"use client";

import { FaMapMarkedAlt, FaCompass, FaLeaf, FaWater, FaUtensils, FaBed, FaBus, FaBriefcase, 
  FaLandmark, FaGraduationCap, FaHandsHelping, FaCalendarAlt, FaHospital, FaPalette, 
  FaCity, FaMoneyCheckAlt, FaShoppingBag, FaMusic, FaTree, FaBuilding, FaUsers, 
  FaHome, FaStore, FaCarAlt, FaPlane, FaShieldAlt, FaPray, FaFilm, FaHeartbeat, 
  FaBook, FaSpa, FaMapMarkerAlt, FaMountain } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Categories() {
  const [isClient, setIsClient] = useState(false);

  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // All category data with icons, colors, and slug links
  const allCategories = [
    // Core categories from homepage
    { name: "Resorts", icon: <FaBed />, slug: "resorts", color: "bg-amber-500", description: "Find the best places to stay in Dandeli" },
    { name: "Restaurants", icon: <FaUtensils />, slug: "restaurants", color: "bg-red-500", description: "Discover local cuisine and dining options" },
    // { name: "Adventures", icon: <FaWater />, slug: "adventures", color: "bg-blue-500", description: "Explore thrilling activities and experiences" },
    { name: "Transportation", icon: <FaBus />, slug: "transport", color: "bg-green-500", description: "Find ways to get around Dandeli" },
    { name: "Jobs", icon: <FaBriefcase />, slug: "jobs", color: "bg-purple-500", description: "Browse local job opportunities" },
    { name: "Education", icon: <FaGraduationCap />, slug: "education", color: "bg-indigo-500", description: "Access educational resources and institutions" },
    { name: "Events", icon: <FaCalendarAlt />, slug: "events", color: "bg-pink-500", description: "Stay updated on local events and festivals" },
    { name: "Healthcare", icon: <FaHospital />, slug: "hospitals", color: "bg-emerald-500", description: "Find medical facilities and services" },
    
    // New categories for Tourist Places and Activities
    { name: "Tourist Places", icon: <FaMapMarkerAlt />, slug: "tourist-places", color: "bg-teal-500", description: "Discover the most popular attractions in Dandeli" },
    { name: "Activities", icon: <FaMountain />, slug: "activities", color: "bg-orange-500", description: "Explore the exciting outdoor activities Dandeli has to offer" },
    
    // Additional categories from the directory
    { name: "Government Services", icon: <FaLandmark />, slug: "govt-services", color: "bg-blue-600", description: "Access local government resources" },
    { name: "Banking", icon: <FaMoneyCheckAlt />, slug: "banks", color: "bg-green-600", description: "Find financial services and ATMs" },
    { name: "Helpline", icon: <FaHandsHelping />, slug: "helpline", color: "bg-red-600", description: "Access emergency contacts and support" },
    { name: "About Dandeli", icon: <FaCompass />, slug: "about-dandeli", color: "bg-teal-500", description: "Learn about Dandeli's history and culture" },
    { name: "Artists", icon: <FaPalette />, slug: "artists", color: "bg-purple-600", description: "Discover local artists and craftspeople" },
    { name: "Community Work", icon: <FaUsers />, slug: "community-work", color: "bg-yellow-600", description: "Find community initiatives and volunteering" },
    { name: "Complaints", icon: <FaShieldAlt />, slug: "complaints", color: "bg-gray-500", description: "Report issues and access public services" },
    
    // Additional potential categories
    { name: "Shopping", icon: <FaShoppingBag />, slug: "shopping", color: "bg-pink-600", description: "Find local shops and markets" },
    { name: "Nature & Wildlife", icon: <FaTree />, slug: "nature", color: "bg-green-700", description: "Explore Dandeli's natural beauty" },
    { name: "Real Estate", icon: <FaHome />, slug: "real-estate", color: "bg-blue-700", description: "Browse properties and housing options" },
    { name: "Religious Places", icon: <FaPray />, slug: "religious", color: "bg-amber-600", description: "Discover temples and religious sites" },
    { name: "Entertainment", icon: <FaFilm />, slug: "entertainment", color: "bg-indigo-600", description: "Find local entertainment venues" },
    { name: "Wellness", icon: <FaSpa />, slug: "wellness", color: "bg-teal-600", description: "Access spas and wellness centers" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Categories
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore all the services, attractions, and resources available in Dandeli
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allCategories.map((category) => (
              <Link href={`/${category.slug}`} key={category.slug} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className={`${category.color} h-3 w-full`}></div>
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-3xl">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 text-center">
          <Link href="/">
            <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
} 