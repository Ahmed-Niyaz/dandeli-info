"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaMapMarkerAlt, FaUsers, FaLeaf, FaUmbrellaBeach, FaMapMarkedAlt, FaUtensils, FaBed, FaCarSide, FaGraduationCap, FaHospital, FaHandsHelping, FaUserTie, FaCalendarAlt, FaUniversity, FaLandmark } from "react-icons/fa";
import { useState, useEffect } from "react";

const DandeliInfo = () => {
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

  // Links to other pages in the project
  const pageLinks = [
    { name: "Tourist Places", icon: <FaUmbrellaBeach />, href: "/tourist-places" },
    { name: "Activities", icon: <FaLeaf />, href: "/activities" },
    { name: "Restaurants", icon: <FaUtensils />, href: "/restaurants" },
    { name: "Resorts", icon: <FaBed />, href: "/resorts" },
    { name: "Transport", icon: <FaCarSide />, href: "/transport" },
    { name: "Education", icon: <FaGraduationCap />, href: "/education" },
    { name: "Hospitals", icon: <FaHospital />, href: "/hospitals" },
    { name: "Community Work", icon: <FaHandsHelping />, href: "/community-work" },
    { name: "Jobs", icon: <FaUserTie />, href: "/jobs" },
    { name: "Events", icon: <FaCalendarAlt />, href: "/events" },
    { name: "Artists", icon: <FaUniversity />, href: "/artists" },
    { name: "Banks", icon: <FaLandmark />, href: "/banks" },
    { name: "Helpline", icon: <FaHandsHelping />, href: "/helpline" },
    { name: "Government Services", icon: <FaLandmark />, href: "/govt-services" },
    { name: "Complaints", icon: <FaHandsHelping />, href: "/complaints" },
  ];

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section with parallax effect */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
            alt="Dandeli city view"
            fill
            className="object-cover transition-transform duration-500 ease-in-out transform scale-105"
            style={{ 
              objectPosition: "center", 
              transform: "translateZ(0) scale(1.05)" 
            }}
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 flex items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/XzGDQfCZbk1SqRTS6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  <FaMapMarkerAlt className="text-5xl" />
                </a>
                Dandeli
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                A paradise nestled in the Western Ghats, where nature's beauty meets adventure
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#explore" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                >
                  Explore
                </a>
                <Link 
                  href="/tourist-places" 
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/20 transition-colors font-medium"
                >
                  Places to Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with modern, minimalist design */}
      <div className="container mx-auto px-4 py-16" id="explore">
        {/* About Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Dandeli</span>
            </h2>
            <div className={`space-y-6 text-lg ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              <p>
                Nestled on the banks of the Kali river, Dandeli transformed from a humble riverside settlement of just 515 people in the 1930s to a vibrant eco-tourism hub in Karnataka's Western Ghats.
              </p>
              <p>
                The area's rich biodiversity, with its lush forests and diverse wildlife, has made it one of Karnataka's premier destinations for nature lovers and adventure seekers alike.
              </p>
              <div className="py-4">
                <h3 className={`text-xl font-semibold mb-3 ${currentTheme === "dark" ? "text-white/90" : "text-gray-800"}`}>
                  Name Origin
                </h3>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Local legend says the city is named after Dandelappa, a local deity who served the Mirashi landlords and died for his loyalty. Another story suggests King Dandakanayaka named the area after himself, with the city believed to stand where Dandakaranya once existed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts with modern cards */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 text-center ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
              Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Facts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Geography Card */}
              <div className={`rounded-xl p-6 ${currentTheme === "dark" ? "bg-gray-800/80" : "bg-white"} shadow-lg transition-transform hover:translate-y-[-5px]`}>
                <div className="flex items-center gap-3 mb-4">
                  <FaMapMarkedAlt className={`text-2xl ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <h3 className={`text-xl font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>Geography</h3>
                </div>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Located at 15°14′51.7884″N 74°37′46.8408″W with an average elevation of 473 metres (1,552 ft).
                </p>
              </div>

              {/* Climate Card */}
              <div className={`rounded-xl p-6 ${currentTheme === "dark" ? "bg-gray-800/80" : "bg-white"} shadow-lg transition-transform hover:translate-y-[-5px]`}>
                <div className="flex items-center gap-3 mb-4">
                  <FaLeaf className={`text-2xl ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <h3 className={`text-xl font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>Climate</h3>
                </div>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Tropical highland climate with summer averages of 27°C (81°F) and winter averages of 18°C (64°F). Heavy rainfall from August to November.
                </p>
              </div>

              {/* Demographics Card */}
              <div className={`rounded-xl p-6 ${currentTheme === "dark" ? "bg-gray-800/80" : "bg-white"} shadow-lg transition-transform hover:translate-y-[-5px]`}>
                <div className="flex items-center gap-3 mb-4">
                  <FaUsers className={`text-2xl ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <h3 className={`text-xl font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>Demographics</h3>
                </div>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Population: 53,287 (2001 census)<br />
                  Literacy Rate: 74% (81% male, 68% female)<br />
                  11% under six years of age
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Section with visual appeal */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 text-center ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
              Wildlife <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Sanctuary</span>
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-xl ${currentTheme === "dark" ? "bg-gray-800/80" : "bg-white"} shadow-lg`}>
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>Fauna</h3>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  Home to tigers, leopards, black panthers, elephants, gaur, deer, antelopes, and bears. 
                </p>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  The second largest wildlife sanctuary in Karnataka and a designated tiger reserve since 2007.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>Biodiversity</h3>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  The jungle hosts numerous reptiles and nearly 270 varieties of birds. The sanctuary is renowned for its rich biodiversity and conservation efforts.
                </p>
                <Link 
                  href="/activities" 
                  className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-medium ${currentTheme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-100 text-blue-700 hover:bg-blue-200"} transition-colors`}
                >
                  Explore Activities →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tourism & Landmarks Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 text-center ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
              Tourist <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Attractions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tourism Card */}
              <div className={`rounded-xl p-6 ${currentTheme === "dark" ? "bg-gray-800/80" : "bg-white"} shadow-lg flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <FaUmbrellaBeach className={`text-2xl ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <h3 className={`text-xl font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>Adventure Tourism</h3>
                </div>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  Popular for eco-tourism and adventure sports including white-water rafting, kayaking, zorbing, jungle safaris, canoeing, and river crossing.
                </p>
                <div className="mt-auto pt-4">
                  <Link 
                    href="/activities" 
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${currentTheme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-100 text-blue-700 hover:bg-blue-200"} transition-colors`}
                  >
                    View All Activities →
                  </Link>
                </div>
              </div>

              {/* Landmarks Card */}
              <div className={`rounded-xl p-6 ${currentTheme === "dark" ? "bg-gray-800/80" : "bg-white"} shadow-lg flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <FaMapMarkedAlt className={`text-2xl ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <h3 className={`text-xl font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>Notable Landmarks</h3>
                </div>
                <ul className={`grid grid-cols-2 gap-x-4 gap-y-2 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  <li>• River Kali</li>
                  <li>• Caves of Kavala</li>
                  <li>• Syntheri Rocks</li>
                  <li>• Ulavi temple</li>
                  <li>• Sykes Point</li>
                  <li>• Supa Dam</li>
                  <li>• Tattihalla Dam</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link 
                    href="/tourist-places" 
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${currentTheme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-100 text-blue-700 hover:bg-blue-200"} transition-colors`}
                  >
                    Explore Places →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore More Links Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 text-center ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
              Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Dandeli</span>
            </h2>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4`}>
              {pageLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`flex flex-col items-center p-4 rounded-xl text-center transition-all hover:scale-105 ${
                    currentTheme === "dark" 
                      ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700" 
                      : "bg-white text-gray-700 hover:shadow-md"
                  }`}
                >
                  <span className={`text-2xl mb-2 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className={`py-8 ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className={`text-sm ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              Source: Information adapted from Wikipedia and local tourism resources
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                currentTheme === "dark" 
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DandeliInfo;
