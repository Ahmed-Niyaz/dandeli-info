"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) {
    return (
      <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </footer>
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <footer
      className={`${
        currentTheme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-50 text-gray-700"
      } pt-16 pb-10 border-t ${
        currentTheme === "dark" ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Middle section with links */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b ${
            currentTheme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Discover
            </h4>
            <ul className="space-y-2">
              {[
                "About Dandeli",
                "Tourist Places",
                "Activities",
                "Galleries",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-base flex items-center ${
                      currentTheme === "dark"
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                  >
                    <FaChevronRight className="mr-2 text-xs" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {["Restaurants", "Resorts", "Transport", "Banking"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className={`text-base flex items-center ${
                        currentTheme === "dark"
                          ? "text-gray-400 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-600"
                      } transition-colors`}
                    >
                      <FaChevronRight className="mr-2 text-xs" />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Community
            </h4>
            <ul className="space-y-2">
              {["Education", "Healthcare", "Govt Services", "Jobs"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className={`text-base flex items-center ${
                        currentTheme === "dark"
                          ? "text-gray-400 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-600"
                      } transition-colors`}
                    >
                      <FaChevronRight className="mr-2 text-xs" />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt
                  className={`mt-1 ${
                    currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span className="text-base">Dandeli, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope
                  className={`${
                    currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span className="text-base">contact@dandeliinfo.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone
                  className={`${
                    currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span className="text-base">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-4">
                  <a
                    href="#"
                    className={`${
                      currentTheme === "dark"
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className={`${
                      currentTheme === "dark"
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className={`${
                      currentTheme === "dark"
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className={`${
                      currentTheme === "dark"
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 text-center">
          <p className="text-base flex flex-col items-center justify-center gap-2">
            <span className="flex items-center">
              Made by the people of Dandeli<FaHeart className="text-red-500 mx-1" />
            </span>
            <span>
              © {new Date().getFullYear()} Dandeli Info. All rights reserved.
            </span>
          </p>
          <div className="mt-2 text-sm flex justify-center space-x-4">
            <Link
              href="/privacy-policy"
              className={`${
                currentTheme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className={`${
                currentTheme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className={`${
                currentTheme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
