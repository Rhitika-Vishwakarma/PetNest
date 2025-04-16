import React, { useState } from 'react';

const PlaydateFinder = () => {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Searching for playdates in ${location} on ${dates}`);
  };

  return (
    <div className="playdate-finder">
      <h2>Find a Pet Playdate</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="date"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          required
        />
        <button type="submit">Find</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PlaydateFinder;
