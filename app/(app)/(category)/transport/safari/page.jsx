"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  FaRoute, 
  FaPhone, 
  FaUser, 
  FaMapMarkerAlt, 
  FaRupeeSign, 
  FaCarAlt,
  FaArrowLeft,
  FaInfoCircle,
  FaStar,
  FaLanguage,
  FaTree,
  FaShieldAlt,
  FaCalendarAlt
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Safari drivers data (dummy data)
const safariDrivers = [
  {
    id: 1,
    name: "Anand Naik",
    phone: "9876543230",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    experience: "15 years",
    languages: ["Kannada", "Hindi", "English"],
    vehicleType: "Mahindra Thar 4x4",
    vehicleNumber: "KA-25-S-1234",
    rating: 4.9,
    reviews: 156,
    availability: "8:00 AM - 5:00 PM (Booking required)",
    fare: "₹2500 for half-day safari, ₹4500 for full-day safari",
    specialties: ["Wildlife Photography", "Bird Watching", "Nature Trails"],
    certification: "Certified Wildlife Guide",
    areas: ["Dandeli Wildlife Sanctuary", "Kali River", "Syntheri Rocks", "Kavala Caves"]
  },
  {
    id: 2,
    name: "Sunil Gowda",
    phone: "9876543231",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    experience: "12 years",
    languages: ["Kannada", "Hindi", "English"],
    vehicleType: "Mahindra Bolero 4x4",
    vehicleNumber: "KA-25-S-5678",
    rating: 4.8,
    reviews: 132,
    availability: "8:00 AM - 5:00 PM (Booking required)",
    fare: "₹2200 for half-day safari, ₹4000 for full-day safari",
    specialties: ["Wildlife Spotting", "Adventure Trails", "River Rafting"],
    certification: "Certified Wildlife Guide",
    areas: ["Dandeli Wildlife Sanctuary", "Kali River", "Adventure Camps"]
  },
  {
    id: 3,
    name: "Ramesh Hegde",
    phone: "9876543232",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    experience: "10 years",
    languages: ["Kannada", "Hindi"],
    vehicleType: "Mahindra Scorpio 4x4",
    vehicleNumber: "KA-25-S-9012",
    rating: 4.7,
    reviews: 118,
    availability: "8:00 AM - 5:00 PM (Booking required)",
    fare: "₹2300 for half-day safari, ₹4200 for full-day safari",
    specialties: ["Wildlife Spotting", "Tribal Village Visits"],
    certification: "Certified Wildlife Guide",
    areas: ["Dandeli Wildlife Sanctuary", "Kali River", "Tribal Villages"]
  },
  {
    id: 4,
    name: "Girish Kumar",
    phone: "9876543233",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    experience: "8 years",
    languages: ["Kannada", "Hindi", "English"],
    vehicleType: "Toyota Fortuner 4x4",
    vehicleNumber: "KA-25-S-3456",
    rating: 4.8,
    reviews: 96,
    availability: "8:00 AM - 5:00 PM (Booking required)",
    fare: "₹3000 for half-day safari, ₹5500 for full-day safari",
    specialties: ["Luxury Safari", "Wildlife Photography", "Bird Watching"],
    certification: "Certified Wildlife Guide",
    areas: ["Dandeli Wildlife Sanctuary", "Kali River", "Syntheri Rocks", "Kavala Caves", "Adventure Camps"]
  },
  {
    id: 5,
    name: "Manoj Patil",
    phone: "9876543234",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    experience: "7 years",
    languages: ["Kannada", "Hindi", "Marathi"],
    vehicleType: "Mahindra Thar 4x4",
    vehicleNumber: "KA-25-S-7890",
    rating: 4.6,
    reviews: 87,
    availability: "8:00 AM - 5:00 PM (Booking required)",
    fare: "₹2400 for half-day safari, ₹4300 for full-day safari",
    specialties: ["Wildlife Spotting", "Adventure Trails"],
    certification: "Certified Wildlife Guide",
    areas: ["Dandeli Wildlife Sanctuary", "Kali River", "Adventure Camps"]
  }
];

// Safari service information
const safariServiceInfo = {
  name: "Jungle Safari Transport",
  address: "Tourism Office, Forest Road, Dandeli, Karnataka 581325",
  contactNumber: "08284-235678",
  operatingHours: "8:00 AM - 5:00 PM (Booking required)",
  bookingInfo: "Advance booking recommended, especially during weekends and holidays. Bookings can be made through phone or at the tourism office.",
  safetyInfo: "All safari vehicles are equipped with safety equipment. Guides are trained in first aid and wildlife safety protocols.",
  bestTime: "October to May is the best time for wildlife safaris in Dandeli."
};

export default function JungleSafariPage() {
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
            <FaRoute className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Jungle Safari Transport
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Specialized transport services for wildlife sanctuary visits and adventure activities
            </p>
          </div>
        </div>
      </div>

      {/* Safari Service Information */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-2xl text-primary" />
              <h2 className="text-xl font-bold text-foreground">Safari Service Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-foreground">{safariServiceInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Operating Hours</p>
                    <p className="text-foreground">{safariServiceInfo.operatingHours}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Best Time to Visit</p>
                    <p className="text-foreground">{safariServiceInfo.bestTime}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Booking Information</p>
                    <p className="text-foreground">{safariServiceInfo.bookingInfo}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Safety Information</p>
                    <p className="text-foreground">{safariServiceInfo.safetyInfo}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Button 
                    variant="default" 
                    asChild 
                    className="gap-2"
                  >
                    <a href={`tel:${safariServiceInfo.contactNumber}`}>
                      <FaPhone className="text-sm" />
                      Contact Safari Service
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Safari Drivers */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Available Safari Guides & Drivers</h2>
        <div className="space-y-6">
          {safariDrivers.map((driver) => (
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
                      <div className="flex items-center gap-1 mt-1">
                        <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500">
                          {driver.certification}
                        </span>
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
                        Call Guide
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
                        <p className="text-xs font-medium text-muted-foreground">Vehicle</p>
                        <p className="text-sm text-foreground">{driver.vehicleType}</p>
                        <p className="text-xs text-muted-foreground">{driver.vehicleNumber}</p>
                      </div>
                    </div>
                  </div>

                  {/* Fare Details */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <FaRupeeSign className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Fare</p>
                        <p className="text-sm text-foreground">{driver.fare}</p>
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
                  <p className="text-xs font-medium text-muted-foreground mb-1">Specialties</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {driver.specialties.map((specialty, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
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