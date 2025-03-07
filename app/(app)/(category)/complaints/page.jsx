"use client";
import { useState, useEffect } from "react";
import { FaExclamationTriangle, FaCommentDots, FaThumbsUp } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Sample complaint categories
const complaintCategories = [
  { value: "infrastructure", label: "Roads & Infrastructure" },
  { value: "sanitation", label: "Sanitation & Cleanliness" },
  { value: "parks", label: "Parks & Public Spaces" },
  { value: "waterSupply", label: "Water Supply" },
  { value: "electricity", label: "Electricity" },
  { value: "publicTransport", label: "Public Transport" },
  { value: "noise", label: "Noise Pollution" },
  { value: "others", label: "Others" },
];

// Sample existing complaints for demonstration
const existingComplaints = [
  {
    id: 1,
    category: "infrastructure",
    title: "Pothole on Main Street",
    description: "Large pothole near the central market causing traffic issues. The pothole is approximately 2 feet wide and has been there for several weeks now. Multiple vehicles have been damaged.",
    location: "Main Street, near Central Market",
    status: "pending",
    upvotes: 15,
    date: "2023-12-10",
  },
  {
    id: 2,
    category: "parks",
    title: "City Park Maintenance",
    description: "The city park needs better maintenance. The grass is overgrown and there's trash around the benches. Children's play equipment is damaged in some areas and needs repair.",
    location: "City Park, West Entrance",
    status: "in-progress",
    upvotes: 28,
    date: "2023-12-05",
  },
  {
    id: 3,
    category: "sanitation",
    title: "Garbage Collection Issue",
    description: "Garbage has not been collected from our area for the past week. This is causing a foul smell and hygiene concerns for residents. Stray animals are also scattering the garbage.",
    location: "River View Colony",
    status: "resolved",
    upvotes: 42,
    date: "2023-11-25",
  },
  {
    id: 4,
    category: "waterSupply",
    title: "Irregular Water Supply",
    description: "Our neighborhood has been experiencing irregular water supply for the past month. Water is only available for 1-2 hours in the morning, which is insufficient for daily needs.",
    location: "Forest View Apartments",
    status: "pending",
    upvotes: 37,
    date: "2023-12-12",
  },
  {
    id: 5,
    category: "electricity",
    title: "Frequent Power Outages",
    description: "Our area has been experiencing frequent power outages, especially in the evenings. This has been ongoing for the past two weeks and is affecting work-from-home employees.",
    location: "Gandhi Nagar, Blocks 3-5",
    status: "in-progress",
    upvotes: 23,
    date: "2023-12-08",
  },
  {
    id: 6,
    category: "others",
    title: "Stray Dog Menace",
    description: "There has been an increase in the number of stray dogs in our area. They chase vehicles and people, creating safety concerns, especially for children and the elderly.",
    location: "Lakeside Colony, Sectors 1-3",
    status: "pending",
    upvotes: 19,
    date: "2023-12-15",
  },
];

export default function ComplaintsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [complaints, setComplaints] = useState(existingComplaints);
  const [mounted, setMounted] = useState(false);

  // Use useEffect to set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUpvote = (id) => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id
          ? { ...complaint, upvotes: complaint.upvotes + 1 }
          : complaint
      )
    );
  };

  // Only access theme on the client side to prevent hydration mismatch
  const currentTheme = mounted ? (resolvedTheme || theme) : "light";
  const isDark = currentTheme === "dark";

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-500";
      case "in-progress":
        return "text-blue-500";
      case "resolved":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Header Section */}
      <div className={`py-12 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <FaCommentDots className={`text-5xl mx-auto mb-4 ${isDark ? "text-red-400" : "text-red-600"}`} />
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
              Dandeli City Complaints
            </h1>
            <p className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              View reported issues in the city to raise awareness and improve Dandeli
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div>
          <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? "text-white" : "text-gray-900"}`}>
            Current Complaints
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complaints.map((complaint) => (
              <Card 
                key={complaint.id} 
                className={`overflow-hidden ${isDark ? "bg-gray-800 text-white" : "bg-white"}`}
              >
                <div className={`px-4 py-2 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}>
                  <div className="flex items-center">
                    <FaExclamationTriangle className={`mr-2 ${getStatusColor(complaint.status)}`} />
                    <span className={`text-sm font-medium ${getStatusColor(complaint.status)}`}>
                      {complaint.status === "pending" ? "Pending" : 
                       complaint.status === "in-progress" ? "In Progress" : "Resolved"}
                    </span>
                  </div>
                  <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    Reported on {complaint.date}
                  </span>
                </div>
                
                <div className="p-4">
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                    {complaintCategories.find(c => c.value === complaint.category)?.label || "Other"}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{complaint.title}</h3>
                  <p className={`mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{complaint.description}</p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"} mb-4`}>
                    <strong>Location:</strong> {complaint.location}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => handleUpvote(complaint.id)}
                    >
                      <FaThumbsUp className="mr-2" />
                      <span>Support ({complaint.upvotes})</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 