import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem('photos')) || [];
    setPhotos(storedPhotos);
  }, []);

  const addPhoto = () => {
    const newPhoto = image;
    const updatedPhotos = [...photos, newPhoto];
    setPhotos(updatedPhotos);
    localStorage.setItem('photos', JSON.stringify(updatedPhotos));
    setImage('');
  };

  return (
    <div>
      <h2>Pet Gallery</h2>
      <p>
        Upload and cherish your favorite memories with your pets. Add photo
        links to create your album!
      </p>

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={addPhoto}>Add Photo</button>
      <h3>🐾 Pet Moments</h3>
      <p>
        “Until one has loved an animal, a part of one's soul remains
        unawakened.” – Anatole France
      </p>

      <h3>Tips for Better Pet Photos 📷</h3>
      <ul>
        <li>📸 Use natural lighting for warm, clear pictures.</li>
        <li>🧸 Keep them comfortable – let their personality shine!</li>
        <li>🎉 Treats = perfect poses</li>
      </ul>
      <h3>Photos</h3>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="Pet" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
