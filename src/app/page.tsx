"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTour } from "@/context/TourContext";

const destinations = [
  {
    id: 1,
    name: "Jhansi",
    title: "Land of Rani Lakshmibai",
    description: "The gateway to Bundelkhand, forever etched in India's freedom struggle.",
    image: "/City Photos/Jhansi fort photo.jpg",
    attractions: ["Jhansi Fort", "Rani Mahal", "Government Museum"]
  },
  {
    id: 2,
    name: "Orchha",
    title: "The Hidden Jewel",
    description: "A town where time stands still, showcasing Bundela architectural grandeur.",
    image: "/City Photos/Orchha (1).jpg",
    attractions: ["Orchha Fort Complex", "Raja Ram Temple", "Betwa River Cenotaphs"]
  },
  {
    id: 3,
    name: "Gwalior",
    title: "The Fort City",
    description: "Home to a majestic hill fort, considered one of the most formidable in India.",
    image: "/City Photos/gwaliorfort.jpg",
    attractions: ["Gwalior Fort", "Jai Vilas Palace", "Sas Bahu Temple"]
  },
  {
    id: 4,
    name: "Shivpuri",
    title: "The Summer Capital",
    description: "The erstwhile summer capital of the Scindias, known for its lush forests and wildlife.",
    image: "/City Photos/Shivpuri.jpg",
    attractions: ["Madhav National Park", "Chhatri", "Bhadaiya Kund"]
  }
];

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076",
    title: "Spiritual Sojourns Await",
    subtitle: "Find Peace in Sacred Spaces",
    description:
      "Walk the paths of legends and experience the spiritual serenity that has drawn pilgrims for centuries to Bundelkhand's holy sites.",
  },
  {
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg",
    title: "Experience the Heart of India",
    subtitle: "Where History Lives, Culture Thrives",
    description:
      "Discover the timeless charm of Bundelkhand, where majestic forts tell tales of valor, ancient temples whisper spiritual secrets, and vibrant traditions come alive through generations-old customs.",
  },
  {
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070",
    title: "Explore Hidden Gems",
    subtitle: "Unveil the Mysteries of Bundelkhand",
    description:
      "Journey through ancient towns, marvel at architectural wonders, and immerse yourself in the vibrant culture that defines this unique region.",
  },
  
];

export default function Home() {
  const { tourDestinations, addDestination } = useTour();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Swiper
          className="absolute inset-0 z-0 h-full w-full"
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false 
          }}
          pagination={{ clickable: true }}
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-40"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-[90vh] text-center text-white px-6 max-w-4xl mx-auto [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] animate-fadein">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight md:leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-4 md:mb-8 text-gray-200 font-medium">
                  {slide.subtitle}
                </p>
                <p className="text-base md:text-lg mb-8 md:mb-12 text-gray-300 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                  <Link
                    href="/itinerary"
                    className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition text-lg shadow-lg"
                  >
                    Create Your Tour
                  </Link>
                  <Link
                    href="/destinations"
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition text-lg shadow-lg"
                  >
                    Explore Destinations
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Discover Our Destinations
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Explore the magnificent heritage sites and cultural treasures of Bundelkhand
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => {
              const isInTour = tourDestinations.some(d => d.id === destination.id);

              return (
                <div
                  key={destination.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-3">
                      {destination.title}
                    </p>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <ul className="space-y-2 mb-6">
                      {destination.attractions.map((attraction) => (
                        <li key={attraction} className="flex items-center text-gray-700">
                          <svg
                            className="w-4 h-4 mr-2 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {attraction}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => addDestination(destination)}
                      disabled={isInTour}
                      className={`w-full py-3 rounded-lg transition ${
                        isInTour
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      {isInTour ? "Added to Tour" : "Add to Tour"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Experience Bundelkhand
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Immerse yourself in the rich heritage and culture
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Itineraries</h3>
              <p className="text-gray-600">
                Create your perfect journey with our customizable travel plans
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Stays</h3>
              <p className="text-gray-600">
                Experience authentic hospitality with local families
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Guided Tours</h3>
              <p className="text-gray-600">
                Explore with expert guides who know every corner of Bundelkhand
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Experiences</h3>
              <p className="text-gray-600">
                Immerse yourself in local traditions and crafts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
