"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  FaBus, 
  FaRoute, 
  FaClock, 
  FaRupeeSign, 
  FaMapMarkerAlt,
  FaArrowLeft,
  FaInfoCircle
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Bus routes data
const busRoutes = [
  {
    id: 1,
    route: "Dandeli - Bangalore",
    busType: "Super Luxury",
    departureTime: "06:30 AM",
    arrivalTime: "04:30 PM",
    frequency: "Daily",
    fare: "₹550",
    distance: "450 km",
    duration: "10 hours",
    stops: ["Hubli", "Haveri", "Davangere", "Tumkur"]
  },
  {
    id: 2,
    route: "Dandeli - Hubli",
    busType: "Express",
    departureTime: "08:00 AM, 11:00 AM, 02:00 PM, 05:00 PM",
    arrivalTime: "10:30 AM, 01:30 PM, 04:30 PM, 07:30 PM",
    frequency: "Daily (Multiple Services)",
    fare: "₹150",
    distance: "75 km",
    duration: "2.5 hours",
    stops: ["Yellapur", "Kalaghatgi"]
  },
  {
    id: 3,
    route: "Dandeli - Dharwad",
    busType: "Express",
    departureTime: "07:30 AM, 12:30 PM, 04:30 PM",
    arrivalTime: "10:30 AM, 03:30 PM, 07:30 PM",
    frequency: "Daily (Multiple Services)",
    fare: "₹180",
    distance: "90 km",
    duration: "3 hours",
    stops: ["Yellapur", "Kalaghatgi", "Hubli"]
  },
  {
    id: 4,
    route: "Dandeli - Karwar",
    busType: "Regular",
    departureTime: "07:00 AM, 01:00 PM",
    arrivalTime: "10:30 AM, 04:30 PM",
    frequency: "Daily (Twice)",
    fare: "₹200",
    distance: "110 km",
    duration: "3.5 hours",
    stops: ["Yellapur", "Ankola"]
  },
  {
    id: 5,
    route: "Dandeli - Goa (Panaji)",
    busType: "Super Luxury",
    departureTime: "08:30 AM",
    arrivalTime: "02:30 PM",
    frequency: "Daily",
    fare: "₹350",
    distance: "190 km",
    duration: "6 hours",
    stops: ["Yellapur", "Ankola", "Karwar", "Canacona", "Margao"]
  }
];

// Bus station information
const busStationInfo = {
  name: "KSRTC Bus Stand Dandeli",
  address: "Main Road, Near Market, Dandeli, Karnataka 581325",
  contactNumber: "08284-231234",
  operatingHours: "05:00 AM - 11:00 PM",
  facilities: ["Waiting Room", "Restrooms", "Ticket Counter", "Snack Stall"]
};

export default function BusServicePage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto p-4">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-card py-12 mb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-6">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="/transport">
                <FaArrowLeft size={14} />
                Back to Transport Services
              </Link>
            </Button>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <FaBus className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              KSRTC Bus Service
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Bus routes, timings and fare information for services from Dandeli
            </p>
          </div>
        </div>
      </div>

      {/* Bus Station Information */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-2xl text-primary" />
              <h2 className="text-xl font-bold text-foreground">Bus Station Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-foreground">{busStationInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Operating Hours</p>
                    <p className="text-foreground">{busStationInfo.operatingHours}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Facilities</p>
                    <ul className="list-disc list-inside text-foreground">
                      {busStationInfo.facilities.map((facility, index) => (
                        <li key={index}>{facility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Button 
                    variant="default" 
                    asChild 
                    className="gap-2"
                  >
                    <a href={`tel:${busStationInfo.contactNumber}`}>
                      <FaBus className="text-sm" />
                      Contact Bus Station
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bus Routes */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Bus Routes from Dandeli</h2>
        <div className="space-y-6">
          {busRoutes.map((route) => (
            <Card key={route.id} className="overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <FaRoute className="text-xl text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{route.route}</h3>
                  </div>
                  <div className="md:ml-auto">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                      {route.busType}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-start gap-2">
                    <FaClock className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Departure Time</p>
                      <p className="text-sm text-foreground">{route.departureTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <FaClock className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Arrival Time</p>
                      <p className="text-sm text-foreground">{route.arrivalTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <FaRupeeSign className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Fare</p>
                      <p className="text-sm text-foreground">{route.fare}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <FaClock className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Duration</p>
                      <p className="text-sm text-foreground">{route.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Stops</p>
                  <div className="flex flex-wrap gap-2">
                    {route.stops.map((stop, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground"
                      >
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 