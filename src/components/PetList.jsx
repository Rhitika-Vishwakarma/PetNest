import React, { useEffect, useState } from 'react';
// src/components/PetList.jsx
import  PetCard  from './PetCard';

const dummyPets = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    image: "https://placedog.net/500",
    description: "Friendly and energetic dog."
  },
  {
    id: 2,
    name: "Milo",
    breed: "Beagle",
    image: "https://placedog.net/400",
    description: "Loves sniffing everything."
  }
];

export function PetList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Pets for Adoption</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {dummyPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
