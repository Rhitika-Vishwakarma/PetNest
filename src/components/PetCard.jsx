import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => (
  <div className="pet-card">
    <img src={pet.image} alt={pet.name} />
    <h4>
      {pet.name} ({pet.breed})
    </h4>
    <p>
      {pet.description.length > 100
        ? pet.description.slice(0, 100) + '...'
        : pet.description}
    </p>
    <Link to={`/adoption/${pet.id}`}>Adopt Me</Link>
  </div>
);

export default PetCard;
