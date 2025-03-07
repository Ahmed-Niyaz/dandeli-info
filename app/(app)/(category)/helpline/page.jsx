"use client";
import { FaCity, FaBriefcase, FaHeartbeat, FaAmbulance, FaFireExtinguisher, FaPhone } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const helplineData = [
  {
    name: "CMC Dandeli",
    helpline: "08284-233472",
    icon: <FaCity />,
    description: "City Municipal Council Emergency Contact"
  },
  {
    name: "Labour Department",
    helpline: "155214",
    icon: <FaBriefcase />,
    description: "24/7 Labour Department Helpline"
  },
  {
    name: "Health and Family Welfare Services",
    helpline: "104",
    icon: <FaHeartbeat />,
    description: "Health Emergency Helpline"
  },
  {
    name: "Ambulance Service",
    helpline: "108",
    icon: <FaAmbulance />,
    description: "Emergency Ambulance Service"
  },
  {
    name: "Karnataka State Fire and Emergency Services",
    helpline: "101/112",
    icon: <FaFireExtinguisher />,
    description: "Fire and Emergency Services"
  }
];

export default function HelplineList() {
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
            <FaPhone className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Emergency Helpline Numbers
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Quick access to important emergency services in Dandeli
            </p>
          </div>
        </div>
      </div>

      {/* Helpline Table */}
      <div className="container mx-auto px-4 pb-16">
        <Card className="overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    Helpline
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {helplineData.map((item, index) => (
                  <tr 
                    key={index}
                    className="group hover:bg-accent transition-colors text-foreground"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <span className="text-xl text-primary">
                            {item.icon}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Button 
                        variant="link" 
                        asChild 
                        className="p-0 h-auto font-medium text-primary hover:no-underline"
                      >
                        <a href={`tel:${item.helpline}`} className="flex items-center gap-2">
                          <FaPhone className="text-lg" />
                          {item.helpline}
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
