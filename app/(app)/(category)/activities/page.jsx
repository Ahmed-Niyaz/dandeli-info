"use client";
import React, { useState, useEffect } from "react";
import { 
  FaMapMarkerAlt, 
  FaWater, 
  FaInfoCircle, 
  FaSearch,
  FaFilter,
  FaStarHalfAlt,
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaMountain,
  FaCompass,
  FaShip,
  FaSwimmer,
  FaTree,
  FaFire,
  FaBinoculars,
  FaHiking,
  FaFish,
  FaCampground,
  FaBicycle,
  FaCamera
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Activities and adventures data
const activities = [
  {
    id: 1,
    name: "White Water Rafting",
    type: "Water Adventure",
    description: "Experience the thrill of navigating the Kali River through exciting rapids. Dandeli offers three types of rafting experiences - long (9km), mid (5km), and short (1km) routes. All safety equipment and professional guides are provided. Perfect for both beginners and experienced rafters.",
    location: "Kali River, Dandeli",
    bestTimeToVisit: "October to May",
    price: "₹600 - ₹1650 per person (depending on route)",
    duration: "45 minutes to 3 hours",
    timings: "6:30 AM, 10:30 AM, and 1:30 PM (Long rafting), 9 AM to 5 PM (Mid and Short)",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 426,
    images: [
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1504116795998-97378ead820e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Jungle Safari",
    type: "Wildlife Adventure",
    description: "Explore the rich biodiversity of Kali Tiger Reserve (formerly Dandeli Wildlife Sanctuary) through an exciting safari. Spot tigers, leopards, black panthers, elephants, gaur, deer, and hundreds of bird species in their natural habitat. Open jeep safaris are conducted during early mornings and evenings for the best wildlife viewing opportunities.",
    location: "Anshi Tiger Reserve, 14km from Dandeli",
    bestTimeToVisit: "October to May",
    price: "₹600 for adults, ₹300 for children (6-11 years), ₹2000 for foreign nationals",
    duration: "2 hours",
    timings: "6 AM – 8 AM, 8 AM – 10 AM, 4 PM – 6 PM",
    difficulty: "Easy",
    rating: 4.5,
    reviews: 287,
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Kayaking",
    type: "Water Adventure",
    description: "Navigate the gentle currents of the Kali River in a solo kayak adventure. Perfect for those who want a personal water experience, kayaking allows you to explore the serene river at your own pace. Professional guides provide training and safety equipment for a secure experience.",
    location: "Kali River, State Adventure Zone",
    bestTimeToVisit: "October to May",
    price: "₹250 per person",
    duration: "30 minutes",
    timings: "9 AM to 5 PM",
    difficulty: "Moderate",
    rating: 4.3,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 4,
    name: "Coracle Ride",
    type: "Cultural Experience",
    description: "Experience a traditional bowl-shaped boat ride on the calm waters of the Kali River. These heritage vessels made of woven grasses and reeds have been used in the region since prehistoric times. Drift peacefully along the river while learning about local culture and history from your boatman.",
    location: "Kali River, Dandeli",
    bestTimeToVisit: "October to May",
    price: "₹200 per person",
    duration: "45 minutes",
    timings: "9 AM to 5 PM",
    difficulty: "Easy",
    rating: 4.2,
    reviews: 132,
    images: [
      "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 5,
    name: "Natural Jacuzzi",
    type: "Water Relaxation",
    description: "Relax in the natural jacuzzi formed by the flowing waters of the Kali River. These shallow spots in the river create natural spa-like conditions where the gentle current massages your body. A perfect way to unwind and connect with nature after a day of adventure activities.",
    location: "Kali River, Dandeli",
    bestTimeToVisit: "October to February",
    price: "₹150-250 per person",
    duration: "30-60 minutes",
    timings: "10 AM to 4 PM",
    difficulty: "Easy",
    rating: 4.6,
    reviews: 198,
    images: [
      "https://images.unsplash.com/photo-1544470557-24b431059773?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621798310915-de15ba61273f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 6,
    name: "Zipline / River Crossing",
    type: "Aerial Adventure",
    description: "Glide across the Kali River on a thrilling zipline adventure. Feel the rush of adrenaline as you zoom over the water with panoramic views of the surrounding forest. All safety equipment and guidance from trained professionals is provided. Perfect for adventure enthusiasts seeking an aerial perspective of Dandeli's beauty.",
    location: "Various locations in Dandeli",
    bestTimeToVisit: "October to May",
    price: "₹400 per person",
    duration: "10-15 minutes",
    timings: "9 AM to 5 PM",
    difficulty: "Moderate",
    rating: 4.4,
    reviews: 167,
    images: [
      "https://images.unsplash.com/photo-1622293043456-8aa4d7ec6be5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580239559297-521662710317?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 7,
    name: "Bird Watching",
    type: "Nature Experience",
    description: "Dandeli is home to more than 200 species of birds, making it a paradise for bird watchers. Spot the iconic Malabar Pied Hornbill, Black Naped Monarch, Orange Minivet, and many more rare and endemic species. Guided tours are available with experienced naturalists who help identify different bird species and their behaviors.",
    location: "Dandeli Wildlife Sanctuary and surrounding forests",
    bestTimeToVisit: "December to February",
    price: "₹300-500 per person (guided tours)",
    duration: "3-4 hours",
    timings: "6 AM to 9 AM and 4 PM to 6 PM",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 142,
    images: [
      "https://images.unsplash.com/photo-1507477338202-487281e6c23e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featured: true
  },
  {
    id: 8,
    name: "Water Zorbing",
    type: "Water Adventure",
    description: "Walk on water inside a giant transparent ball! Water zorbing allows you to roll, jump, and run across the water surface in a sealed transparent sphere. This unique activity is perfect for all ages and provides plenty of laughter and fun. A great activity for families and groups looking for something different.",
    location: "State Adventure Zone, Dandeli",
    bestTimeToVisit: "October to May",
    price: "₹300 per person",
    duration: "10 minutes",
    timings: "9 AM to 5 PM",
    difficulty: "Easy",
    rating: 4.0,
    reviews: 98,
    images: [
      "https://images.unsplash.com/photo-1534431061788-d8450f417474?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 9,
    name: "Night Campfire",
    type: "Camping Experience",
    description: "End your day of adventures with a cozy campfire under the starlit sky. Share stories, roast marshmallows, and enjoy the sounds of the forest at night. Many resorts and homestays in Dandeli arrange campfire sessions for their guests, often accompanied by music and local snacks.",
    location: "Various resorts and camping sites in Dandeli",
    bestTimeToVisit: "October to February",
    price: "Often included in stay packages",
    duration: "2 hours",
    timings: "7 PM to 10 PM",
    difficulty: "Easy",
    rating: 4.5,
    reviews: 187,
    images: [
      "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 10,
    name: "Trekking",
    type: "Outdoor Adventure",
    description: "Explore the pristine forests of the Western Ghats on foot through various trekking trails around Dandeli. From easy walks to challenging hikes, there are options for all fitness levels. Popular treks include routes to Syntheri Rock, Shiroli Peak, and through the Kali Tiger Reserve. Guided treks provide insights into the local ecology and wildlife.",
    location: "Various locations around Dandeli",
    bestTimeToVisit: "October to February",
    price: "₹300-800 per person (depending on route and duration)",
    duration: "2-6 hours",
    timings: "6 AM to 5 PM",
    difficulty: "Easy to Moderate",
    rating: 4.3,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 11,
    name: "Cycling/Mountain Biking",
    type: "Outdoor Adventure",
    description: "Explore Dandeli's scenic landscapes on two wheels. Cycling tours through forest paths, village trails, and along the river bank offer a unique way to experience the area's natural beauty. Bikes and gear are available for rent, and guided tours can be arranged for those who want to discover hidden gems with local knowledge.",
    location: "Various routes around Dandeli",
    bestTimeToVisit: "October to February",
    price: "₹300-500 per person (including bike rental)",
    duration: "2-4 hours",
    timings: "6 AM to 5 PM",
    difficulty: "Moderate",
    rating: 4.1,
    reviews: 86,
    images: [
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 12,
    name: "Fishing",
    type: "Leisure Activity",
    description: "Try your hand at fishing in the Kali River, home to various fish species including mahseer, the prized game fish of India. Enjoy the peaceful riverside atmosphere while waiting for your catch. Equipment and guidance are provided by local experts who know the best spots and techniques for successful fishing.",
    location: "Kali River, Dandeli",
    bestTimeToVisit: "October to February",
    price: "₹400-700 per person (including equipment)",
    duration: "3-4 hours",
    timings: "Early morning and late afternoon",
    difficulty: "Easy",
    rating: 4.0,
    reviews: 74,
    images: [
      "https://images.unsplash.com/photo-1500463959177-e0869687df26?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499242611767-cf8b9e9d4b25?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
];

export default function ActivitiesPage() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [activityTypeFilter, setActivityTypeFilter] = useState([]);

  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
    
    // Extract unique activity types for filter
    const types = ["All", ...new Set(activities.map(activity => activity.type))];
    setActivityTypeFilter(types);
  }, []);

  // Filtered activities based on search and type filter
  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || activity.type === selectedType;
    
    return matchesSearch && matchesType;
  });
  
  // Rating stars component
  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
        ))}
      </div>
    );
  };

  // Function to get appropriate icon based on activity type
  const getActivityIcon = (type) => {
    switch(type) {
      case "Water Adventure":
        return <FaWater className="text-blue-500" />;
      case "Wildlife Adventure":
        return <FaTree className="text-green-600" />;
      case "Cultural Experience":
        return <FaShip className="text-brown-500" />;
      case "Water Relaxation":
        return <FaSwimmer className="text-blue-400" />;
      case "Aerial Adventure":
        return <FaCompass className="text-purple-500" />;
      case "Nature Experience":
        return <FaBinoculars className="text-green-500" />;
      case "Camping Experience":
        return <FaFire className="text-orange-500" />;
      case "Outdoor Adventure":
        return <FaHiking className="text-amber-700" />;
      case "Leisure Activity":
        return <FaFish className="text-blue-600" />;
      default:
        return <FaMountain className="text-gray-600" />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-green-800 to-green-600">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Activities & Adventures in Dandeli
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover thrilling adventures and relaxing activities in the natural paradise of Dandeli. From white water rafting to peaceful nature walks, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search activities..."
                className="pl-10 p-2 border rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Type Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <FaFilter className="text-gray-500 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">Filter by:</span>
              <select 
                className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {isClient && activityTypeFilter.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities Section */}
      {isClient && filteredActivities.some(activity => activity.featured) && (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Featured Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities
                .filter(activity => activity.featured)
                .map(activity => (
                  <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 border-0">
                    <div className="relative h-64">
                      <Image 
                        src={activity.images[0]} 
                        alt={activity.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full">
                        {getActivityIcon(activity.type)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{activity.name}</h3>
                      <div className="flex items-center mb-3 gap-1 text-sm text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span>{activity.location}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {activity.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <RatingStars rating={activity.rating} />
                          <span className="text-sm text-gray-600 dark:text-gray-300">({activity.reviews} reviews)</span>
                        </div>
                        <span className="text-green-600 dark:text-green-400 font-semibold">{activity.price.split(' ')[0]}</span>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        View Details <FaArrowRight className="ml-2" />
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Activities Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            All Activities & Adventures
          </h2>
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">No activities found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map(activity => (
                <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 border-0">
                  <div className="relative h-64">
                    <Image 
                      src={activity.images[0]} 
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full">
                      {getActivityIcon(activity.type)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{activity.name}</h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {activity.type}
                      </span>
                    </div>
                    <div className="flex items-center mb-3 gap-1 text-sm text-gray-600 dark:text-gray-300">
                      <FaMapMarkerAlt className="text-red-500" />
                      <span>{activity.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {activity.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <FaInfoCircle className="text-blue-500" />
                        <span>Duration: {activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <FaInfoCircle className="text-blue-500" />
                        <span>Difficulty: {activity.difficulty}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <RatingStars rating={activity.rating} />
                        <span className="text-sm text-gray-600 dark:text-gray-300">({activity.reviews})</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-semibold">{activity.price.split(' ')[0]}</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      View Details <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Travel Tips for Adventure Seekers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 dark:bg-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FaWater className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Best Season</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                October to May is the best time for water adventures in Dandeli. Monsoon season (June-September) has limited activities due to high water levels.
              </p>
            </Card>
            <Card className="p-6 dark:bg-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FaTree className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Wildlife Viewing</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Early morning and evening safari tours offer the best wildlife sightings. December to February is ideal for birdwatching in Dandeli.
              </p>
            </Card>
            <Card className="p-6 dark:bg-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FaCampground className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Accommodation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Book your stay in advance, especially during weekends and holidays. Choose riverside resorts or homestays for the best experience.
              </p>
            </Card>
            <Card className="p-6 dark:bg-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FaCamera className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">What to Pack</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Bring comfortable clothes, insect repellent, sunscreen, hat, sunglasses, and waterproof bags for water activities. A good camera is essential!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Dandeli Adventure?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Book your activities in advance to secure the best experiences during your visit to Dandeli.
          </p>
          <Button className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
            Book Your Adventure Now
          </Button>
        </div>
      </section>
    </main>
  );
}
