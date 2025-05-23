import React from 'react';
import './Home.css';

const pets = [
  {
    name: 'Dogs',
    img: 'data:image/jpeg;base64,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',
    fact: 'Dogs can understand up to 250 words and gestures!',
  },
  {
    name: 'Cats',
    img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    fact: 'Cats sleep for 70% of their lives.',
  },
  {
    name: 'Rabbits',
    img: 'https://hips.hearstapps.com/hmg-prod/images/baby-rabbit-in-meadow-royalty-free-image-1717078659.jpg?crop=0.88763xw:1xh;center,top&resize=1200:*',
    fact: "Rabbits purr when they're happy – just like cats!",
  },
  {
    name: 'Birds',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrFej9ZbZSzZDrRnCo9F82Up5VqK27TTVaQ&s',
    fact: 'Parrots can live up to 80 years!',
  },
];

const tips = [
  '🐾 Microchip your pets for safety.',
  '🦴 Avoid giving cooked bones to dogs.',
  '🧼 Regular grooming reduces skin infections.',
  '🥦 Don’t forget veggies in your pet’s diet!',
];

const Home = () => {
  return (
    <div>
      <h1>
        Welcome to <span style={{ color: '#5c67f2' }}>PetNest</span>!
      </h1>
      <p>
        Your trusted partner in managing your pet’s health, diet, and memories.
      </p>

      <section className="pets-grid">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>
            <img src={pet.img} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.fact}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="tips-box">
          <h2>Quick Pet Care Tips 🐾</h2>
          <ul>
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
        <div className="banner">
          <a href="./adoption">🐶 Thinking of Adopting?</a>
          <p>Give a pet a forever home — visit your nearest shelter today!</p>
        </div>
        <div className="playdate-banner">
          <h2>🎉 Join a Playdate!</h2>
          <p>Connect your pet with others for fun and social bonding.</p>
          <a href="/playdates" className="banner-link">
            Find Playdates →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
