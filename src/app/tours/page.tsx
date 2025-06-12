'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Tour {
  id: number
  name: string
  duration: string
  price: number
  maxGroupSize: number
  image: string
  description: string
  highlights: string[]
}

const tours: Tour[] = [
  {
    id: 1,
    name: "Temple Trail",
    duration: "3 days",
    price: 5000,
    maxGroupSize: 12,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070",
    description: "Explore the ancient temples of Khajuraho and Orchha with expert guides.",
    highlights: [
      "Khajuraho Temple Complex",
      "Orchha Fort & Temples",
      "Local Artisan Workshops",
      "Traditional Dance Performance"
    ]
  },
  {
    id: 2,
    name: "Heritage Walk",
    duration: "2 days",
    price: 3500,
    maxGroupSize: 8,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076",
    description: "Discover the rich history of Bundelkhand through its forts and palaces.",
    highlights: [
      "Datia Palace",
      "Jhansi Fort",
      "Local Market Tour",
      "Traditional Cuisine"
    ]
  }
]

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Guided Tours in Bundelkhand
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold">{tour.name}</h2>
                <span className="text-primary font-semibold">₹{tour.price}/person</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span>{tour.duration}</span>
                <span>•</span>
                <span>Max {tour.maxGroupSize} people</span>
              </div>
              
              <p className="text-gray-700 mb-4">{tour.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Highlights:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {tour.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => setSelectedTour(tour)}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Book Tour
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book {selectedTour.name}</h2>
            {/* Add booking form here */}
            <button
              onClick={() => setSelectedTour(null)}
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