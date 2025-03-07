"use client";
import React, { useState, useEffect } from "react";
import { 
  FaMapMarkerAlt, 
  FaTree, 
  FaInfoCircle, 
  FaSearch,
  FaFilter,
  FaStarHalfAlt,
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaBed,
  FaMountain,
  FaCompass
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Tourist places data
const touristPlaces = [
  {
    id: 1,
    name: "Kali Tiger Reserve",
    type: "Wildlife Sanctuary",
    description: "Formerly known as Dandeli Wildlife Sanctuary, Kali Tiger Reserve is a paradise for wildlife lovers. It covers an area of 834.16 sq km and is recognized as the second largest wildlife sanctuary in Karnataka. Home to diverse flora and fauna including tigers, leopards, elephants, black panthers, and numerous bird species.",
    location: "Dandeli, Karnataka",
    bestTimeToVisit: "October to May",
    entryFee: "₹150 for Indians, ₹1000 for foreigners",
    timings: "6 AM to 6 PM",
    activities: ["Wildlife Safari", "Bird Watching", "Nature Trails", "Jungle Stay"],
    rating: 4.1,
    reviews: 326,
    images: [
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Syntheri Rock",
    type: "Natural Formation",
    description: "A gigantic monolithic rock formation in the Dandeli Wildlife Sanctuary. This 300-ft tall granite structure was formed due to volcanic activities and erosion by the Kaneri river. Visitors have to climb about 400 steps to reach the top, which offers a panoramic view of the Dandeli Valley.",
    location: "22 km from Dandeli",
    bestTimeToVisit: "October to May",
    entryFee: "₹50 per person",
    timings: "9 AM to 5 PM",
    activities: ["Photography", "Nature Walk", "Sightseeing"],
    rating: 4.3,
    reviews: 187,
    images: [
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Kavala Caves",
    type: "Cave",
    description: "These limestone caves were formed by volcanic activities millions of years ago. The caves feature winding tunnels and unique rock formations. Visitors need to climb down 375 steps to explore these fascinating underground chambers.",
    location: "20 km from Dandeli",
    bestTimeToVisit: "October to February",
    entryFee: "₹30 per person",
    timings: "9 AM to 4 PM",
    activities: ["Cave Exploration", "Photography", "Trekking"],
    rating: 3.9,
    reviews: 143,
    images: [
      "https://images.unsplash.com/photo-1504444113154-f02b4a3edb56?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512687843301-954eb71c5a6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 4,
    name: "Sathodi Falls",
    type: "Waterfall",
    description: "Locally known as 'mini-Niagara', Sathodi Falls is a spectacular 15-meter tall rectangular waterfall formed by the confluence of several unnamed streams. The waterfall is surrounded by lush green forests and offers a serene natural setting perfect for picnics and photography.",
    location: "35 km from Dandeli",
    bestTimeToVisit: "July to December",
    entryFee: "₹20 per person",
    timings: "8 AM to 5:30 PM",
    activities: ["Swimming", "Photography", "Picnic", "Nature Walk"],
    rating: 4.2,
    reviews: 215,
    images: [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 5,
    name: "Sykes Point",
    type: "Viewpoint",
    description: "Named after a British Engineer, this viewpoint offers a breathtaking panoramic view of the Dandeli Valley covered with dense forests. Visitors can observe the confluence of River Kali and River Nagzari, and it's also an excellent spot for sunset viewing and photography.",
    location: "20 km from Dandeli",
    bestTimeToVisit: "October to March",
    entryFee: "Free",
    timings: "Open 24 hours",
    activities: ["Sunset Viewing", "Photography", "Bird Watching"],
    rating: 4.5,
    reviews: 189,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 6,
    name: "Magod Falls",
    type: "Waterfall",
    description: "Located near Yellapur, Magod Falls is a spectacular waterfall where the River Bedti cascades down from rocky cliffs in two distinct drops, falling from a height of about 200 meters. The waterfall is surrounded by dense forests and is a popular spot for nature lovers and photographers.",
    location: "35 km from Dandeli",
    bestTimeToVisit: "August to January",
    entryFee: "₹25 per person",
    timings: "9 AM to 5 PM",
    activities: ["Photography", "Picnics", "Nature Walk"],
    rating: 4.0,
    reviews: 167,
    images: [
      "https://images.unsplash.com/photo-1565128939078-f83f55680d9c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508459855340-fb63ac591728?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 7,
    name: "Shiroli Peak",
    type: "Hills & Valleys",
    description: "The highest point in the Uttara Kannada region, Shiroli Peak offers a splendid view of the Sahyadri Range. Located within the Dandeli Wildlife Sanctuary, it's an excellent spot for trekkers and nature lovers who want to enjoy panoramic views of the Western Ghats.",
    location: "52 km from Dandeli",
    bestTimeToVisit: "October to March",
    entryFee: "Free",
    timings: "Open 24 hours",
    activities: ["Trekking", "Photography", "Bird Watching"],
    rating: 4.3,
    reviews: 113,
    images: [
      "https://images.unsplash.com/photo-1539183204366-63a0589187ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 8,
    name: "Supa Dam",
    type: "Dam",
    description: "Built over the Kali River, Supa Dam is an engineering marvel and one of the major attractions in Dandeli. The earthen dam stands 101 meters tall with a length of 330 meters and offers stunning views of the surrounding landscape. It has a power plant that generates about 100 MW of electricity.",
    location: "9 km from Dandeli",
    bestTimeToVisit: "September to March",
    entryFee: "Free",
    timings: "8 AM to 6 PM",
    activities: ["Boating", "Photography", "Picnics"],
    rating: 4.0,
    reviews: 145,
    images: [
      "https://images.unsplash.com/photo-1581153697433-d2183c336cf9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1509899473455-147afe6942ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 9,
    name: "Mini Tibet (Doeguling Tibetan Settlement)",
    type: "Cultural Site",
    description: "Also known as the Doeguling Tibetan Settlement, Mini Tibet is famous for its well-preserved vibrant Tibetan culture. It's one of the few places comparable to the Mcleodganj Hill Station and features traditional Tibetan monuments, monasteries, and cultural centers.",
    location: "30 km from Dandeli",
    bestTimeToVisit: "October to March",
    entryFee: "Free",
    timings: "Open 24 hours (monasteries have specific timings)",
    activities: ["Cultural Tours", "Monastery Visits", "Shopping for Tibetan Crafts"],
    rating: 4.1,
    reviews: 98,
    images: [
      "https://images.unsplash.com/photo-1526675849333-ced0865f1b49?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1473221404521-3ab8c9118c74?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 10,
    name: "Dandelappa Temple",
    type: "Temple",
    description: "Dedicated to Lord Dandelappa, who served the Maharishi landlords till the end of his life, this temple is one of the oldest in the city. The city of Dandeli is said to have derived its name from this deity. Surrounded by beautiful natural landscapes, the temple offers a divine vibe and a glimpse into the history and culture of Dandeli.",
    location: "2 km from Dandeli",
    bestTimeToVisit: "Throughout the year",
    entryFee: "Free",
    timings: "6 AM to 8 PM",
    activities: ["Worship", "Photography", "Cultural Experience"],
    rating: 4.2,
    reviews: 134,
    images: [
      "https://images.unsplash.com/photo-1477330310695-981e42b5f7be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560091087-d0c8efeeb235?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
];

export default function TouristPlacesPage() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [placeTypeFilter, setPlaceTypeFilter] = useState([]);

  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
    
    // Extract unique place types for filter
    const types = ["All", ...new Set(touristPlaces.map(place => place.type))];
    setPlaceTypeFilter(types);
  }, []);

  // Filtered places based on search and type filter
  const filteredPlaces = touristPlaces.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          place.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || place.type === selectedType;
    
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

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-teal-900 to-teal-700">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tourist Places in Dandeli
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover Dandeli's stunning natural attractions, from wildlife sanctuaries and waterfalls to viewpoints and cultural sites
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search tourist places..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Type Filter */}
            <div className="w-full md:w-auto flex items-center gap-3">
              <FaFilter className="text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300 hidden md:inline">Filter by:</span>
              <select 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {isClient && placeTypeFilter.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Places Section */}
      {filteredPlaces.some(place => place.featured) && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Attractions</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPlaces
                .filter(place => place.featured)
                .map(place => (
                  <div key={place.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 w-full">
                      <Image
                        src={place.images[0]}
                        alt={place.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
                        {place.type}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{place.name}</h3>
                        <div className="flex items-center gap-1">
                          <RatingStars rating={place.rating} />
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">({place.reviews})</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{place.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {place.activities.slice(0, 3).map((activity, idx) => (
                          <span key={idx} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                            {activity}
                          </span>
                        ))}
                        {place.activities.length > 3 && (
                          <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                            +{place.activities.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 mb-5">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-teal-500" />
                          <span>{place.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaInfoCircle className="text-teal-500" />
                          <span>Best time to visit: {place.bestTimeToVisit}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                        View Details <FaArrowRight />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tourist Places Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Tourist Places</h2>
          
          {filteredPlaces.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">No tourist places found matching your search criteria.</p>
              <Button 
                className="mt-4 bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlaces
                .filter(place => !place.featured || (place.featured && filteredPlaces.length <= 2))
                .map(place => (
                  <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={place.images[0]}
                        alt={place.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                        {place.type}
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{place.name}</h3>
                        <div className="flex items-center">
                          <span className="text-yellow-500 font-medium mr-1">{place.rating}</span>
                          <RatingStars rating={place.rating} />
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{place.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3 mt-auto">
                        {place.activities.slice(0, 2).map((activity, idx) => (
                          <span key={idx} className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs text-gray-700 dark:text-gray-300">
                            {activity}
                          </span>
                        ))}
                        {place.activities.length > 2 && (
                          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs text-gray-700 dark:text-gray-300">
                            +{place.activities.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-teal-500" />
                          <span>{place.location}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900 dark:text-teal-400 dark:border-teal-400 w-full mt-auto">
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Related Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Explore Related Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="/activities" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="bg-orange-500 h-3 w-full"></div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">
                      <FaMountain />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Activities
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Explore the exciting outdoor activities Dandeli has to offer
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/resorts" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="bg-amber-500 h-3 w-full"></div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">
                      <FaBed />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Resorts
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Find the best places to stay in Dandeli
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/about-dandeli" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="bg-teal-500 h-3 w-full"></div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">
                      <FaCompass />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    About Dandeli
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learn about Dandeli's history and culture
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/nature" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="bg-green-700 h-3 w-full"></div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">
                      <FaTree />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Nature & Wildlife
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Explore Dandeli's natural beauty
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Categories */}
      <section className="pb-20">
        <div className="container mx-auto px-6 text-center">
          <Link href="/categories">
            <Button className="px-8 py-4 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors">
              Back to Categories
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
} 