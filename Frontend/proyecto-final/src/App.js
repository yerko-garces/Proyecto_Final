import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import OlvideContrasenia from './components/OlvideContrasenia';
import Loby from './components/Loby'
import Loby_admin from './components/Loby_admin'
import HorarioAlumno from './components/HorarioAlumno'
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/olvideContrasenia" element={<OlvideContrasenia />} />
          <Route path="/loby" element={<Loby />} />
          <Route path="/loby_admin" element={<Loby_admin />} />
          <Route path="/horario_alumno" element={<HorarioAlumno />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
