"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  FaTrain, 
  FaMapMarkerAlt, 
  FaInfoCircle, 
  FaExclamationTriangle,
  FaArrowLeft,
  FaPhone,
  FaHistory,
  FaBus,
  FaTaxi
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Railway station information
const railwayStationInfo = {
  name: "Dandeli Railway Station",
  address: "Railway Station Road, Dandeli, Karnataka 581325",
  contactNumber: "08284-232345",
  status: "Currently Not Operational",
  statusDetails: "The railway service to Dandeli is temporarily suspended due to track maintenance and upgrades. Please use alternative transport options.",
  nearestOperationalStation: "Londa Junction (45 km from Dandeli)",
  history: "Dandeli Railway Station was established during the British era primarily to support the paper mill industry. It was a key transportation hub for goods and passengers connecting to the main railway network through Hubli and Londa Junction."
};

export default function RailwayStationPage() {
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
            <FaTrain className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Dandeli Railway Station
            </h1>
            <p className="text-lg mb-4 text-muted-foreground">
              Information about railway services and station details
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
              <FaExclamationTriangle />
              <span className="font-medium">{railwayStationInfo.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Alert */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="overflow-hidden shadow-lg border-l-4 border-l-yellow-500">
          <div className="p-6 bg-yellow-50 dark:bg-yellow-900/10">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-2xl text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-500 mb-2">Service Status: Not Operational</h2>
                <p className="text-yellow-700 dark:text-yellow-400">{railwayStationInfo.statusDetails}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-500">Alternative Option:</p>
                  <p className="text-yellow-700 dark:text-yellow-400">{railwayStationInfo.nearestOperationalStation}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Station Information */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-2xl text-primary" />
              <h2 className="text-xl font-bold text-foreground">Station Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-foreground">{railwayStationInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaPhone className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Contact</p>
                    <Button 
                      variant="link" 
                      asChild 
                      className="p-0 h-auto font-medium text-primary hover:no-underline"
                    >
                      <a href={`tel:${railwayStationInfo.contactNumber}`} className="flex items-center gap-2">
                        {railwayStationInfo.contactNumber}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaHistory className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">History</p>
                    <p className="text-foreground">{railwayStationInfo.history}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Alternative Transport Options */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Alternative Transport Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBus className="text-2xl text-primary" />
                <h3 className="text-lg font-bold text-foreground">KSRTC Bus Service</h3>
              </div>
              <p className="text-muted-foreground mb-4">Regular bus services connect Dandeli to major cities and nearby towns.</p>
              <Button asChild variant="default" className="w-full">
                <Link href="/transport/bus" className="flex items-center justify-center gap-2">
                  View Bus Services
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaTaxi className="text-2xl text-primary" />
                <h3 className="text-lg font-bold text-foreground">Taxi Services</h3>
              </div>
              <p className="text-muted-foreground mb-4">Taxis are available for travel to nearby railway stations like Londa Junction.</p>
              <Button asChild variant="default" className="w-full">
                <Link href="/transport/taxi" className="flex items-center justify-center gap-2">
                  View Taxi Services
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 