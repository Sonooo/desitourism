'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Stay {
  id: number
  name: string
  location: string
  price: number
  rating: number
  image: string
  description: string
  amenities: string[]
}

const stays: Stay[] = [
  {
    id: 1,
    name: "Heritage Homestay",
    location: "Orchha",
    price: 2500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    description: "Experience authentic Bundelkhand hospitality in this 200-year-old haveli.",
    amenities: ["Traditional Meals", "Cultural Activities", "Garden", "AC Rooms"]
  },
  {
    id: 2,
    name: "Temple View Guesthouse",
    location: "Khajuraho",
    price: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
    description: "Stay with a local family and enjoy views of the ancient temples.",
    amenities: ["Home-cooked Food", "Temple Tours", "Bicycle Rental", "WiFi"]
  },
  // Add more stays as needed
]

export default function StaysPage() {
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Local Family Stays in Bundelkhand
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stays.map((stay) => (
          <div
            key={stay.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-48">
              <Image
                src={stay.image}
                alt={stay.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{stay.name}</h2>
                <span className="text-primary font-semibold">₹{stay.price}/night</span>
              </div>
              
              <p className="text-gray-600 mb-4">{stay.location}</p>
              
              <p className="text-gray-700 mb-4">{stay.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {stay.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedStay(stay)}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedStay && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book {selectedStay.name}</h2>
            {/* Add booking form here */}
            <button
              onClick={() => setSelectedStay(null)}
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