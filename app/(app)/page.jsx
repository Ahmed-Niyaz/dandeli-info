"use client";

import { FaMapMarkedAlt, FaCompass, FaLeaf, FaWater, FaUtensils, FaBed, FaBus, FaBriefcase, FaLandmark, FaGraduationCap, FaHandsHelping, FaCalendarAlt, FaHospital, FaPalette, FaCity, FaMoneyCheckAlt, FaMountain } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full-width image background with overlay */}
      <section className="relative h-[95vh] overflow-hidden">
        {/* Background image */}
        {isClient && (
          <div className="absolute inset-0 z-0">
            <Image 
              src="/dandeli-river.jpg" 
              alt="Dandeli landscape" 
              fill 
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-700/50 z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400 mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-400 mix-blend-overlay filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-yellow-300 mix-blend-overlay filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-30">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-center max-w-4xl leading-tight drop-shadow-lg">
            Discover the Beauty of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Dandeli</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-center max-w-2xl drop-shadow-md">
            Your comprehensive guide to everything Dandeli has to offer
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/about-dandeli" className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition duration-300 shadow-lg">
              Explore Dandeli
            </Link>
            <Link href="/attractions" className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-full hover:bg-white/20 transform hover:scale-105 transition duration-300 shadow-lg">
              View Attractions
            </Link>
          </div>
          
          {/* Quick stats - Removed search bar and monthly users */}
          <div className="flex flex-wrap justify-center gap-12 text-white">
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">25+</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Services</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">100+</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Listings</p>
            </div>
          </div>
        </div>
        
        {/* Simple animated scroll indicator (no functionality) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section id="categories-section" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore Dandeli</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the best services, attractions, and resources our beautiful city has to offer
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Resorts", icon: <FaBed />, slug: "resorts", color: "bg-amber-500" },
              { name: "Restaurants", icon: <FaUtensils />, slug: "restaurants", color: "bg-red-500" },
              { name: "Activities", icon: <FaMountain />, slug: "activities", color: "bg-orange-500"},
              { name: "Transportation", icon: <FaBus />, slug: "transport", color: "bg-green-500" },
              { name: "Jobs", icon: <FaBriefcase />, slug: "jobs", color: "bg-purple-500" },
              { name: "Education", icon: <FaGraduationCap />, slug: "education", color: "bg-indigo-500" },
              { name: "Events", icon: <FaCalendarAlt />, slug: "events", color: "bg-pink-500" },
              { name: "Healthcare", icon: <FaHospital />, slug: "hospitals", color: "bg-emerald-500" }
            ].map((category) => (
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/categories">
              <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                View All Categories
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Dandeli Section - Now with real image */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-w-4 aspect-h-3 w-full relative h-96">
                    <Image 
                      src="/dandeli-river.jpg" 
                      alt="Scenic view of Kali River in Dandeli"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-yellow-400 rounded-xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-400 rounded-xl -z-10"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Dandeli</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Dandeli is a serene town nestled in the western ghats of Karnataka, known for its lush forests, abundant wildlife, and the pristine Kali River that flows through its heart.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                As a hub for eco-tourism and adventure activities, Dandeli offers white-water rafting, wildlife safaris, and a chance to connect with nature in its purest form.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/about-dandeli">
                  <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                    Learn More
                  </button>
                </Link>
                <Link href="/galleries">
                  <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors">
                    View Gallery
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Highlights */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Essential Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quick access to important services and information to make your stay comfortable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "Emergency Services", 
                icon: <FaHandsHelping />, 
                desc: "Access emergency contacts, hospitals, and helpline numbers", 
                link: "/helpline",
                iconColor: "text-red-500"
              },
              { 
                title: "Government Services", 
                icon: <FaLandmark />, 
                desc: "Find information about local government offices and services", 
                link: "/govt-services",
                iconColor: "text-blue-500"
              },
              { 
                title: "Banking & Finance", 
                icon: <FaMoneyCheckAlt />, 
                desc: "Locate banks, ATMs, and financial institutions in the area", 
                link: "/banks",
                iconColor: "text-green-500"
              },
            ].map((service, index) => (
              <Link href={service.link} key={index}>
                <div className="p-8 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`text-4xl ${service.iconColor} mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.desc}
                  </p>
                  <div className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
                    <span>View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
