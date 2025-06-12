'use client'

import { useState } from 'react'

interface BookingFormProps {
  title: string
  price: number
  onClose: () => void
  onSubmit: (data: BookingData) => void
}

interface BookingData {
  name: string
  email: string
  phone: string
  date: string
  guests: number
  specialRequests: string
}

export default function BookingForm({ title, price, onClose, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    specialRequests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Number of Guests
        </label>
        <input
          type="number"
          min="1"
          required
          value={formData.guests}
          onChange={(e) => setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests
        </label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          rows={3}
        />
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total Price:</span>
          <span className="text-xl font-bold text-primary">₹{price * formData.guests}</span>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Confirm Booking
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
} 