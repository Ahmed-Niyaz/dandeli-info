"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  FaBusAlt, 
  FaRoute, 
  FaClock, 
  FaRupeeSign, 
  FaMapMarkerAlt,
  FaArrowLeft,
  FaInfoCircle,
  FaPhone,
  FaGlobe,
  FaTicketAlt,
  FaBuilding
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Private bus operators data
const busOperators = [
  {
    id: 1,
    name: "VRL Travels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/VRL_Travels_Logo.svg/1200px-VRL_Travels_Logo.svg.png",
    description: "One of the largest private bus operators in Karnataka, offering services to major cities from Dandeli.",
    website: "https://www.vrlgroup.in",
    contactNumber: "18002665636",
    bookingOffice: "Near Bus Stand, Main Road, Dandeli",
    routes: [
      {
        destination: "Bangalore",
        departureTime: "07:30 PM",
        arrivalTime: "07:00 AM (next day)",
        frequency: "Daily",
        busType: "Sleeper / Semi-Sleeper / Seater",
        fare: "₹800 - ₹1200"
      },
      {
        destination: "Mumbai",
        departureTime: "06:00 PM",
        arrivalTime: "08:00 AM (next day)",
        frequency: "Daily",
        busType: "Sleeper / Semi-Sleeper",
        fare: "₹1200 - ₹1800"
      },
      {
        destination: "Pune",
        departureTime: "07:00 PM",
        arrivalTime: "06:00 AM (next day)",
        frequency: "Daily",
        busType: "Sleeper / Semi-Sleeper",
        fare: "₹1000 - ₹1500"
      }
    ]
  },
  {
    id: 2,
    name: "Sugama Travels",
    logo: "https://sugamatourist.com/wp-content/uploads/2022/06/sugama-logo.png",
    description: "Premium bus service offering comfortable travel options from Dandeli to major cities in Karnataka and neighboring states.",
    website: "https://www.sugamatourist.com",
    contactNumber: "08192228111",
    bookingOffice: "City Center, Dandeli",
    routes: [
      {
        destination: "Bangalore",
        departureTime: "08:00 PM",
        arrivalTime: "07:30 AM (next day)",
        frequency: "Daily",
        busType: "Volvo Multi-Axle Sleeper / AC Seater",
        fare: "₹900 - ₹1400"
      },
      {
        destination: "Mangalore",
        departureTime: "08:30 PM",
        arrivalTime: "06:00 AM (next day)",
        frequency: "Daily",
        busType: "AC Sleeper / AC Seater",
        fare: "₹700 - ₹1100"
      }
    ]
  },
  {
    id: 3,
    name: "Navadurga Travels",
    logo: "https://5.imimg.com/data5/SELLER/Logo/2022/12/QL/BO/DP/3686328/navadurga-travels-logo-500x500.jpg",
    description: "Local operator providing reliable bus services from Dandeli to nearby cities and towns.",
    website: "N/A",
    contactNumber: "9845012345",
    bookingOffice: "Near Market, Dandeli",
    routes: [
      {
        destination: "Hubli",
        departureTime: "07:00 AM, 01:00 PM, 06:00 PM",
        arrivalTime: "09:30 AM, 03:30 PM, 08:30 PM",
        frequency: "Daily (Multiple Services)",
        busType: "Non-AC Seater",
        fare: "₹180 - ₹220"
      },
      {
        destination: "Dharwad",
        departureTime: "07:00 AM, 06:00 PM",
        arrivalTime: "10:00 AM, 09:00 PM",
        frequency: "Daily (Twice)",
        busType: "Non-AC Seater",
        fare: "₹200 - ₹250"
      },
      {
        destination: "Karwar",
        departureTime: "08:00 AM",
        arrivalTime: "11:30 AM",
        frequency: "Daily",
        busType: "Non-AC Seater",
        fare: "₹220 - ₹250"
      }
    ]
  },
  {
    id: 4,
    name: "SRS Travels",
    logo: "https://www.srstravels.co.in/images/logo.png",
    description: "National bus operator with services connecting Dandeli to major cities across South India.",
    website: "https://www.srstravels.co.in",
    contactNumber: "08041479999",
    bookingOffice: "Bus Stand Road, Dandeli",
    routes: [
      {
        destination: "Bangalore",
        departureTime: "07:00 PM",
        arrivalTime: "06:30 AM (next day)",
        frequency: "Daily",
        busType: "AC Sleeper / AC Seater",
        fare: "₹850 - ₹1300"
      },
      {
        destination: "Hyderabad",
        departureTime: "06:00 PM",
        arrivalTime: "09:00 AM (next day)",
        frequency: "Mon, Wed, Fri",
        busType: "AC Sleeper",
        fare: "₹1200 - ₹1600"
      }
    ]
  }
];

