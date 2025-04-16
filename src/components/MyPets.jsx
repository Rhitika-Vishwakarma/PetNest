import React, { useState, useEffect } from 'react';

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  
  // Load pets from localStorage
  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
    setPets(storedPets);
  }, []);

  // Add new pet
  const addPet = () => {
    const newPet = { name: petName, species: petSpecies };
    const updatedPets = [...pets, newPet];
    setPets(updatedPets);
    localStorage.setItem('pets', JSON.stringify(updatedPets));
    setPetName('');
    setPetSpecies('');
  };

  return (
    <div>
      <h2>My Pets</h2>
      <h2>Manage Your Pets</h2>
      <p>Keep track of all your lovely pets in one place. Add their names and species to start.</p>
      <input 
        type="text" 
        placeholder="Pet Name" 
        value={petName} 
        onChange={(e) => setPetName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Pet Species" 
        value={petSpecies} 
        onChange={(e) => setPetSpecies(e.target.value)} 
      />
      <button onClick={addPet}>Add Pet</button>
      <h3>Pet Care Tips 🐾</h3>
  <ul>
    <li>🛁 Give your pets regular baths, but don’t overdo it — their skin needs natural oils.</li>
    <li>👂 Always clean their ears to prevent infections.</li>
    <li>🎾 Ensure daily physical activity to keep them happy and healthy.</li>
  </ul>
  <h3>Fun Fact 🐕</h3>
  <p>Dogs can learn over 1000 words and gestures!</p>
      <h3>Pets List</h3>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name} ({pet.species})</li>
        ))}
      </ul>
    </div>
  );
};

export default MyPets;
