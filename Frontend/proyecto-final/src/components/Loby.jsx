import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import Card from './Card';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Loby() {
  const estiloFondo = {
    backgroundColor: '#ADD8E6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '50px',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  };

  const salirEstilo = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: 'black',
  };

  const iconoEstilo = {
    marginRight: '5px',
  };

  const cardsContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px',
    width: '100%',
    maxWidth: '800px', 
    margin: '0 auto',
  };

  const column = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1', 
  };

  const space = {
    height: '20px', 
    width: '100%', 
  };

  const cardStyle = {
    marginBottom: '20px', 
  };

  return (
    <div style={estiloFondo}>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br /> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <h1>BIENVENIDO ALUMNO(A) </h1>
      <div style={cardsContainer}>
        <div style={column}>
          <Card path="/Seleccion" titulo="SELECCIÓN DE HORARIO" descripcion="Pagina en la que el alumno puede realizar la toma de ramos, es decir, seleccionar sus horarios" style={cardStyle} />
          <div style={space} />
          <Card path="/" titulo="REGLAS DE HORARIO" descripcion="Reglas para la selección de horarios" style={cardStyle} />
        </div>
        <div style={column}>
          <Card path="/horario_alumno" titulo="HORARIO DEL ALUMNO(A)" descripcion="Horario de clases actual del alumno" style={cardStyle} />
          <div style={space} />
          <Card path="/preguntas" titulo="PREGUNTAS FRECUENTES" descripcion="Preguntas frecuentes sobre la toma de ramos" style={cardStyle} />
        </div>
      </div>
    </div>
  );
}

export default Loby;