// Booking information
const bookingInfo = {
  onlineBooking: "Most private operators offer online booking through their websites or through aggregator platforms like RedBus, AbhiBus, and MakeMyTrip.",
  offlineBooking: "Tickets can be purchased directly from the operator's booking office in Dandeli.",
  advanceBooking: "It is recommended to book tickets 2-3 days in advance, especially for weekend travel and during holiday seasons.",
  cancellationPolicy: "Cancellation policies vary by operator. Generally, cancellations made 24-48 hours before departure incur a 25-50% charge. Check with the specific operator for details."
};

export default function PrivateBusPage() {
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
            <FaBusAlt className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Private Bus Services
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Information about private bus operators like VRL, Sugama, and Navadurga serving Dandeli
            </p>
          </div>
        </div>
      </div>

      {/* Booking Information */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaTicketAlt className="text-2xl text-primary" />
              <h2 className="text-xl font-bold text-foreground">Booking Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Online Booking</p>
                    <p className="text-foreground">{bookingInfo.onlineBooking}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaBuilding className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Offline Booking</p>
                    <p className="text-foreground">{bookingInfo.offlineBooking}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Advance Booking</p>
                    <p className="text-foreground">{bookingInfo.advanceBooking}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Cancellation Policy</p>
                    <p className="text-foreground">{bookingInfo.cancellationPolicy}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bus Operators */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Private Bus Operators</h2>
        <div className="space-y-8">
          {busOperators.map((operator) => (
            <Card key={operator.id} className="overflow-hidden shadow-lg">
              <div className="p-6">
                {/* Operator Header */}
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <div className="relative w-40 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-border">
                    <Image
                      src={operator.logo}
                      alt={operator.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold text-foreground">{operator.name}</h3>
                    <p className="text-muted-foreground mt-1">{operator.description}</p>
                    
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary" />
                        <span className="text-sm">{operator.bookingOffice}</span>
                      </div>
                      
                      {operator.website !== "N/A" && (
                        <div className="flex items-center gap-2">
                          <FaGlobe className="text-primary" />
                          <a 
                            href={operator.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:ml-auto">
                    <Button 
                      variant="default" 
                      asChild 
                      className="gap-2"
                    >
                      <a href={`tel:${operator.contactNumber}`}>
                        <FaPhone className="text-sm" />
                        {operator.contactNumber}
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Routes */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Routes & Schedules</h4>
                  <div className="space-y-4">
                    {operator.routes.map((route, index) => (
                      <Card key={index} className="overflow-hidden border border-border">
                        <div className="p-4">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-primary/10">
                                <FaRoute className="text-lg text-primary" />
                              </div>
                              <h5 className="text-md font-bold text-foreground">Dandeli to {route.destination}</h5>
                            </div>
                            <div className="md:ml-auto">
                              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                                {route.busType}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-start gap-2">
                              <FaClock className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-xs font-medium text-muted-foreground">Departure</p>
                                <p className="text-sm text-foreground">{route.departureTime}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <FaClock className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-xs font-medium text-muted-foreground">Arrival</p>
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
                          </div>
                          
                          <div className="mt-3 text-xs text-muted-foreground">
                            <span className="font-medium">Frequency:</span> {route.frequency}
                          </div>
                        </div>
                      </Card>
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