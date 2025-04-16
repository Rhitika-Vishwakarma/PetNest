import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyPets from './components/MyPets';
import Health from './components/Health';
import Diet from './components/Diet';
import Gallery from './components/Gallery';
import Home from './components/Home';
import PetDetails from './components/PetDetails';
import AdoptionForm from './components/AdoptionForm';
import { PetList } from './components/PetList';
import PlaydateFinder from './components/PlaydateFinder';
import PetCareReminder from './components/PetCareReminder';
import BlogSection from './components/BlogSection';

import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypets" element={<MyPets />} />
          <Route path="/health" element={<Health />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/adoption" element={<PetList />} />
          <Route path="/adoption/:id" element={<AdoptionForm />} />
          <Route path="/details/:id" element={<PetDetails />} />
          <Route path="/playdates" element={<PlaydateFinder />} />
          <Route path="/reminders" element={<PetCareReminder />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
