"use client";
import React, { useState } from "react";
import Image from "next/image";
import educationData from "../../../../data/schoolData.json";

const EducationCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col border p-4 rounded-lg shadow-md hover:shadow-lg transition min-h-[250px] cursor-pointer">
      {/* Image container */}
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <Image
          src="https://imgs.search.brave.com/semj0l48CuSRAuCy-5pyHuarj0VffguQwFblXUQJ5nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2Nob29sLXBp/Y3R1cmUtYmFja2dy/b3VuZC1rYngzd2tx/dWYwbGJsc3g3Lmpw/Zw"
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      {/* Text content */}
      <div className="flex-1 flex flex-col justify-center mt-3">
        <h3
          onClick={() => setExpanded(!expanded)}
          className={`text-lg font-medium mb-1 ${
            expanded ? "" : "line-clamp-2"
          }`}
        >
          {item.name}
        </h3>
        <p
          className={`text-sm text-gray-600 ${expanded ? "" : "line-clamp-2"}`}
        >
          {item.location}
        </p>
        <a
          href={item.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          View on Google Maps
        </a>
        {/* Optionally, you could add a "Read more" button instead of toggling on the whole card */}
      </div>
    </div>
  );
};

export default function EducationPage() {
  return (
    <div className="max-w-screen-lg mx-auto p-5 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">
        Education Institutions in Dandeli
      </h1>

      {["schools", "preUniversity", "degreeColleges", "otherInstitutions"].map(
        (section) => (
          <section key={section} className="mb-8">
            <h2 className="text-2xl font-semibold text-center mb-6 capitalize">
              {section.replace(/([A-Z])/g, " $1")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {educationData[section].map((item, index) => (
                <EducationCard key={index} item={item} />
              ))}
            </div>
          </section>
        )
      )}
    </div>
  );
}
