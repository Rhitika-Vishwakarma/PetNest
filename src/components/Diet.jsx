import React, { useState, useEffect } from 'react';

const Diet = () => {
  const [dietLogs, setDietLogs] = useState([]);
  const [petName, setPetName] = useState('');
  const [mealDescription, setMealDescription] = useState('');

  useEffect(() => {
    const storedDietLogs = JSON.parse(localStorage.getItem('dietLogs')) || [];
    setDietLogs(storedDietLogs);
  }, []);

  const addDietLog = () => {
    const newDietLog = { petName, mealDescription };
    const updatedDietLogs = [...dietLogs, newDietLog];
    setDietLogs(updatedDietLogs);
    localStorage.setItem('dietLogs', JSON.stringify(updatedDietLogs));
    setPetName('');
    setMealDescription('');
  };

  return (
    <div>
      <h2>Diet Log</h2>
      <p>Track your pet's meals to ensure balanced nutrition and routine feeding habits.</p>

      <input 
        type="text" 
        placeholder="Pet Name" 
        value={petName} 
        onChange={(e) => setPetName(e.target.value)} 
      />
      <textarea 
        placeholder="Meal Description" 
        value={mealDescription} 
        onChange={(e) => setMealDescription(e.target.value)} 
      />
      <button onClick={addDietLog}>Add Diet Log</button>
      <h3>Nutrition Tips 🍽</h3>
  <ul>
    <li>🥩 Give a balance of proteins, fats, and carbs depending on your pet’s species.</li>
    <li>🚱 Avoid chocolate, grapes, onions – they’re toxic to pets.</li>
    <li>🥛 Contrary to popular belief, many adult cats are lactose intolerant!</li>
  </ul>

  <h3>Did You Know? 🧠</h3>
  <p>Dogs can smell over 100,000 times better than humans — so don’t hide treats badly 😄</p>
      <h3>Diet Logs</h3>
      <ul>
        {dietLogs.map((log, index) => (
          <li key={index}>{log.petName}: {log.mealDescription}</li>
        ))}
      </ul>
    </div>
  );
};

export default Diet;
