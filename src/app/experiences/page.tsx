'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Experience {
  id: number
  name: string
  duration: string
  price: number
  image: string
  description: string
  includes: string[]
  location: string
}

const experiences: Experience[] = [
  {
    id: 1,
    name: "Traditional Pottery Workshop",
    duration: "3 hours",
    price: 1500,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070",
    description: "Learn the ancient art of Bundelkhand pottery from master craftsmen.",
    includes: [
      "All materials provided",
      "Take home your creation",
      "Traditional tea & snacks",
      "Certificate of participation"
    ],
    location: "Orchha Craft Village"
  },
  {
    id: 2,
    name: "Folk Dance & Music",
    duration: "2 hours",
    price: 2000,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
    description: "Experience the vibrant folk traditions of Bundelkhand through dance and music.",
    includes: [
      "Live performance",
      "Interactive session",
      "Traditional costumes",
      "Refreshments"
    ],
    location: "Cultural Center, Khajuraho"
  }
]

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Cultural Experiences in Bundelkhand
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src={experience.image}
                alt={experience.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold">{experience.name}</h2>
                <span className="text-primary font-semibold">₹{experience.price}/person</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span>{experience.duration}</span>
                <span>•</span>
                <span>{experience.location}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{experience.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Includes:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {experience.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => setSelectedExperience(experience)}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Book Experience
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book {selectedExperience.name}</h2>
            {/* Add booking form here */}
            <button
              onClick={() => setSelectedExperience(null)}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 