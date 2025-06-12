import Image from "next/image";

const guides = [
  {
    id: 1,
    name: "Rajesh Kumar",
    specialty: "Heritage Specialist",
    description: "Expert in historical narratives, architectural details, and royal legends",
    languages: ["Hindi", "English", "Bundeli"],
    cost: 2000,
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    specialty: "Cultural Guide",
    description: "Deep knowledge of folk traditions, local customs, and craft demonstrations",
    languages: ["Hindi", "Bundeli", "English"],
    cost: 1800,
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg"
  },
  {
    id: 3,
    name: "Dr. Mohan Singh",
    specialty: "Spiritual Guide",
    description: "Expert in religious significance, mythological stories, and pilgrimage routes",
    languages: ["Hindi", "Sanskrit", "English"],
    cost: 1500,
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg"
  },
  {
    id: 4,
    name: "Anita Verma",
    specialty: "Nature Guide",
    description: "Specialist in flora and fauna, adventure activities, and scenic spots",
    languages: ["Hindi", "English"],
    cost: 1600,
    image: "https://pplx-res.cloudinary.com/image/upload/v1749746753/pplx_project_search_images/78d7a2851a0ed6bc97272468db39f2dffe422cdb.jpg"
  }
];

export default function GuidesPage() {
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
            Expert Local Guides
          </h1>
          <p className="text-xl text-gray-200">
            Connect with knowledgeable guides for an enriching experience
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={guide.image}
                        alt={guide.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{guide.name}</h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {guide.specialty}
                      </p>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.languages.map((language) => (
                          <span
                            key={language}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold">
                          ₹{guide.cost} per day
                        </p>
                        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition">
                          Book Guide
                        </button>
                      </div>
                    </div>
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