"use client";

import React from 'react';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { 
  FaHandsHelping, 
  FaUsers, 
  FaHeart, 
  FaGlobe, 
  FaTree, 
  FaGraduationCap, 
  FaHandHoldingHeart,
  FaLeaf,
  FaBookReader,
  FaUtensils,
  FaInfoCircle,
  FaTimes
} from 'react-icons/fa';

const CommunityWorkPage = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Function to open the dialog
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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

  const featuredProjects = [
    {
      title: "Community Food Bank",
      description: "Support local families through our monthly food distribution program. Join us in making sure no one goes hungry in our community.",
      impact: "500+ Families Helped",
      status: "Active",
      icon: <FaUtensils className="w-8 h-8" />
    },
    {
      title: "Youth Education Program",
      description: "Empower the next generation through our after-school tutoring and mentorship initiatives. Help shape young minds for a brighter future.",
      impact: "200+ Students",
      status: "Ongoing",
      icon: <FaBookReader className="w-8 h-8" />
    },
    {
      title: "Green Dandeli Initiative",
      description: "Join our environmental conservation efforts through tree planting and clean-up drives. Together, we can create a sustainable future.",
      impact: "1000+ Trees Planted",
      status: "Monthly",
      icon: <FaLeaf className="w-8 h-8" />
    }
  ];


  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-12 mb-8`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaHandsHelping className={`text-5xl mx-auto mb-4 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Community Work
            </h1>
            <p className={`text-lg mb-8 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Join our initiatives to make Dandeli a better place for everyone
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className={`text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md flex flex-col h-full ${
              currentTheme === "dark" ? "bg-gray-800" : "bg-white"
            }`}>
              <div className={`flex justify-center mb-4 ${
                currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}>
                {project.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-4 text-center ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {project.title}
              </h3>
              <p className={`text-center mb-6 flex-grow ${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
                {project.description}
              </p>
              <div className="flex justify-center items-center mt-auto">
                {/* <span className={`text-sm ${
                  currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}>
                  {project.impact}
                </span> */}
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved Section */}
      <div className={`py-16 ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            How to Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <FaHandsHelping className={`text-4xl mx-auto mb-4 ${
                currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
              }`} />
              <h3 className={`text-xl font-semibold mb-4 ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Volunteer
              </h3>
              <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Sign up for our upcoming projects and events. Every helping hand makes a difference.
              </p>
            </div>
            <div className="text-center">
              <FaHeart className={`text-4xl mx-auto mb-4 ${
                currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
              }`} />
              <h3 className={`text-xl font-semibold mb-4 ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Donate
              </h3>
              <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Support our initiatives through monetary donations or supplies.
              </p>
            </div>
            <div className="text-center">
              <FaUsers className={`text-4xl mx-auto mb-4 ${
                currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
              }`} />
              <h3 className={`text-xl font-semibold mb-4 ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Spread the Word
              </h3>
              <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Share our mission with your network and help us grow our community.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={openDialog}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium hover:from-blue-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg">
              Join Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Dialog Component */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`relative max-w-md w-full rounded-lg shadow-xl p-6 ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <button 
              onClick={closeDialog}
              className={`absolute top-3 right-3 ${currentTheme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"}`}
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <FaInfoCircle className={`text-4xl mx-auto mb-4 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
              <h3 className={`text-xl font-semibold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                Coming Soon!
              </h3>
              <p className={`mb-6 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                This is an ongoing project. We're working on adding this feature soon. Thank you for your interest!
              </p>
              <button
                onClick={closeDialog}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium hover:from-blue-700 hover:to-teal-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityWorkPage; 