"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  FaUtensils,
  FaStar,
  FaClock,
  FaPhone,
  FaMapMarkerAlt,
  FaIndianRupeeSign,
  FaParking,
  FaWifi,
  FaCreditCard,
  FaUtensilSpoon,
  FaCoffee,
  FaIceCream,
  FaPizzaSlice,
  FaHamburger,
  FaDrumstickBite,
  FaFish,
  FaLeaf,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";

const restaurants = [
  {
    id: 1,
    name: "Kali Woods Restaurant",
    type: "Restaurant",
    cuisine: "Indian",
    rating: 4.6,
    reviews: 142,
    priceRange: "₹₹",
    address: "Ambika Nagar, Dandeli",
    phone: "+91 94489 99788",
    timing: "7:00 AM - 10:30 PM",
    features: ["Parking", "WiFi", "Card Payment", "AC"],
    description: "Popular restaurant known for its riverside location and delicious local cuisine. Famous for fish curry and malvani dishes.",
    specialties: ["Fish Curry", "Chicken Sukka", "Malvani Thali"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "Fish Curry", price: "₹280" },
      { name: "Chicken Sukka", price: "₹240" },
      { name: "Malvani Thali", price: "₹350" },
    ],
  },
  {
    id: 2,
    name: "River Tern Restaurant",
    type: "Resort Restaurant",
    cuisine: "Multi-cuisine",
    rating: 4.5,
    reviews: 156,
    priceRange: "₹₹₹",
    address: "JLR Dandeli, Kali Tiger Reserve, Dandeli",
    phone: "+91 96118 32100",
    timing: "7:00 AM - 10:00 PM",
    features: ["Parking", "WiFi", "Card Payment", "AC", "Scenic View"],
    description: "Stunning restaurant located inside the Jungle Lodges Resort with panoramic views of the Kali River. Serves a mix of local and international cuisine.",
    specialties: ["Konkani Fish Curry", "Karavali Chicken", "Western Ghats Special Thali"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "Konkani Fish Curry", price: "₹320" },
      { name: "Karavali Chicken", price: "₹290" },
      { name: "Western Ghats Special Thali", price: "₹450" },
    ],
  },
  {
    id: 3,
    name: "White Water Cafe",
    type: "Café",
    cuisine: "Continental",
    rating: 4.4,
    reviews: 128,
    priceRange: "₹₹",
    address: "Near Syntheri Rocks, Dandeli",
    phone: "+91 99016 54399",
    timing: "8:00 AM - 9:30 PM",
    features: ["WiFi", "Card Payment", "AC", "Outdoor Seating"],
    description: "Popular cafe serving great coffee and continental dishes. Perfect spot for adventure tourists after rafting trips.",
    specialties: ["Coffee", "Sandwiches", "Breakfast Platters"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "Cappuccino", price: "₹140" },
      { name: "Club Sandwich", price: "₹190" },
      { name: "English Breakfast", price: "₹250" },
    ],
  },
  {
    id: 4,
    name: "Hornbill Restaurant",
    type: "Restaurant",
    cuisine: "North Indian",
    rating: 4.3,
    reviews: 94,
    priceRange: "₹₹",
    address: "Kogilban Main Road, Dandeli",
    phone: "+91 94485 67238",
    timing: "11:00 AM - 10:30 PM",
    features: ["Parking", "Card Payment", "AC"],
    description: "Rustic restaurant with forest-themed decor serving authentic North Indian cuisine with local flavors.",
    specialties: ["Butter Chicken", "Tandoori Roti", "Paneer Dishes"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "Butter Chicken", price: "₹280" },
      { name: "Tandoori Roti", price: "₹30" },
      { name: "Paneer Butter Masala", price: "₹220" },
    ],
  },
  {
    id: 5,
    name: "Bison River Resort Restaurant",
    type: "Resort Restaurant",
    cuisine: "Multi-cuisine",
    rating: 4.7,
    reviews: 165,
    priceRange: "₹₹₹",
    address: "Kali River Bank, Dandeli",
    phone: "+91 98451 59901",
    timing: "7:00 AM - 10:00 PM",
    features: ["Parking", "WiFi", "Card Payment", "AC", "River View"],
    description: "Riverside dining experience with a diverse menu featuring local and international dishes. Popular for its riverfront setting and fresh ingredients.",
    specialties: ["Koli Saaru", "Grilled Fish", "Western Ghats Platter"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "Koli Saaru", price: "₹260" },
      { name: "Grilled Fish", price: "₹350" },
      { name: "Western Ghats Platter", price: "₹480" },
    ],
  },
  {
    id: 6,
    name: "Dandeli Sweet House",
    type: "Dessert",
    cuisine: "Desserts & Sweets",
    rating: 4.2,
    reviews: 83,
    priceRange: "₹",
    address: "Market Road, Dandeli",
    phone: "+91 94489 77654",
    timing: "9:00 AM - 9:30 PM",
    features: ["Card Payment", "AC"],
    description: "Popular sweet shop offering a variety of traditional Indian sweets and modern desserts. Famous for Mysore Pak and ice creams.",
    specialties: ["Mysore Pak", "Ice Creams", "Ladoos"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "Mysore Pak", price: "₹80" },
      { name: "Chocolate Ice Cream", price: "₹70" },
      { name: "Kaju Katli", price: "₹90" },
    ],
  },
  {
    id: 7,
    name: "Kali River View Restaurant",
    type: "Restaurant",
    cuisine: "Seafood",
    rating: 4.5,
    reviews: 112,
    priceRange: "₹₹",
    address: "Riverside Road, Dandeli",
    phone: "+91 94823 76509",
    timing: "11:00 AM - 10:00 PM",
    features: ["Parking", "WiFi", "Card Payment", "Outdoor Seating"],
    description: "Specializing in freshwater fish dishes with a beautiful view of the Kali River. Famous for river fish preparations.",
    specialties: ["River Fish Fry", "Fish Thali", "Crab Curry"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "River Fish Fry", price: "₹290" },
      { name: "Fish Thali", price: "₹320" },
      { name: "Crab Curry", price: "₹270" },
    ],
  },
  {
    id: 8,
    name: "Dandeli Spice Garden",
    type: "Restaurant",
    cuisine: "Vegetarian",
    rating: 4.3,
    reviews: 87,
    priceRange: "₹₹",
    address: "Gandhi Nagar, Dandeli",
    phone: "+91 94489 60123",
    timing: "10:00 AM - 9:30 PM",
    features: ["Parking", "WiFi", "Card Payment", "AC"],
    description: "Pure vegetarian restaurant serving healthy and delicious food with locally grown spices. Known for authentic Karnataka cuisine.",
    specialties: ["Bisi Bele Bath", "Udupi Dosa", "Karnataka Thali"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    menu: [
      { name: "Bisi Bele Bath", price: "₹160" },
      { name: "Udupi Dosa", price: "₹130" },
      { name: "Karnataka Thali", price: "₹220" },
    ],
  },
];

