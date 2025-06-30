"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of a destination
interface Destination {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  attractions: string[];
}

// Define the shape of the context state
interface TourContextType {
  tourDestinations: Destination[];
  addDestination: (destination: Destination) => void;
  removeDestination: (destinationId: number) => void;
}

// Create the context
const TourContext = createContext<TourContextType | undefined>(undefined);

// Create the provider component
export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [tourDestinations, setTourDestinations] = useState<Destination[]>([]);

  const addDestination = (destination: Destination) => {
    // Prevent adding duplicates
    if (!tourDestinations.some(d => d.id === destination.id)) {
      setTourDestinations(prevDestinations => [...prevDestinations, destination]);
    }
  };

  const removeDestination = (destinationId: number) => {
    setTourDestinations(prevDestinations =>
      prevDestinations.filter(d => d.id !== destinationId)
    );
  };

  return (
    <TourContext.Provider value={{ tourDestinations, addDestination, removeDestination }}>
      {children}
    </TourContext.Provider>
  );
};

// Create a custom hook to use the tour context
export const useTour = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
}; 