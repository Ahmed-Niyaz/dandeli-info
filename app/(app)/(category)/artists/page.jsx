"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPalette,
  FaStar,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaSearch,
  FaTiktok,
  FaFilter,
} from "react-icons/fa";

// Sample data for artists - replace with actual data when available
const artists = [
  {
    id: 1,
    name: "Priya Sharma",
    type: "Mehndi Artist",
    rating: 4.8,
    reviews: 132,
    address: "Sunrise Plaza, Main Street, Dandeli",
    phone: "+91 98765 12345",
    description: "Creating beautiful henna designs for weddings, festivals, and special occasions. Specializing in bridal mehndi with 8+ years of experience.",
    experience: "8+ years",
    specialties: ["Bridal Mehndi", "Arabic Designs", "Indo-Western Fusion"],
    image: "https://images.unsplash.com/photo-1595229207358-a1357f4869c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "priya_henna_art",
      facebook: "priyasharmahennaart",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1595229207358-a1357f4869c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1582903202526-0697095c8183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: 2,
    name: "Arjun Khanna",
    type: "Rapper/Music Artist",
    rating: 4.6,
    reviews: 87,
    address: "Music Studio, Arts District, Dandeli",
    phone: "+91 87654 98765",
    description: "Independent hip-hop artist and producer creating original music with local influences. Known for energetic live performances and thought-provoking lyrics.",
    experience: "5+ years",
    specialties: ["Hip-hop", "Desi Beats", "Live Performance"],
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "arjun_beats",
      youtube: "ArjunKhannaMusic",
      spotify: "arjunkhanna",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: 3,
    name: "Meera Patel",
    type: "Craft Artist",
    rating: 4.9,
    reviews: 156,
    address: "Creative Hub, Riverside Road, Dandeli",
    phone: "+91 76543 21098",
    description: "Handcrafted products using sustainable materials and traditional techniques. Creates decorative items, jewelry, and home decor with local artistic influences.",
    experience: "12+ years",
    specialties: ["Eco-friendly Crafts", "Jewelry", "Home Decor"],
    image: "https://images.unsplash.com/photo-1619115789075-26c504df01fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "meera_crafts",
      facebook: "MeeraPatelHandicraft",
      etsy: "MeeraPatelArt",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1619115789075-26c504df01fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: 4,
    name: "Ayesha Khan",
    type: "Makeup Artist",
    rating: 4.7,
    reviews: 118,
    address: "Glamour Studio, Market Area, Dandeli",
    phone: "+91 98123 45678",
    description: "Professional makeup artist specializing in bridal makeup, fashion shoots, and special events. Skilled in both traditional and modern makeup techniques.",
    experience: "7+ years",
    specialties: ["Bridal Makeup", "Fashion Makeup", "Special Effects"],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "ayesha_makeovers",
      facebook: "AyeshaKhanMUA",
      youtube: "AyeshasMakeupStudio",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: 5,
    name: "Rahul Verma",
    type: "Photographer",
    rating: 4.8,
    reviews: 142,
    address: "Lens Studio, Nature Park Road, Dandeli",
    phone: "+91 77777 88888",
    description: "Capturing the beauty of Dandeli through photography. Specializes in nature, wildlife, and event photography with a unique artistic perspective.",
    experience: "10+ years",
    specialties: ["Wildlife Photography", "Wedding Photography", "Landscape"],
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "rahul_captures",
      facebook: "RahulVermaPhotography",
      twitter: "rahul_lens",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
];

const artistCategories = [
  "All",
  "Craft Artist",
  "Rapper/Music Artist",
  "Standup Comedian",
  "Makeup Artist",
  "Mehndi Artist",
  "Photographer",
  "Painter",
  "Dancer",
  "Sculptor",
];

export default function ArtistsPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  // Filter artists based on search term and selected category
  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          artist.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          artist.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || artist.type === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FaPalette className="text-primary" />
            <span>Artists in Dandeli</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Discover talented local artists, performers, and creators in Dandeli
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 bg-card rounded-lg p-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search by name, type, or skills..."
              className="pl-10 py-2 w-full rounded-md border border-input bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-muted-foreground" />
            </div>
            <select
              className="pl-10 py-2 pr-8 rounded-md border border-input bg-background appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {artistCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <div key={artist.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground">{artist.type}</p>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="font-medium">{artist.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">({artist.reviews})</span>
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <p className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{artist.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-primary flex-shrink-0" />
                  <span className="text-sm">{artist.phone}</span>
                </p>
              </div>

              <p className="mt-3 text-sm line-clamp-3">{artist.description}</p>

              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {artist.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Social Profiles:</h4>
                <div className="flex gap-3">
                  {artist.social.instagram && (
                    <a 
                      href={`https://instagram.com/${artist.social.instagram}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700"
                      aria-label={`${artist.name}'s Instagram`}
                    >
                      <FaInstagram size={20} />
                    </a>
                  )}
                  {artist.social.facebook && (
                    <a 
                      href={`https://facebook.com/${artist.social.facebook}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                      aria-label={`${artist.name}'s Facebook`}
                    >
                      <FaFacebook size={20} />
                    </a>
                  )}
                  {artist.social.youtube && (
                    <a 
                      href={`https://youtube.com/${artist.social.youtube}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700"
                      aria-label={`${artist.name}'s YouTube`}
                    >
                      <FaYoutube size={20} />
                    </a>
                  )}
                  {artist.social.twitter && (
                    <a 
                      href={`https://twitter.com/${artist.social.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-500"
                      aria-label={`${artist.name}'s Twitter`}
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {artist.social.linkedin && (
                    <a 
                      href={`https://linkedin.com/in/${artist.social.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800"
                      aria-label={`${artist.name}'s LinkedIn`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {artist.social.tiktok && (
                    <a 
                      href={`https://tiktok.com/@${artist.social.tiktok}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black dark:text-white"
                      aria-label={`${artist.name}'s TikTok`}
                    >
                      <FaTiktok size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <Link href={`/artists/${artist.id}`} className="mt-4 block w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredArtists.length === 0 && (
        <div className="text-center py-10">
          <p className="text-lg font-medium">No artists found matching your search criteria</p>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
} 