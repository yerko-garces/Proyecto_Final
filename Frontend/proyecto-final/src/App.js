import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import OlvideContrasenia from './components/OlvideContrasenia';
import Loby from './components/Loby'
import Loby_admin from './components/Loby_admin'
import HorarioAlumno from './components/HorarioAlumno'
import Seleccion from './components/Seleccion'
import Preguntas from './components/Preguntas'
import Malla from './components/Malla'
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
          <Route path="/seleccion" element={<Seleccion />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/malla" element={<Malla />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
