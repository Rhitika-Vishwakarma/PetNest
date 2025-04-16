import React, { useState } from 'react';

const PetCareReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [task, setTask] = useState('');

  const addReminder = () => {
    if (task.trim()) {
      setReminders([...reminders, task]);
      setTask('');
    }
  };

  return (
    <div className="pet-care-reminder">
      <h2>Pet Care Reminders</h2>
      <input 
        type="text" 
        placeholder="Add a reminder (e.g. Vet visit)"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={addReminder}>Add</button>
      <ul>
        {reminders.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetCareReminder;
