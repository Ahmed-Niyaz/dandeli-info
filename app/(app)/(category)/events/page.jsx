"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaRupeeSign,
  FaClock,
  FaFilter,
  FaSearch,
  FaInfoCircle,
  FaRegularCalendar,
  FaTicketAlt,
  FaUser,
  FaUsers,
  FaMusic,
  FaTheaterMasks,
  FaHiking,
  FaDrum,
  FaCamera
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Events data
const events = [
  {
    id: 1,
    name: "Dandeli Wildlife Festival",
    type: "Festival",
    description: "Annual celebration of Dandeli's rich biodiversity and wildlife conservation efforts. The festival includes wildlife photography exhibitions, nature walks, documentary screenings, and interactive sessions with conservationists.",
    date: "October 15-17, 2023",
    time: "9:00 AM - 8:00 PM",
    location: "Dandeli Wildlife Sanctuary, Dandeli",
    address: "Dandeli Wildlife Sanctuary, Dandeli, Karnataka 581325",
    phone: "9876543210",
    email: "info@dandeliwildlifefestival.org",
    website: "https://www.dandeliwildlifefestival.org",
    entryFee: "₹200 per person (Children under 12: Free)",
    organizer: "Dandeli Forest Department & Tourism Board",
    images: [
      "/event-types/festival.jpg",
      "/event-types/cultural.jpg"
    ],
    activities: ["Photography Competition", "Wildlife Talks", "Art Exhibition", "Bird Watching Tours", "Local Food Stalls"],
    featured: true,
    upcoming: new Date("2023-10-15") > new Date()
  },
  {
    id: 2,
    name: "Kali River White Water Rafting Championship",
    type: "Sports",
    description: "An exciting rafting competition that brings together adventure enthusiasts from across the country to navigate the thrilling rapids of the Kali River. Participants compete in teams across different categories based on experience levels.",
    date: "August 25-26, 2023",
    time: "8:00 AM - 5:00 PM",
    location: "Kali River Adventure Zone",
    address: "Kali River Adventure Zone, River Road, Dandeli, Karnataka 581325",
    phone: "9876543211",
    email: "register@kaliriververaafting.com",
    website: "https://www.kaliriververrafting.com",
    entryFee: "₹1000 per team (Registration required)",
    organizer: "Dandeli Adventure Sports Association",
    images: [
      "/event-types/sports.jpg",
      "/event-types/adventure.jpg"
    ],
    activities: ["Rafting Competition", "Safety Workshops", "Equipment Exhibition", "Award Ceremony", "Riverside Camping"],
    featured: true,
    upcoming: new Date("2023-08-25") > new Date()
  },
  {
    id: 3,
    name: "Dandeli Cultural Night",
    type: "Cultural",
    description: "A vibrant evening showcasing the rich cultural heritage of the region through traditional music, dance, and theatrical performances. Local artists present folk dances, tribal music, and cultural stories.",
    date: "September 10, 2023",
    time: "6:00 PM - 10:00 PM",
    location: "Dandeli Community Center",
    address: "Main Street, Dandeli, Karnataka 581325",
    phone: "9876543212",
    email: "culture@dandelitourism.com",
    website: "https://www.dandelitourism.com/events",
    entryFee: "₹100 per person",
    organizer: "Dandeli Cultural Association",
    images: [
      "/event-types/cultural.jpg",
      "/event-types/festival.jpg"
    ],
    activities: ["Folk Dance", "Traditional Music", "Local Cuisine", "Handicraft Exhibition", "Cultural Workshops"],
    featured: false,
    upcoming: new Date("2023-09-10") > new Date()
  },
  {
    id: 4,
    name: "Dandeli Food & Craft Festival",
    type: "Festival",
    description: "A celebration of local cuisine and traditional crafts, bringing together food vendors, artisans, and craftspeople from around the region. Visitors can sample local delicacies and purchase authentic handicrafts.",
    date: "November 5-7, 2023",
    time: "11:00 AM - 9:00 PM",
    location: "Town Square",
    address: "Town Square, Dandeli, Karnataka 581325",
    phone: "9876543213",
    email: "info@dandelifoodfestival.com",
    website: "https://www.dandelifoodfestival.com",
    entryFee: "Free entry",
    organizer: "Dandeli Tourism Development Council",
    images: [
      "/event-types/festival.jpg",
      "/event-types/cultural.jpg"
    ],
    activities: ["Cooking Demonstrations", "Food Tasting", "Craft Workshops", "Local Music", "Artisan Market"],
    featured: false,
    upcoming: new Date("2023-11-05") > new Date()
  },
  {
    id: 5,
    name: "Jungle Photography Workshop",
    type: "Workshop",
    description: "A hands-on workshop for photography enthusiasts led by renowned wildlife photographers. Learn techniques for capturing wildlife, landscapes, and macro subjects in the beautiful forests of Dandeli.",
    date: "December 8-10, 2023",
    time: "6:00 AM - 7:00 PM",
    location: "Dandeli Jungle Resort",
    address: "Wildlife Sanctuary Road, Dandeli, Karnataka 581325",
    phone: "9876543214",
    email: "workshop@junglecamera.com",
    website: "https://www.junglecameraworkshop.com",
    entryFee: "₹5,000 per person (includes accommodation and meals)",
    organizer: "Nature Photography Society",
    images: [
      "/event-types/workshop.jpg",
      "/event-types/cultural.jpg"
    ],
    activities: ["Field Sessions", "Post-processing Tutorials", "Equipment Reviews", "Portfolio Reviews", "Nature Walks"],
    featured: false,
    upcoming: new Date("2023-12-08") > new Date()
  },
  {
    id: 6,
    name: "Kali River Music Festival",
    type: "Music",
    description: "An outdoor music festival on the banks of the Kali River featuring a diverse lineup of indie, folk, and fusion artists. The two-day event combines music with nature for a unique riverside experience.",
    date: "January 20-21, 2024",
    time: "3:00 PM - 11:00 PM",
    location: "Riverside Amphitheater",
    address: "Kali Riverside, Dandeli, Karnataka 581325",
    phone: "9876543215",
    email: "tickets@kalimusicfest.com",
    website: "https://www.kalimusicfest.com",
    entryFee: "₹600 per day / ₹1000 for both days",
    organizer: "Riverside Productions",
    images: [
      "/event-types/music.jpg",
      "/event-types/festival.jpg"
    ],
    activities: ["Live Performances", "Acoustic Sessions", "DJ Sets", "Food Stalls", "Craft Beer"],
    featured: true,
    upcoming: new Date("2024-01-20") > new Date()
  },
  {
    id: 7,
    name: "Tribal Arts Exhibition",
    type: "Exhibition",
    description: "A showcase of indigenous tribal arts and crafts from the communities surrounding Dandeli. The exhibition highlights traditional techniques, materials, and cultural significance of tribal artifacts.",
    date: "October 1-10, 2023",
    time: "10:00 AM - 6:00 PM",
    location: "Dandeli Art Gallery",
    address: "Cultural Center, Dandeli, Karnataka 581325",
    phone: "9876543216",
    email: "arts@dandeligallery.org",
    website: "https://www.dandeligallery.org",
    entryFee: "₹50 per person",
    organizer: "Tribal Arts Preservation Society",
    images: [
      "/event-types/exhibition.jpg",
      "/event-types/cultural.jpg"
    ],
    activities: ["Guided Tours", "Artist Talks", "Demonstration Workshops", "Cultural Performances", "Documentary Screenings"],
    featured: false,
    upcoming: new Date("2023-10-01") > new Date()
  },
  {
    id: 8,
    name: "Annual Dandeli Marathon",
    type: "Sports",
    description: "A scenic marathon through the forests and along the river of Dandeli, attracting runners from all over the country. The event includes full marathon, half marathon, and 10K categories.",
    date: "February 11, 2024",
    time: "5:30 AM - 12:00 PM",
    location: "Dandeli Stadium",
    address: "Sports Complex, Dandeli, Karnataka 581325",
    phone: "9876543217",
    email: "run@dandelimarathon.com",
    website: "https://www.dandelimarathon.com",
    entryFee: "₹800 - ₹1,500 (based on category)",
    organizer: "Dandeli Runners Club",
    images: [
      "/event-types/sports.jpg",
      "/event-types/adventure.jpg"
    ],
    activities: ["Marathon Race", "Health Expo", "Warm-up Sessions", "Medal Ceremony", "Community Run"],
    featured: false,
    upcoming: new Date("2024-02-11") > new Date()
  },
  // Additional upcoming events
  {
    id: 14,
    name: "Dandeli Eco-Conservation Summit",
    type: "Workshop",
    description: "A two-day summit bringing together environmentalists, researchers, and local communities to discuss sustainable practices and conservation efforts in the Western Ghats region.",
    date: "May 5-6, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Dandeli Community Center",
    address: "Community Center, Central Avenue, Dandeli, Karnataka 581325",
    phone: "9876543223",
    email: "summit@dandelieco.org",
    website: "https://www.dandelieco.org/summit",
    entryFee: "₹1,200 per person (Students: ₹600)",
    organizer: "Dandeli Eco Conservation Trust",
    images: [
      "/event-types/workshop.jpg",
      "/event-types/cultural.jpg"
    ],
    activities: ["Panel Discussions", "Research Presentations", "Field Trips", "Networking Sessions", "Documentary Screenings"],
    featured: false,
    upcoming: true
  },
  {
    id: 15,
    name: "Dandeli Tribal Arts Festival",
    type: "Cultural",
    description: "A celebration of indigenous arts and crafts from the tribal communities around Dandeli. The festival features traditional music, dance performances, handicraft exhibitions, and storytelling sessions.",
    date: "April 22-24, 2024",
    time: "10:00 AM - 9:00 PM",
    location: "Dandeli Heritage Park",
    address: "Heritage Park, Cultural District, Dandeli, Karnataka 581325",
    phone: "9876543224",
    email: "arts@dandelitribal.org",
    website: "https://www.dandelitribal.org/festival",
    entryFee: "₹150 per person (Children under 10: Free)",
    organizer: "Tribal Cultural Preservation Society",
    images: [
      "/event-types/cultural.jpg",
      "/event-types/festival.jpg"
    ],
    activities: ["Traditional Dance", "Music Performances", "Craft Workshops", "Storytelling", "Tribal Cuisine"],
    featured: true,
    upcoming: true
  },
  {
    id: 16,
    name: "Dandeli Birding Marathon",
    type: "Adventure",
    description: "A unique event for bird enthusiasts to spot and document as many bird species as possible within 24 hours. Guided by expert ornithologists, participants explore various habitats around Dandeli.",
    date: "March 30, 2024",
    time: "5:00 AM - 5:00 AM (next day)",
    location: "Dandeli Bird Sanctuary",
    address: "Bird Sanctuary Entrance, Forest Road, Dandeli, Karnataka 581325",
    phone: "9876543225",
    email: "marathon@dandelibirding.com",
    website: "https://www.dandelibirding.com/marathon",
    entryFee: "₹1,000 per person (Includes meals and equipment)",
    organizer: "Karnataka Birding Society",
    images: [
      "/event-types/adventure.jpg",
      "/event-types/cultural.jpg"
    ],
    activities: ["Bird Watching", "Species Documentation", "Photography", "Expert Talks", "Awards Ceremony"],
    featured: false,
    upcoming: true
  },
  {
    id: 17,
    name: "Dandeli River Music Festival",
    type: "Music",
    description: "An open-air music festival set against the backdrop of the Kali River. The event features a diverse lineup of artists performing folk, indie, and fusion music on floating stages.",
    date: "April 5-7, 2024",
    time: "4:00 PM - 11:00 PM",
    location: "Kali River Banks, Dandeli",
    address: "Riverside Amphitheater, River Road, Dandeli, Karnataka 581325",
    phone: "9876543226",
    email: "info@rivermusic.in",
    website: "https://www.rivermusic.in",
    entryFee: "₹1,500 for 3-day pass, ₹600 for single day",
    organizer: "Dandeli Arts Collective",
    images: [
      "/event-types/music.jpg",
      "/event-types/festival.jpg"
    ],
    activities: ["Live Performances", "Jam Sessions", "Music Workshops", "Local Food Stalls", "Camping"],
    featured: true,
    upcoming: true
  }
];

