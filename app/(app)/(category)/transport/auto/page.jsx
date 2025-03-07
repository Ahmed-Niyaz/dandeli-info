"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  FaCarAlt, 
  FaPhone, 
  FaUser, 
  FaMapMarkerAlt, 
  FaRupeeSign, 
  FaArrowLeft,
  FaInfoCircle,
  FaStar,
  FaLanguage,
  FaClock
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Auto rickshaw drivers data (dummy data)
const autoDrivers = [
  {
    id: 1,
    name: "Venkatesh Rao",
    phone: "9876543220",
    photo: "https://randomuser.me/api/portraits/men/72.jpg",
    experience: "8 years",
    languages: ["Kannada", "Hindi"],
    vehicleNumber: "KA-25-A-1234",
    rating: 4.6,
    reviews: 87,
    availability: "6:00 AM - 10:00 PM",
    fareMinimum: "₹30",
    farePerKm: "₹15/km",
    areas: ["Dandeli City", "Market Area", "Bus Stand", "Tourist Spots"]
  },
  {
    id: 2,
    name: "Prakash Gowda",
    phone: "9876543221",
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
    experience: "12 years",
    languages: ["Kannada", "Hindi", "English"],
    vehicleNumber: "KA-25-A-5678",
    rating: 4.8,
    reviews: 112,
    availability: "5:00 AM - 11:00 PM",
    fareMinimum: "₹30",
    farePerKm: "₹15/km",
    areas: ["Dandeli City", "Market Area", "Bus Stand", "Railway Station", "Tourist Spots"]
  },
  {
    id: 3,
    name: "Ravi Kumar",
    phone: "9876543222",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    experience: "5 years",
    languages: ["Kannada", "Hindi"],
    vehicleNumber: "KA-25-A-9012",
    rating: 4.5,
    reviews: 65,
    availability: "7:00 AM - 9:00 PM",
    fareMinimum: "₹30",
    farePerKm: "₹15/km",
    areas: ["Dandeli City", "Market Area", "Bus Stand"]
  },
  {
    id: 4,
    name: "Manjunath Hegde",
    phone: "9876543223",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    experience: "10 years",
    languages: ["Kannada", "Hindi", "Marathi"],
    vehicleNumber: "KA-25-A-3456",
    rating: 4.7,
    reviews: 94,
    availability: "6:00 AM - 10:00 PM",
    fareMinimum: "₹30",
    farePerKm: "₹15/km",
    areas: ["Dandeli City", "Market Area", "Bus Stand", "Tourist Spots", "Nearby Villages"]
  },
  {
    id: 5,
    name: "Shivanand Patil",
    phone: "9876543224",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    experience: "7 years",
    languages: ["Kannada", "Hindi"],
    vehicleNumber: "KA-25-A-7890",
    rating: 4.4,
    reviews: 72,
    availability: "7:00 AM - 9:00 PM",
    fareMinimum: "₹30",
    farePerKm: "₹15/km",
    areas: ["Dandeli City", "Market Area", "Bus Stand", "Tourist Spots"]
  }
];

// Auto rickshaw union information
const autoUnionInfo = {
  name: "Dandeli Auto Rickshaw Union",
  address: "City Center, Near Market, Dandeli, Karnataka 581325",
  contactNumber: "08284-234567",
  operatingHours: "6:00 AM - 10:00 PM",
  fareInfo: "Minimum fare: ₹30 for first 1.5 km, ₹15 per km thereafter. Night charges (10 PM - 6 AM): 1.5x normal fare."
};

export default function AutoRickshawPage() {
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
            <FaCarAlt className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Auto Rickshaw Services
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Find auto rickshaws for travel within Dandeli city and nearby areas
            </p>
          </div>
        </div>
      </div>

      {/* Auto Union Information */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-2xl text-primary" />
              <h2 className="text-xl font-bold text-foreground">Auto Rickshaw Union Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-foreground">{autoUnionInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Operating Hours</p>
                    <p className="text-foreground">{autoUnionInfo.operatingHours}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaRupeeSign className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Fare Information</p>
                    <p className="text-foreground">{autoUnionInfo.fareInfo}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Button 
                    variant="default" 
                    asChild 
                    className="gap-2"
                  >
                    <a href={`tel:${autoUnionInfo.contactNumber}`}>
                      <FaPhone className="text-sm" />
                      Contact Auto Union
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Auto Drivers */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Available Auto Rickshaw Drivers</h2>
        <div className="space-y-6">
          {autoDrivers.map((driver) => (
            <Card key={driver.id} className="overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Driver Info */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={driver.photo}
                        alt={driver.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{driver.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex items-center">
                          <FaStar className="text-yellow-500" size={14} />
                          <span className="ml-1 text-sm font-medium">{driver.rating}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">({driver.reviews} reviews)</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{driver.experience} experience</p>
                    </div>
                  </div>

                  {/* Contact Button (for mobile) */}
                  <div className="md:hidden mt-4">
                    <Button 
                      variant="default" 
                      asChild 
                      className="w-full"
                    >
                      <a href={`tel:${driver.phone}`} className="flex items-center justify-center gap-2">
                        <FaPhone className="text-sm" />
                        Call Driver
                      </a>
                    </Button>
                  </div>

                  {/* Contact Button (for desktop) */}
                  <div className="hidden md:block ml-auto">
                    <Button 
                      variant="default" 
                      asChild
                    >
                      <a href={`tel:${driver.phone}`} className="flex items-center gap-2">
                        <FaPhone className="text-sm" />
                        {driver.phone}
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Vehicle Details */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <FaCarAlt className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Vehicle Number</p>
                        <p className="text-sm text-foreground">{driver.vehicleNumber}</p>
                      </div>
                    </div>
                  </div>

                  {/* Fare Details */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <FaRupeeSign className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Fare</p>
                        <p className="text-sm text-foreground">Minimum: {driver.fareMinimum}</p>
                        <p className="text-sm text-foreground">Per km: {driver.farePerKm}</p>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <FaLanguage className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Languages</p>
                        <p className="text-sm text-foreground">{driver.languages.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Service Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {driver.areas.map((area, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground"
                      >
                        {area}
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