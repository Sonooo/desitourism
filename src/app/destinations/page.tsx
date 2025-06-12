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
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg",
    attractions: ["Orchha Fort Complex", "Raja Ram Temple", "Betwa River Cenotaphs"]
  },
  {
    id: 3,
    name: "Chitrakoot",
    title: "Spiritual Abode",
    description: "Sacred land where Lord Rama spent years of exile, steeped in mythology",
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg",
    attractions: ["Ram Ghat", "Kamadgiri Hill", "Gupt Godavari Caves"]
  },
  {
    id: 4,
    name: "Kalinjar",
    title: "The Invincible Citadel",
    description: "Ancient fort perched on Vindhya hills with stunning panoramic views",
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg",
    attractions: ["Kalinjar Fort", "Neelkanth Temple", "Patal Ganga"]
  },
  {
    id: 5,
    name: "Mahoba",
    title: "Land of Warriors",
    description: "Historic town known for Alha-Udal legends and engineering marvels",
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg",
    attractions: ["Sun Temple", "Rahila Sagar Lake", "Kakramath Temple"]
  }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
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
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Our Destinations
          </h1>
          <p className="text-xl text-gray-200">
            Explore the magnificent heritage sites and cultural treasures of Bundelkhand
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
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
                  <div className="flex gap-4">
                    <button className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition">
                      Add to Tour
                    </button>
                    <Link
                      href={`/destinations/${destination.name.toLowerCase()}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 