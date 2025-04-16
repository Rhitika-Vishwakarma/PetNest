import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AdoptionForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Adoption for Pet ID:', id, form);
    setSubmitted(true);
  };

  if (submitted) return <p>Thank you! We will contact you soon.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adopt This Pet</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        required
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Why do you want to adopt?"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdoptionForm;
