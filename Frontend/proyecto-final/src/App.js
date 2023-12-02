import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import OlvideContrasenia from './components/OlvideContrasenia';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/olvideContrasenia" element={<OlvideContrasenia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
