"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import cityStaffData from "../../../../../data/cityStaff.json";
import councilMembersData from "../../../../../data/councilMembers.json";
import electedRepresentativesData from "../../../../../data/electedRepresentatives.json";
import standingCommitteeData from "../../../../../data/standingCommittee.json";
import { Card, CardContent } from "@/components/ui/card";

// Map each slug to the corresponding data
const dataMapping = {
  "elected-representatives": electedRepresentativesData,
  "council-members": councilMembersData,
  "city-staff": cityStaffData,
  "standing-committee": standingCommitteeData,
};

// A generic expandable text component
function ExpandableText({ text, lineClamp = 1, className = "" }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p
      onClick={() => setExpanded((prev) => !prev)}
      className={`${className} ${expanded ? "" : `line-clamp-${lineClamp}`} cursor-pointer hover:opacity-80 transition-opacity`}
    >
      {text}
    </p>
  );
}

export default function DynamicDataPage({ params }) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const data = dataMapping[slug] || [];

  React.useEffect(() => setMounted(true), []);

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
  const groupedData = data.reduce((groups, item) => {
    const groupKey = item.section || item.designation || "Other";
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(item);
    return groups;
  }, {});

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-12 mb-8`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Link 
              href="/govt-services"
              className={`inline-flex items-center gap-2 mb-6 text-sm font-medium ${
                currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
              } hover:opacity-80 transition-opacity`}
            >
              <FaArrowLeft />
              Back to Government Services
            </Link>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent capitalize">
              {slug.replace(/-/g, " ")}
            </h1>
            <p className={`text-lg mb-8 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Meet the dedicated individuals serving our community
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-16">
        <div className="space-y-16">
          {Object.entries(groupedData).map(([group, items]) => (
            <section key={group} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-3xl -z-10"></div>
              <h2 className={`text-2xl font-semibold mb-8 text-center ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {group}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <Card 
                    key={index} 
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      currentTheme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src={item.image_src}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        quality={100}
                        sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                        priority={index < 4}
                      />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <ExpandableText 
                        text={item.name} 
                        lineClamp={1} 
                        className={`text-lg font-semibold ${
                          currentTheme === "dark" ? "text-white" : "text-gray-900"
                        }`} 
                      />
                      {item.designation && (
                        <ExpandableText 
                          text={item.designation} 
                          lineClamp={1} 
                          className={`text-sm ${
                            currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                          }`} 
                        />
                      )}
                      {item.ward_no && (
                        <p className={`text-sm ${
                          currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}>
                          Ward {item.ward_no}
                        </p>
                      )}
                      {item.address && (
                        <ExpandableText 
                          text={`Area: ${item.address}`} 
                          lineClamp={1} 
                          className={`text-sm ${
                            currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`} 
                        />
                      )}
                      {item.contact_number && (
                        <p className={`text-sm ${
                          currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}>
                          Contact: {item.contact_number}
                        </p>
                      )}
                      {item.description && (
                        <ExpandableText 
                          text={item.description} 
                          lineClamp={2} 
                          className={`text-sm ${
                            currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`} 
                        />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className={`mt-16 p-6 rounded-xl text-center ${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        } shadow-lg`}>
          <h2 className={`font-semibold mb-2 ${
            currentTheme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Source: Dandeli City Municipal Council, GoK.
          </h2>
          <p className={`text-sm ${
            currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Last Updated On Sat 30 Nov 2024 -17:00
          </p>
        </footer>
      </div>
    </div>
  );
}
