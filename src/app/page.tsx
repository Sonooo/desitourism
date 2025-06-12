import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Jhansi",
    title: "Land of Rani Lakshmibai",
    description: "The gateway to Bundelkhand, forever etched in India's freedom struggle",
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg",
    attractions: ["Jhansi Fort", "Rani Mahal", "Government Museum"]
  },
  {
    id: 2,
    name: "Orchha",
    title: "The Hidden Jewel",
    description: "A town where time stands still, showcasing Bundela architectural grandeur",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070",
    attractions: ["Orchha Fort Complex", "Raja Ram Temple", "Betwa River Cenotaphs"]
  },
  {
    id: 3,
    name: "Chitrakoot",
    title: "Spiritual Abode",
    description: "Sacred land where Lord Rama spent years of exile, steeped in mythology",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076",
    attractions: ["Ram Ghat", "Kamadgiri Hill", "Gupt Godavari Caves"]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg"
            alt="Bundelkhand Heritage"
            fill
            className="object-cover brightness-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experience the Heart of India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where History Lives, Culture Thrives
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300">
            Discover the timeless charm of Bundelkhand, where majestic forts tell tales of valor, 
            ancient temples whisper spiritual secrets, and vibrant traditions come alive through 
            generations-old customs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itinerary"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition text-lg"
            >
              Create Your Tour
            </Link>
            <Link
              href="/destinations"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition text-lg"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
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
            {destinations.map((destination) => (
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
                  <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition">
                    Add to Tour
                  </button>
                </div>
              </div>
            ))}
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
