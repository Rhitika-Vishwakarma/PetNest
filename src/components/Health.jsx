import React, { useState, useEffect } from 'react';

const Health = () => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [petName, setPetName] = useState('');
  const [record, setRecord] = useState('');

  useEffect(() => {
    const storedHealth = JSON.parse(localStorage.getItem('healthRecords')) || [];
    setHealthRecords(storedHealth);
  }, []);

  const addHealthRecord = () => {
    const newRecord = { petName, record };
    const updatedHealthRecords = [...healthRecords, newRecord];
    setHealthRecords(updatedHealthRecords);
    localStorage.setItem('healthRecords', JSON.stringify(updatedHealthRecords));
    setPetName('');
    setRecord('');
  };

  return (
    <div>
      <h2>Health Records</h2>
      <p>Maintain a detailed health journal for your pets. Perfect for appointments, medication logs, and vaccination schedules.</p>

      <input 
        type="text" 
        placeholder="Pet Name" 
        value={petName} 
        onChange={(e) => setPetName(e.target.value)} 
      />
      <textarea 
        placeholder="Record details" 
        value={record} 
        onChange={(e) => setRecord(e.target.value)} 
      />
      <button onClick={addHealthRecord}>Add Health Record</button>
      <h3>Health Suggestions 🩺</h3>
  <ul>
    <li>💉 Keep vaccination records up to date.</li>
    <li>📆 Schedule annual vet checkups — prevention is better than cure.</li>
    <li>🪥 Brush their teeth regularly to avoid dental issues.</li>
  </ul>

  <h3>Recent Pet Health News 📰</h3>
  <p><strong>April 2025:</strong> A new heartworm prevention treatment has been approved for use in small breed dogs. Ask your vet for details!</p>
      <h3>Health Records</h3>
      <ul>
        {healthRecords.map((record, index) => (
          <li key={index}>{record.petName}: {record.record}</li>
        ))}
      </ul>
    </div>
  );
};

export default Health;
