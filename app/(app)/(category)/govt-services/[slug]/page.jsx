"use client";

import React, { useState } from "react";
import Image from "next/image";
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

// A generic expandable text component (no extra button)
function ExpandableText({ text, lineClamp = 1, className = "" }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p
      onClick={() => setExpanded((prev) => !prev)}
      className={`${className} ${expanded ? "" : `line-clamp-${lineClamp}`} cursor-pointer`}
    >
      {text}
    </p>
  );
}

export default function DynamicDataPage({ params }) {
  // Unwrap the promise using React.use() before accessing properties
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const data = dataMapping[slug] || [];

  const groupedData = data.reduce((groups, item) => {
    const groupKey = item.section || item.designation || "Other";
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(item);
    return groups;
  }, {});

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <header className="mb-14 mt-4">
        <h1 className="text-5xl font-light tracking-tight capitalize text-center underline">
          {slug.replace(/-/g, " ")}
        </h1>
      </header>

      <div className="space-y-12">
        {Object.entries(groupedData).map(([group, items]) => (
          <section key={group}>
            <h2 className="text-3xl font-medium mb-12 px-2 text-center">{group}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <div className="relative w-full aspect-[7/7] overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image_src}
                      alt={item.name}
                      fill
                      className="object-cover rounded-t-lg"
                      quality={100}
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                      priority={index < 4}
                    />
                  </div>
                  <CardContent className="p-3 space-y-1">
                    {/* Expandable text for all fields */}
                    <ExpandableText text={item.name} lineClamp={1} className="text-xl font-extrabold" />
                    {item.designation && (
                      <ExpandableText text={item.designation} lineClamp={1} className="text-lg" />
                    )}
                    {item.ward_no && <p className="text-lg">Ward {item.ward_no}</p>}
                    {item.address && (
                      <ExpandableText text={`Area: ${item.address}`} lineClamp={1} className="text-lg" />
                    )}
                    {item.contact_number && <p className="text-lg">Contact: {item.contact_number}</p>}
                    {item.description && (
                      <ExpandableText text={item.description} lineClamp={2} className="text-lg" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
      <footer className="mt-10 p-4 text-center text-sm text-gray-500">
        <h1 className="font-bold">Source: Dandeli City Municipal Council, GoK.</h1>
        <span>Last Updated On Sat 30 Nov 2024 -17:00</span>
      </footer>
    </div>
  );
}
