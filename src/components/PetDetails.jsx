import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch('/data/pets.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === parseInt(id));
        setPet(found);
      });
  }, [id]);

  if (!pet) return <p>Loading...</p>;

  return (
    <div>
      <h2>{pet.name}</h2>
      <img src={pet.image} alt={pet.name} />
      <p>{pet.description}</p>
    </div>
  );
};

export default PetDetails;
