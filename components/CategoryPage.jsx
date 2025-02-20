"use client"
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaUtensils,
  FaBed,
  FaBus,
  FaTools,
  FaShoppingBag,
  FaBriefcase,
  FaNewspaper,
  FaLandmark,
  FaGraduationCap,
  FaCommentDots,
  FaHandsHelping,
  FaHome,
  FaCalendarAlt,
  FaEllipsisH,
} from "react-icons/fa";


const categories = [
  { name: "Restaurants", icon: <FaUtensils />, slug: "restaurants" },
  { name: "Accommodation", icon: <FaBed />, slug: "accommodation" },
  { name: "Transports", icon: <FaBus />, slug: "transports" },
  { name: "Services", icon: <FaTools />, slug: "services" },
  { name: "Shopping", icon: <FaShoppingBag />, slug: "shopping" },
  { name: "Jobs", icon: <FaBriefcase />, slug: "jobs" },
  { name: "News", icon: <FaNewspaper />, slug: "news" },
  { name: "Gov Services", icon: <FaLandmark />, slug: "gov-services" },
  { name: "Education", icon: <FaGraduationCap />, slug: "education" },
  { name: "Complaints", icon: <FaCommentDots />, slug: "complaints" },
  { name: "Community Work", icon: <FaHandsHelping />, slug: "community-work" },
  { name: "Real Estate", icon: <FaHome />, slug: "real-estate" },
  { name: "Events", icon: <FaCalendarAlt />, slug: "events" },
  { name: "Others", icon: <FaEllipsisH />, slug: "others" },
];

export default function CategoryPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">City Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link
            href={`/${category.slug}`}
            key={category.slug}
            className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <div
              className={`text-4xl mb-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {category.icon}
            </div>
            <h2
              className={`text-lg font-semibold text-center ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}