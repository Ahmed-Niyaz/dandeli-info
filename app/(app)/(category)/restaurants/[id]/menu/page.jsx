"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaUtensils, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

// Dummy restaurant data
const restaurant = {
  id: 1,
  name: "Spice Paradise",
  type: "Restaurant",
  cuisine: "Indian",
  rating: 4.5,
  reviews: 128,
  priceRange: "₹₹",
  address: "Main Road, Dandeli",
  phone: "+91 98765 43210",
  timing: "11:00 AM - 10:00 PM",
  features: ["Parking", "WiFi", "Card Payment", "AC"],
  description: "Authentic Indian cuisine with a modern twist. Famous for their biryani and tandoori dishes.",
  specialties: ["Biryani", "Tandoori", "Curries"],
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  menu: [
    { name: "Chicken Biryani", price: "₹250", description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices" },
    { name: "Butter Chicken", price: "₹200", description: "Tender chicken pieces in a rich, creamy tomato sauce" },
    { name: "Paneer Tikka", price: "₹180", description: "Marinated and grilled cottage cheese with spices" },
    { name: "Dal Makhani", price: "₹150", description: "Creamy black lentils slow-cooked overnight" },
    { name: "Naan", price: "₹40", description: "Freshly baked Indian bread" },
    { name: "Raita", price: "₹30", description: "Cooling yogurt dip with cucumber and mint" },
    { name: "Tandoori Roti", price: "₹30", description: "Freshly baked tandoori bread" },
    { name: "Mixed Veg Curry", price: "₹160", description: "Assorted vegetables in rich gravy" },
    { name: "Chicken Tikka", price: "₹220", description: "Marinated and grilled chicken pieces" },
    { name: "Mutton Curry", price: "₹280", description: "Tender mutton pieces in spicy gravy" },
    { name: "Veg Biryani", price: "₹200", description: "Fragrant rice with mixed vegetables" },
    { name: "Gulab Jamun", price: "₹60", description: "Sweet milk dumplings in sugar syrup" },
  ],
};

export default function MenuPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-12 mb-8`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/restaurants">
              <button className={`p-2 rounded-full ${
                currentTheme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}>
                <FaArrowLeft className={`${currentTheme === "dark" ? "text-white" : "text-gray-700"}`} />
              </button>
            </Link>
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                {restaurant.name}
              </h1>
              <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                {restaurant.cuisine} • {restaurant.type}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className={`text-xl font-semibold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                About
              </h2>
              <p className={`mb-4 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                {restaurant.description}
              </p>
              <div className="space-y-2">
                <p className={`flex items-center gap-2 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="font-medium">Address:</span> {restaurant.address}
                </p>
                <p className={`flex items-center gap-2 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="font-medium">Phone:</span> {restaurant.phone}
                </p>
                <p className={`flex items-center gap-2 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="font-medium">Timing:</span> {restaurant.timing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
            Menu
          </h2>
          <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Explore our delicious offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurant.menu.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                currentTheme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-lg font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {item.name}
                </h3>
                <span className={`font-medium ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                  {item.price}
                </span>
              </div>
              <p className={`text-sm ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 