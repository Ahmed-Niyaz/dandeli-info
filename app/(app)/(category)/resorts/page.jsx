"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  FaHotel, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaRupeeSign, 
  FaStar, 
  FaSwimmingPool,
  FaUtensils,
  FaWifi,
  FaCar,
  FaTree,
  FaFilter,
  FaSearch,
  FaInfoCircle
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Update the data structure to separate resorts and lodges
const accommodations = {
  resorts: [
    {
      id: 1,
      name: "Jungle Nest Resort",
      type: "Luxury Resort",
      description: "Nestled in the heart of Dandeli Wildlife Sanctuary, Jungle Nest Resort offers a perfect blend of luxury and wilderness. The resort features spacious cottages with modern amenities, surrounded by lush greenery and the sounds of nature.",
      address: "Dandeli Wildlife Sanctuary, Dandeli, Karnataka 581325",
      phone: "9876543201",
      website: "https://www.junglenestresort.com",
      priceRange: "₹5,000 - ₹12,000 per night",
      rating: 4.8,
      reviews: 245,
      amenities: ["Swimming Pool", "Restaurant", "Wi-Fi", "Parking", "Room Service", "Adventure Activities", "Spa"],
      activities: ["Wildlife Safari", "River Rafting", "Kayaking", "Nature Walks", "Bird Watching", "Campfire"],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
      ],
      featured: true
    },
    {
      id: 2,
      name: "Hornbill River Resort",
      type: "Eco Resort",
      description: "An eco-friendly resort committed to sustainable tourism, Hornbill River Resort offers comfortable cottages with minimal environmental impact. The resort is known for its bird watching opportunities and peaceful ambiance.",
      address: "Kali River Road, Dandeli, Karnataka 581325",
      phone: "9876543204",
      website: "https://www.hornbillresort.com",
      priceRange: "₹4,000 - ₹8,000 per night",
      rating: 4.7,
      reviews: 210,
      amenities: ["Eco-friendly Cottages", "Organic Restaurant", "Bird Watching Deck", "Library", "Yoga Space"],
      activities: ["Bird Watching", "Nature Photography", "Organic Farm Visit", "Yoga Sessions", "River Rafting"],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      featured: true
    },
    {
      id: 3,
      name: "White Water Retreat",
      type: "Adventure Resort",
      description: "Specializing in water sports and adventure activities, White Water Retreat offers comfortable accommodation with a focus on adrenaline-pumping experiences. The resort is located close to the best rafting spots on the Kali River.",
      address: "Kali Rapids, Dandeli, Karnataka 581325",
      phone: "9876543205",
      website: "https://www.whitewaterretreat.com",
      priceRange: "₹3,000 - ₹6,000 per night",
      rating: 4.5,
      reviews: 178,
      amenities: ["Adventure Center", "Restaurant", "Bar", "Equipment Rental", "Drying Room", "Parking"],
      activities: ["White Water Rafting", "Kayaking", "Canyoning", "River Crossing", "Jet Skiing"],
      images: [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1649&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    }
  ],
  lodges: [
    {
      id: 1,
      name: "Kali River Lodge",
      type: "Riverside Lodge",
      description: "Located on the banks of the Kali River, this lodge offers a serene escape with stunning river views. The rustic cottages are designed to blend with the natural surroundings while providing all essential comforts.",
      address: "Kali River Bank, Dandeli, Karnataka 581325",
      phone: "9876543202",
      website: "https://www.kaliriverlodge.com",
      priceRange: "₹3,500 - ₹7,000 per night",
      rating: 4.6,
      reviews: 189,
      amenities: ["River View", "Restaurant", "Wi-Fi", "Parking", "Outdoor Seating", "Adventure Desk"],
      activities: ["River Rafting", "Coracle Ride", "Fishing", "Campfire", "Nature Walks"],
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      featured: true
    },
    {
      id: 2,
      name: "Forest Canopy Lodge",
      type: "Forest Lodge",
      description: "A cozy lodge offering an authentic forest experience with comfortable rooms and personalized service. The property features traditional architecture with modern comforts.",
      address: "Village Road, Dandeli, Karnataka 581325",
      phone: "9876543206",
      website: "https://www.forestcanopylodge.com",
      priceRange: "₹2,000 - ₹4,000 per night",
      rating: 4.9,
      reviews: 132,
      amenities: ["Home-cooked Meals", "Garden", "Bonfire Area", "Local Guide", "Wi-Fi"],
      activities: ["Cultural Experiences", "Nature Walks", "Bird Watching", "Local Crafts"],
      images: [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      featured: true
    }
  ]
};

// Update accommodation types
const accommodationTypes = {
  resorts: ["All Resorts", "Luxury Resort", "Eco Resort", "Adventure Resort"],
  lodges: ["All Lodges", "Riverside Lodge", "Forest Lodge"]
};

export default function ResortsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("resorts");
  const [selectedType, setSelectedType] = useState(activeTab === "resorts" ? "All Resorts" : "All Lodges");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAccommodations, setFilteredAccommodations] = useState(accommodations[activeTab]);

  useEffect(() => setMounted(true), []);

  // Reset type when switching tabs
  useEffect(() => {
    setSelectedType(activeTab === "resorts" ? "All Resorts" : "All Lodges");
    setSearchQuery("");
  }, [activeTab]);

  // Filter accommodations based on type and search query
  useEffect(() => {
    let filtered = accommodations[activeTab];
    
    // Filter by type
    if (!selectedType.startsWith("All")) {
      filtered = filtered.filter(item => item.type === selectedType);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.amenities.some(amenity => amenity.toLowerCase().includes(query)) ||
        item.activities.some(activity => activity.toLowerCase().includes(query))
      );
    }
    
    setFilteredAccommodations(filtered);
  }, [activeTab, selectedType, searchQuery]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto p-4">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-card py-12 mb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaHotel className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Resorts & Lodges in Dandeli
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Discover the perfect accommodation for your stay in Dandeli
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center space-x-4">
          <Button
            variant={activeTab === "resorts" ? "default" : "outline"}
            onClick={() => setActiveTab("resorts")}
            className="min-w-[120px]"
          >
            Resorts
          </Button>
          <Button
            variant={activeTab === "lodges" ? "default" : "outline"}
            onClick={() => setActiveTab("lodges")}
            className="min-w-[120px]"
          >
            Lodges
          </Button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-grow">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={`Search ${activeTab}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Filter */}
              <div className="w-full md:w-64">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFilter className="text-muted-foreground" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {accommodationTypes[activeTab].map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Featured Section */}
      {selectedType.startsWith("All") && searchQuery === "" && (
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Featured {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accommodations[activeTab]
              .filter(item => item.featured)
              .map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-lg flex flex-col h-full">
                  <div className="relative h-48">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
                      {item.type}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <FaMapMarkerAlt className="mr-1" />
                      <span className="truncate">{item.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-primary mb-4">
                      <FaRupeeSign className="mr-1" />
                      <span>{item.priceRange}</span>
                    </div>
                    <Button asChild variant="default" className="w-full">
                      <Link href={`#${activeTab}-${item.id}`} className="flex items-center justify-center gap-2">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      )}

      {/* All Listings */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          {filteredAccommodations.length > 0 
            ? `${selectedType} (${filteredAccommodations.length})`
            : `No ${activeTab} found`
          }
        </h2>
        <div className="space-y-8">
          {filteredAccommodations.map((item) => (
            <Card key={item.id} id={`${activeTab}-${item.id}`} className="overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Resort Image */}
                  <div className="relative w-full md:w-1/3 h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
                      {item.type}
                    </div>
                  </div>
                  
                  {/* Resort Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{item.name}</h3>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="font-medium">{item.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">({item.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center text-muted-foreground mb-2">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{item.address}</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <FaRupeeSign className="mr-2 text-primary" />
                      <span>{item.priceRange}</span>
                    </div>
                    
                    {/* Amenities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.amenities.map((amenity, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground"
                          >
                            {amenity === "Swimming Pool" && <FaSwimmingPool className="mr-1" />}
                            {amenity === "Restaurant" && <FaUtensils className="mr-1" />}
                            {amenity === "Wi-Fi" && <FaWifi className="mr-1" />}
                            {amenity === "Parking" && <FaCar className="mr-1" />}
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Activities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Activities</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.activities.map((activity, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                          >
                            {activity === "Wildlife Safari" && <FaTree className="mr-1" />}
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button 
                        variant="default" 
                        asChild 
                        className="gap-2"
                      >
                        <a href={`tel:${item.phone}`}>
                          <FaPhone className="text-sm" />
                          Call for Booking
                        </a>
                      </Button>
                      
                      {item.website && (
                        <Button 
                          variant="outline" 
                          asChild 
                          className="gap-2"
                        >
                          <a href={item.website} target="_blank" rel="noopener noreferrer">
                            <FaInfoCircle className="text-sm" />
                            Visit Website
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Tips */}
      <div className="container mx-auto px-4 pb-16">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-2xl text-primary" />
              <h2 className="text-xl font-bold text-foreground">Booking Tips</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Best time to visit:</span> October to May is the ideal time to visit Dandeli, with pleasant weather and optimal conditions for outdoor activities.
              </p>
              
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Advance booking:</span> It is recommended to book accommodations 2-4 weeks in advance, especially during weekends and holiday seasons.
              </p>
              
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Activity packages:</span> Many resorts offer activity packages that include rafting, wildlife safaris, and other adventures. Inquire about these when booking for better rates.
              </p>
              
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Transportation:</span> Most resorts can arrange pickup from Dandeli town or nearby railway stations. Confirm this service when booking.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 