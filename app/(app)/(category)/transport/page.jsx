"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  FaBus, 
  FaTaxi, 
  FaTrain, 
  FaCarAlt,
  FaRoute,
  FaArrowRight,
  FaBusAlt
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Transport categories
const transportCategories = [
  {
    id: "bus",
    name: "KSRTC Bus Service",
    icon: <FaBus />,
    description: "Find bus routes, timings and fare information for KSRTC services in Dandeli.",
    link: "/transport/bus"
  },
  {
    id: "private-bus",
    name: "Private Bus Services",
    icon: <FaBusAlt />,
    description: "Information about private bus operators like VRL, Sugama, and Navadurga serving Dandeli.",
    link: "/transport/private-bus"
  },
  {
    id: "train",
    name: "Dandeli Railway Station",
    icon: <FaTrain />,
    description: "Information about railway services and station details (currently not operational).",
    link: "/transport/train",
    status: "Currently Not Operational"
  },
  {
    id: "taxi",
    name: "Taxi Services",
    icon: <FaTaxi />,
    description: "Find taxi services and drivers for local and outstation travel in Dandeli.",
    link: "/transport/taxi"
  },
  {
    id: "auto",
    name: "Auto Rickshaw Services",
    icon: <FaCarAlt />,
    description: "Auto rickshaw services for travel within Dandeli city and nearby areas.",
    link: "/transport/auto"
  },
  {
    id: "safari",
    name: "Jungle Safari Transport",
    icon: <FaRoute />,
    description: "Specialized transport services for wildlife sanctuary visits and adventure activities.",
    link: "/transport/safari"
  }
];

export default function TransportPage() {
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
          <div className="text-center max-w-3xl mx-auto">
            <FaBus className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Transport Services in Dandeli
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Find information about buses, trains, taxis, and other transport options
            </p>
          </div>
        </div>
      </div>

      {/* Transport Categories */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden shadow-lg flex flex-col h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <span className="text-3xl text-primary">
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
                    {category.status && (
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 mt-1">
                        {category.status}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {category.description}
                </p>

                <div className="mt-auto">
                  <Button asChild variant="default" className="w-full">
                    <Link href={category.link} className="flex items-center justify-center gap-2">
                      View Details
                      <FaArrowRight size={12} />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 