const categories = [
  { name: "All", icon: <FaUtensils /> },
  { name: "Restaurants", icon: <FaUtensilSpoon /> },
  { name: "Cafés", icon: <FaCoffee /> },
  { name: "Fast Food", icon: <FaHamburger /> },
  { name: "Desserts", icon: <FaIceCream /> },
  { name: "Vegetarian", icon: <FaLeaf /> },
  { name: "Non-Veg", icon: <FaDrumstickBite /> },
  { name: "Seafood", icon: <FaFish /> },
];

export default function RestaurantsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesCategory = selectedCategory === "All" || restaurant.type === selectedCategory;
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-12 mb-8`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaUtensils className={`text-5xl mx-auto mb-4 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Restaurants in Dandeli
            </h1>
            <p className={`text-lg mb-8 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Discover the best dining spots in Dandeli
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                currentTheme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <FaSearch className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              currentTheme === "dark" ? "text-gray-400" : "text-gray-500"
            }`} />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white"
                    : currentTheme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } transition-colors`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
                currentTheme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Restaurant Image */}
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                  {restaurant.priceRange}
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl font-semibold ${
                    currentTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {restaurant.name}
                  </h3>
                  <Link href={`/restaurants/${restaurant.id}/reviews`} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                    <FaStar className="text-yellow-400" />
                    <span className={`text-sm ${
                      currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {restaurant.rating} ({restaurant.reviews})
                    </span>
                  </Link>
                </div>

                <p className={`text-sm mb-4 ${
                  currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {restaurant.cuisine} • {restaurant.type}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span className={`text-sm ${
                      currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {restaurant.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    <span className={`text-sm ${
                      currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {restaurant.timing}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-blue-500" />
                    <span className={`text-sm ${
                      currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {restaurant.phone}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-2 py-1 rounded-full text-xs ${
                        currentTheme === "dark"
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Popular Items */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    currentTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    Popular Items
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.menu.slice(0, 3).map((item) => (
                      <span
                        key={item.name}
                        className={`text-xs ${
                          currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.name} ({item.price})
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <Link href={`/restaurants/${restaurant.id}/menu`} className="block">
                    <button className={`w-full px-4 py-2 rounded-lg ${
                      currentTheme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white transition-colors`}>
                      View Menu
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
