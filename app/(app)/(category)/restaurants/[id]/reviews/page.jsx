"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaStar, FaArrowLeft, FaUser } from "react-icons/fa";
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
  reviews: [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Amazing food and service! The biryani was absolutely delicious.",
      date: "2024-03-15",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 4,
      comment: "Good food but service was a bit slow during peak hours.",
      date: "2024-03-10",
    },
    {
      id: 3,
      user: "Mike Johnson",
      rating: 5,
      comment: "Best Indian restaurant in Dandeli! The tandoori dishes are outstanding.",
      date: "2024-03-05",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      rating: 4,
      comment: "Great ambiance and friendly staff. The butter chicken is a must-try!",
      date: "2024-02-28",
    },
    {
      id: 5,
      user: "David Brown",
      rating: 5,
      comment: "Authentic flavors and generous portions. Will definitely come back!",
      date: "2024-02-20",
    },
    {
      id: 6,
      user: "Emma Davis",
      rating: 4,
      comment: "Nice place for family dinner. The paneer tikka was delicious.",
      date: "2024-02-15",
    },
  ],
};

export default function ReviewsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth system
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });

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

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // This would typically send the review to your backend
    console.log("New review:", newReview);
    setNewReview({ rating: 5, comment: "" });
  };

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
                Reviews
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-400" />
              <span className={`ml-2 text-xl font-bold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                {restaurant.rating}
              </span>
            </div>
            <span className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              ({restaurant.reviews.length} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 pb-16">
        {/* Add Review Form */}
        {isLoggedIn && (
          <div className={`mb-8 p-6 rounded-lg ${
            currentTheme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-md`}>
            <h2 className={`text-xl font-semibold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
              Add Your Review
            </h2>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <label className={`block mb-2 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className={`text-2xl ${
                        star <= newReview.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <FaStar />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className={`block mb-2 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Comment
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className={`w-full p-2 rounded-lg ${
                    currentTheme === "dark"
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-900 border-gray-300"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  rows="4"
                  placeholder="Share your experience..."
                />
              </div>
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg ${
                  currentTheme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white transition-colors`}
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {restaurant.reviews.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-lg ${
                currentTheme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-md`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-2 rounded-full ${
                  currentTheme === "dark" ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FaUser className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {review.user}
                  </h3>
                  <p className={`text-sm ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 