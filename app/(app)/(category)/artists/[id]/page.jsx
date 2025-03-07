"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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
  FaArrowLeft,
  FaTiktok,
  FaEnvelope,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";

// This would normally come from an API or database
// Using the same sample data as the main artists page for now
const artistsData = [
  {
    id: 1,
    name: "Priya Sharma",
    type: "Mehndi Artist",
    rating: 4.8,
    reviews: 132,
    address: "Sunrise Plaza, Main Street, Dandeli",
    phone: "+91 98765 12345",
    email: "priya.sharma@example.com",
    description: "Creating beautiful henna designs for weddings, festivals, and special occasions. Specializing in bridal mehndi with 8+ years of experience.",
    longDescription: "Priya Sharma is a highly skilled mehndi artist based in Dandeli with over 8 years of experience. She has mastered various styles including traditional Indian, Arabic, and Indo-Western fusion designs. Priya's passion for henna art started at a young age and she has since developed her own unique style that combines traditional patterns with contemporary elements.\n\nHer work has been featured in local wedding exhibitions, and she has built a loyal client base through her meticulous attention to detail and creative approach to each design. Whether it's a bridal mehndi, festival celebration, or special occasion, Priya ensures that each client receives personalized designs tailored to their preferences.",
    experience: "8+ years",
    availability: "Available for bookings 7 days a week, appointments required",
    pricing: "Starting from ₹1,000 for basic designs, bridal packages available",
    specialties: ["Bridal Mehndi", "Arabic Designs", "Indo-Western Fusion"],
    image: "https://images.unsplash.com/photo-1595229207358-a1357f4869c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1630327779227-67a0d38ecc19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "priya_henna_art",
      facebook: "priyasharmahennaart",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1595229207358-a1357f4869c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1582903202526-0697095c8183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1638214822668-69b96557cebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1630327780622-574a0cfcd762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1638214882233-9722efe5c7ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    testimonials: [
      {
        name: "Meghna Shah",
        comment: "Priya did my bridal mehndi and it was absolutely stunning! She is extremely talented and professional. Highly recommend!",
        rating: 5,
      },
      {
        name: "Anjali Patel",
        comment: "Beautiful designs and very patient artist. Priya created unique patterns for our family function and everyone loved it.",
        rating: 5,
      },
      {
        name: "Kiran Desai",
        comment: "Great experience! Priya is talented and friendly. Her designs are intricate and long-lasting.",
        rating: 4,
      },
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
    email: "arjun.beats@example.com",
    description: "Independent hip-hop artist and producer creating original music with local influences. Known for energetic live performances and thought-provoking lyrics.",
    longDescription: "Arjun Khanna is a versatile rapper and music producer from Dandeli who has been making waves in the local hip-hop scene. His music blends traditional Indian sounds with modern beats, creating a unique fusion that resonates with listeners across generations.\n\nWith 5+ years of experience in the music industry, Arjun has performed at various venues and events throughout the region. His lyrics often reflect social issues, personal experiences, and the cultural heritage of Dandeli, making his music both entertaining and meaningful.",
    experience: "5+ years",
    availability: "Available for live performances, studio sessions, and collaborations",
    pricing: "Performance fees start at ₹15,000, varies based on event type and duration",
    specialties: ["Hip-hop", "Desi Beats", "Live Performance"],
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    social: {
      instagram: "arjun_beats",
      youtube: "ArjunKhannaMusic",
      spotify: "arjunkhanna",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    testimonials: [
      {
        name: "Rohan Mehra",
        comment: "Arjun's performance at our college fest was incredible! His energy and flow kept everyone engaged throughout the show.",
        rating: 5,
      },
      {
        name: "Deepak Sharma",
        comment: "Great artist with meaningful lyrics. His music combines tradition with modern beats in a unique way.",
        rating: 4,
      },
      {
        name: "Priya Singh",
        comment: "Collaborated with Arjun for a project and it was a fantastic experience. Very professional and talented artist.",
        rating: 5,
      },
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
    email: "meera.crafts@example.com",
    description: "Handcrafted products using sustainable materials and traditional techniques. Creates decorative items, jewelry, and home decor with local artistic influences.",
    longDescription: "Meera Patel is a renowned craft artist in Dandeli with over 12 years of experience in creating handcrafted products. She specializes in using sustainable, locally sourced materials and traditional techniques passed down through generations, while adding her own contemporary twist.\n\nHer work celebrates the rich artistic heritage of the region while promoting eco-friendly practices. Each piece created by Meera tells a story - whether it's jewelry inspired by native flora, home decor that reflects local architecture, or decorative items that showcase indigenous art forms.",
    experience: "12+ years",
    availability: "Products available at local markets, custom orders accepted with 2-3 weeks lead time",
    pricing: "Products range from ₹500 to ₹5,000 depending on complexity and materials",
    specialties: ["Eco-friendly Crafts", "Jewelry", "Home Decor"],
    image: "https://images.unsplash.com/photo-1619115789075-26c504df01fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1608368639946-55259bb921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "meera_crafts",
      facebook: "MeeraPatelHandicraft",
      etsy: "MeeraPatelArt",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1619115789075-26c504df01fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1576473214938-65a069cea8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1606722590628-63cd956db8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    testimonials: [
      {
        name: "Ritu Gupta",
        comment: "Meera's crafts are absolutely beautiful! I purchased several pieces for my home and they add such a unique touch. Quality craftsmanship.",
        rating: 5,
      },
      {
        name: "Sunil Kumar",
        comment: "Ordered a custom jewelry set for my wife's birthday and it exceeded expectations. Meera is incredibly talented and attentive to detail.",
        rating: 5,
      },
      {
        name: "Ananya Reddy",
        comment: "Love the sustainable approach to crafting. Her products are not only beautiful but also environmentally conscious.",
        rating: 5,
      },
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
    email: "ayesha.makeovers@example.com",
    description: "Professional makeup artist specializing in bridal makeup, fashion shoots, and special events. Skilled in both traditional and modern makeup techniques.",
    longDescription: "Ayesha Khan is a talented makeup artist with 7+ years of experience in the beauty industry. Her expertise spans bridal makeup, fashion shoots, and special effects, making her a versatile artist who can cater to various client needs.\n\nTrained in both traditional Indian and contemporary international makeup techniques, Ayesha stays updated with the latest trends while respecting the cultural preferences of her clients. Her work has been featured in local fashion shows and wedding exhibitions, earning her recognition for her skillful application and attention to detail.",
    experience: "7+ years",
    availability: "Appointments available daily, advance booking recommended for events",
    pricing: "Bridal packages start at ₹10,000, party makeup from ₹3,000",
    specialties: ["Bridal Makeup", "Fashion Makeup", "Special Effects"],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "ayesha_makeovers",
      facebook: "AyeshaKhanMUA",
      youtube: "AyeshasMakeupStudio",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1503063576398-e0d6a1dfb44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
      "https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    testimonials: [
      {
        name: "Neha Sharma",
        comment: "Ayesha did my bridal makeup and I couldn't have been happier! She understood exactly what I wanted and made me look flawless.",
        rating: 5,
      },
      {
        name: "Tanya Malhotra",
        comment: "Professional, punctual, and incredibly talented. Ayesha made me feel so comfortable during my pre-wedding shoot.",
        rating: 5,
      },
      {
        name: "Zara Ahmed",
        comment: "Great experience! Ayesha is skilled at bringing out your best features while keeping the look natural.",
        rating: 4,
      },
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
    email: "rahul.captures@example.com",
    description: "Capturing the beauty of Dandeli through photography. Specializes in nature, wildlife, and event photography with a unique artistic perspective.",
    longDescription: "Rahul Verma is a skilled photographer with 10+ years of experience capturing the natural beauty and cultural richness of Dandeli. His work spans wildlife photography in the lush forests surrounding the city, landscape shots of the river and mountains, and documenting important events and celebrations.\n\nWith a keen eye for composition and lighting, Rahul has developed a distinctive style that highlights the unique characteristics of his subjects. His photographs have been featured in local exhibitions, tourism brochures, and regional publications, helping to showcase Dandeli's charm to a wider audience.",
    experience: "10+ years",
    availability: "Available for bookings throughout the week, advance notice required for multi-day shoots",
    pricing: "Wedding packages from ₹35,000, portrait sessions from ₹5,000",
    specialties: ["Wildlife Photography", "Wedding Photography", "Landscape"],
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "rahul_captures",
      facebook: "RahulVermaPhotography",
      twitter: "rahul_lens",
    },
    portfolio: [
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1520454859204-7db08f606702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1532842195051-c9be a392e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    testimonials: [
      {
        name: "Vikram Singh",
        comment: "Rahul captured our wedding beautifully! His ability to find the perfect moments and angles is remarkable.",
        rating: 5,
      },
      {
        name: "Aisha Patel",
        comment: "Had a family photoshoot with Rahul and the pictures turned out amazing. He's patient, professional, and very skilled.",
        rating: 5,
      },
      {
        name: "Raj Malhotra",
        comment: "His wildlife photography is stunning! The way he captures the natural beauty of Dandeli is truly artistic.",
        rating: 4,
      },
    ],
  },
];

export default function ArtistDetailsPage() {
  const { id } = useParams();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedTab, setSelectedTab] = useState("about");

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  const artist = artistsData.find((a) => a.id === Number(id));

  if (!mounted) return null;

  if (!artist) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Artist not found</h1>
        <p className="mb-6">Sorry, we couldn't find the artist you're looking for.</p>
        <Link href="/artists" className="text-primary hover:underline flex items-center justify-center gap-2">
          <FaArrowLeft /> Back to Artists
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        href="/artists"
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back to Artists
      </Link>

      {/* Artist Header with Cover Image */}
      <div className="relative w-full h-56 md:h-80 rounded-lg overflow-hidden mb-6">
        <Image
          src={artist.coverImage || artist.image}
          alt={`${artist.name} cover`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl font-bold">{artist.name}</h1>
          <p className="text-lg">{artist.type}</p>
          <div className="flex items-center mt-2">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-medium">{artist.rating}</span>
            <span className="text-sm opacity-80 ml-1">({artist.reviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Artist Info and Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Contact Info */}
        <div className="md:col-span-1">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">{artist.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaPhone className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">{artist.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">{artist.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaCalendarAlt className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">{artist.availability}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaBriefcase className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Experience</p>
                  <p className="text-muted-foreground">{artist.experience}</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">Social Profiles</h3>
            <div className="flex flex-wrap gap-4">
              {artist.social.instagram && (
                <a 
                  href={`https://instagram.com/${artist.social.instagram}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                  aria-label={`${artist.name}'s Instagram`}
                >
                  <FaInstagram size={24} />
                </a>
              )}
              {artist.social.facebook && (
                <a 
                  href={`https://facebook.com/${artist.social.facebook}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  aria-label={`${artist.name}'s Facebook`}
                >
                  <FaFacebook size={24} />
                </a>
              )}
              {artist.social.youtube && (
                <a 
                  href={`https://youtube.com/${artist.social.youtube}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                  aria-label={`${artist.name}'s YouTube`}
                >
                  <FaYoutube size={24} />
                </a>
              )}
              {artist.social.twitter && (
                <a 
                  href={`https://twitter.com/${artist.social.twitter}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                  aria-label={`${artist.name}'s Twitter`}
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {artist.social.linkedin && (
                <a 
                  href={`https://linkedin.com/in/${artist.social.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 transition-colors"
                  aria-label={`${artist.name}'s LinkedIn`}
                >
                  <FaLinkedin size={24} />
                </a>
              )}
              {artist.social.tiktok && (
                <a 
                  href={`https://tiktok.com/@${artist.social.tiktok}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black dark:text-white transition-colors"
                  aria-label={`${artist.name}'s TikTok`}
                >
                  <FaTiktok size={24} />
                </a>
              )}
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {artist.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
            
            <div className="mt-6">
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Contact {artist.name}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Tabs Content */}
        <div className="md:col-span-2">
          {/* Tabs Navigation */}
          <div className="border-b border-border flex mb-6">
            <button
              onClick={() => setSelectedTab("about")}
              className={`px-4 py-2 font-medium ${
                selectedTab === "about"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setSelectedTab("portfolio")}
              className={`px-4 py-2 font-medium ${
                selectedTab === "portfolio"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setSelectedTab("testimonials")}
              className={`px-4 py-2 font-medium ${
                selectedTab === "testimonials"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Testimonials
            </button>
          </div>

          {/* About Tab */}
          {selectedTab === "about" && (
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">About {artist.name}</h2>
                <div className="space-y-4">
                  <p>{artist.longDescription}</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                <p>{artist.pricing}</p>
              </div>
            </div>
          )}

          {/* Portfolio Tab */}
          {selectedTab === "portfolio" && (
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {artist.portfolio.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${artist.name}'s work ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {selectedTab === "testimonials" && (
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
              <div className="space-y-4">
                {artist.testimonials?.map((testimonial, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 