// Default images
const DEFAULT_EVENT_IMAGE = "/event-types/default.jpg"; // Default event image
const DEFAULT_IMAGES = {
  Festival: "/event-types/festival.jpg",
  Sports: "/event-types/sports.jpg",
  Cultural: "/event-types/cultural.jpg",
  Workshop: "/event-types/workshop.jpg",
  Music: "/event-types/music.jpg",
  Exhibition: "/event-types/exhibition.jpg",
  Adventure: "/event-types/adventure.jpg"
};

// Add this error handling function
const getEventImage = (event, index = 0) => {
  try {
    // First try the event's specific image
    if (event.images?.[index]) {
      return event.images[index];
    }
    // Then try type-specific default
    if (DEFAULT_IMAGES[event.type]) {
      return DEFAULT_IMAGES[event.type];
    }
    // Finally, use the general default
    return DEFAULT_EVENT_IMAGE;
  } catch (error) {
    console.error('Error loading image:', error);
    return DEFAULT_EVENT_IMAGE;
  }
};

// Event types for filtering
const eventTypes = [
  "All",
  "Festival",
  "Sports",
  "Cultural",
  "Workshop",
  "Music",
  "Exhibition"
];

// Add a carousel for upcoming events
const UpcomingEventsCarousel = () => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    loop
  >
    {events.filter(event => event.upcoming).map(event => (
      <SwiperSlide key={event.id}>
        <div className="relative h-64">
          <Image
            src={getEventImage(event)}
            alt={event.name}
            fill
            className="object-cover rounded-lg"
            onError={(e) => {
              e.currentTarget.src = DEFAULT_EVENT_IMAGE;
            }}
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{event.name}</h3>
            <p className="text-sm text-white">{event.date}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function EventsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("all"); // 'all', 'upcoming', 'past'

  useEffect(() => setMounted(true), []);

  // Filter events based on type, search query, and time
  useEffect(() => {
    let filtered = events;
    
    // Filter by type
    if (selectedType !== "All") {
      filtered = filtered.filter(event => event.type === selectedType);
    }
    
    // Filter by time
    if (timeFilter === "upcoming") {
      filtered = filtered.filter(event => event.upcoming);
    } else if (timeFilter === "past") {
      filtered = filtered.filter(event => !event.upcoming);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.name.toLowerCase().includes(query) || 
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.activities.some(activity => activity.toLowerCase().includes(query))
      );
    }
    
    setFilteredEvents(filtered);
  }, [selectedType, searchQuery, timeFilter]);

  // Function to get event icon based on type
  const getEventIcon = (type) => {
    switch (type) {
      case "Festival":
        return <FaDrum className="text-primary" />;
      case "Sports":
        return <FaHiking className="text-primary" />;
      case "Cultural":
        return <FaTheaterMasks className="text-primary" />;
      case "Workshop":
        return <FaUsers className="text-primary" />;
      case "Music":
        return <FaMusic className="text-primary" />;
      case "Exhibition":
        return <FaCamera className="text-primary" />;
      default:
        return <FaCalendarAlt className="text-primary" />;
    }
  };

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
    <div className="min-h-screen bg-background pb-0">
      {/* Hero Section with Carousel */}
      <div className="relative overflow-hidden bg-card py-12 mb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaCalendarAlt className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Events in Dandeli
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Discover exciting events, festivals, and activities happening in and around Dandeli
            </p>
          </div>
          <UpcomingEventsCarousel />
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
                    placeholder="Search events, locations, activities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Type Filter */}
              <div className="w-full md:w-48">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFilter className="text-muted-foreground" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type} Events
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Time Filter */}
              <div className="w-full md:w-48">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaClock className="text-muted-foreground" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value)}
                  >
                    <option value="all">All Time</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="past">Past Events</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Featured Events */}
      {selectedType === "All" && searchQuery === "" && timeFilter === "all" && (
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.filter(event => event.featured).map((event) => (
              <Card key={event.id} className="overflow-hidden shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={getEventImage(event)}
                    alt={event.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = DEFAULT_EVENT_IMAGE;
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
                    {event.type}
                  </div>
                  {event.upcoming && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Upcoming
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">{event.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <Button asChild variant="default" className="w-full">
                    <Link href={`#event-${event.id}`} className="flex items-center justify-center gap-2">
                      Event Details
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All Events */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          {filteredEvents.length > 0 
            ? `${selectedType === "All" ? "All" : selectedType} Events (${filteredEvents.length})`
            : "No events found"
          }
        </h2>
        <div className="space-y-8">
          {filteredEvents.map((event) => (
            <Card key={event.id} id={`event-${event.id}`} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Event Image */}
                  <div className="relative w-full md:w-1/3 h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src={getEventImage(event)}
                      alt={event.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = DEFAULT_EVENT_IMAGE;
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      {getEventIcon(event.type)}
                      <span>{event.type}</span>
                    </div>
                    {event.upcoming && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        Upcoming
                      </div>
                    )}
                  </div>
                  
                  {/* Event Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{event.name}</h3>
                      <div className="text-primary text-lg font-medium">
                        {event.entryFee}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <FaCalendarAlt className="mr-2 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground">
                        <FaClock className="mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground">
                        <FaMapMarkerAlt className="mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground">
                        <FaUser className="mr-2 text-primary" />
                        <span>{event.organizer}</span>
                      </div>
                    </div>
                    
                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Event Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.activities.map((activity, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="default" 
                        asChild 
                        className="gap-2"
                      >
                        <a href={`tel:${event.phone}`}>
                          <FaPhone className="text-sm" />
                          Contact Organizer
                        </a>
                      </Button>
                      
                      {event.website && (
                        <Button 
                          variant="outline" 
                          asChild 
                          className="gap-2"
                        >
                          <a href={event.website} target="_blank" rel="noopener noreferrer">
                            <FaInfoCircle className="text-sm" />
                            Website
                          </a>
                        </Button>
                      )}
                      
                      {event.upcoming && (
                        <Button 
                          variant="outline" 
                          asChild 
                          className="gap-2"
                        >
                          <a href={event.website} target="_blank" rel="noopener noreferrer">
                            <FaTicketAlt className="text-sm" />
                            Register/Get Tickets
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

      {/* Event Planning Tips */}
      <div className="container mx-auto px-4 mb-0 pb-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Event Planning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Attending Events in Dandeli</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Book tickets in advance for popular events, especially during peak tourist seasons</li>
                  <li>Check weather conditions beforehand, particularly for outdoor events</li>
                  <li>Consider transportation options as some event venues may be located outside the main town</li>
                  <li>Carry appropriate gear for adventure events (comfortable clothing, water bottles, etc.)</li>
                  <li>Follow all safety guidelines, especially for water and adventure sports events</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Best Times to Visit</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>October to February hosts most cultural and wildlife events due to pleasant weather</li>
                  <li>The monsoon season (June to September) is ideal for river-based events</li>
                  <li>Wildlife festivals typically occur in winter months when animal sightings are more common</li>
                  <li>Local festivals often coincide with regional holidays and cultural celebrations</li>
                  <li>Check the event calendar regularly as new events are added throughout the year</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}