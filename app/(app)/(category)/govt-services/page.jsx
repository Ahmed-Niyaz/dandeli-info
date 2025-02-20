"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHandsHelping,
  FaLandmark,
  FaBriefcase,
  FaTools,
} from "react-icons/fa";

const categories = [
  {
    name: "Elected Representatives",
    icon: <FaBriefcase />,
    slug: "elected-representatives",
  },
  { name: "Council Members", icon: <FaLandmark />, slug: "council-members" },
  { name: "City Staff", icon: <FaHandsHelping />, slug: "city-staff" },

  {
    name: "Standing Committee",
    icon: <FaTools />,
    slug: "standing-committee",
  },
];

export default function MunicipalCategoryPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto p-4">
      <header className="my-10">
        <h1 className="text-4xl font-bold text-center">
          Dandeli City Municipal Council
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Overview of our city’s leadership and committees
        </p>
      </header>
      <div className="max-w-5xl mx-auto grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {categories.map((category) => (
          <Link
            href={`/govt-services/${category.slug}`}
            key={category.slug}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-all duration-200 aspect-square ${
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
