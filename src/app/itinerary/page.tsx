'use client'

import { useState } from 'react'
import { useTour } from '@/context/TourContext';
import Image from 'next/image';

export default function ItineraryPage() {
  const [formData, setFormData] = useState({
    duration: '',
    interests: [] as string[],
    budget: '',
    travelDates: '',
  })

  const { tourDestinations, removeDestination } = useTour();

  const interests = [
    'Historical Sites',
    'Temples',
    'Local Culture',
    'Adventure',
    'Food & Cuisine',
    'Shopping',
    'Nature & Wildlife',
  ]

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement itinerary generation logic
    console.log('Form submitted:', formData)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Create Your Bundelkhand Itinerary
      </h1>
      
      {/* Selected Destinations */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Your Selected Destinations</h2>
        {tourDestinations.length > 0 ? (
          <div className="space-y-4">
            {tourDestinations.map(destination => (
              <div key={destination.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image 
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{destination.name}</h3>
                    <p className="text-gray-500">{destination.title}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeDestination(destination.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 bg-gray-100 p-6 rounded-lg">
            You haven't added any destinations yet. Go back to the homepage to add some!
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trip Duration
          </label>
          <select
            value={formData.duration}
            onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          >
            <option value="">Select duration</option>
            <option value="1-3">1-3 days</option>
            <option value="4-7">4-7 days</option>
            <option value="8-14">8-14 days</option>
            <option value="15+">15+ days</option>
          </select>
        </div>

        {/* Interests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Interests
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-2 rounded-lg border ${
                  formData.interests.includes(interest)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget Range (per person)
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          >
            <option value="">Select budget range</option>
            <option value="budget">Budget (₹5,000 - ₹10,000)</option>
            <option value="moderate">Moderate (₹10,000 - ₹20,000)</option>
            <option value="luxury">Luxury (₹20,000+)</option>
          </select>
        </div>

        {/* Travel Dates */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Travel Dates
          </label>
          <input
            type="date"
            value={formData.travelDates}
            onChange={(e) => setFormData(prev => ({ ...prev, travelDates: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
        >
          Generate Itinerary
        </button>
      </form>
    </div>
  )
} 