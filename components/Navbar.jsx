"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaMapMarkerAlt, FaSearch, FaHome, FaInfoCircle, FaCompass, FaUserCircle, FaBars } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) {
    return (
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto py-3 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="animate-pulse">
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="h-9 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const currentTheme = resolvedTheme || theme;
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome className="mr-2" /> },
    { name: "Explore", path: "/categories", icon: <FaCompass className="mr-2" /> },
    { name: "About", path: "/about-dandeli", icon: <FaInfoCircle className="mr-2" /> },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 ${currentTheme === "dark" ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-md border-b ${currentTheme === "dark" ? "border-gray-800" : "border-gray-200"} h-16`}>
      <div className="container mx-auto h-full py-3 px-4 md:px-6">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500">
              <FaMapMarkerAlt className="text-lg text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Dandeli Info
            </span>
          </Link>

          {/* Desktop Nav Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors ${
                  pathname === item.path 
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" 
                    : `${currentTheme === "dark" ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Nav Items */}
          <div className="flex items-center space-x-4">
            
            <ModeToggle />
            
            {status === "authenticated" ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none focus:outline-none">
                  <div className={`flex items-center space-x-2 p-1 rounded-full ${currentTheme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-colors`}>
                    <Avatar className="h-8 w-8 border-2 border-blue-500">
                      <AvatarImage
                        src={session.user?.image || "https://github.com/shadcn.png"}
                        alt={session.user?.name || "User"}
                      />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs">
                        {session.user?.email?.substring(0, 2).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer">
                    <FaUserCircle className="mr-2" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-red-500 focus:text-red-500"
                    onClick={() => signOut()}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-none text-sm px-4 py-2 h-auto">
                  Login
                </Button>
              </Link>
            )}
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 top-16 bg-white dark:bg-gray-900 shadow-lg z-40 border-t border-gray-200 dark:border-gray-800 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className={`w-full px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors ${
                    pathname === item.path 
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" 
                      : `${currentTheme === "dark" ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}