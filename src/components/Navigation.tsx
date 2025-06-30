"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTour } from "@/context/TourContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tourDestinations } = useTour();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Homestays", href: "/stays" },
    { name: "Local Guides", href: "/guides" },
    { name: "Culture & Crafts", href: "/experiences" },
    { name: "About", href: "/about" },
  ];

  const tourItemCount = tourDestinations.length;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                <Image src="/logo.png" alt="Logo" width={150} height={60} />
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/itinerary"
              className="relative text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Customized Tour
              {tourItemCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-2 flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">
                  {tourItemCount}
                </span>
              )}
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors ml-4"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/itinerary"
              className="relative text-gray-800 hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Customized Tour
              {tourItemCount > 0 && (
                <span className="absolute top-1 right-2 flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">
                  {tourItemCount}
                </span>
              )}
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 