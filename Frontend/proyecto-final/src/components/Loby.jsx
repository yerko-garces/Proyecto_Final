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
    maxWidth: '800px', // Ancho máximo para limitar el espacio entre las columnas
    margin: '0 auto', // Centra el contenedor
  };

  const column = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1', // Toma igual cantidad de espacio en la columna
  };

  const space = {
    height: '20px', // Altura del espacio entre las Card
    width: '100%', // Opcional: ajusta el ancho del espacio
  };

  const cardStyle = {
    marginBottom: '20px', // Espacio entre los Card
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
          <Card path="/" titulo="SELECCIÓN DE HORARIO" descripcion="Pagina en la que el alumno puede realizar la toma de ramos, es decir, seleccionar sus horarios" style={cardStyle} />
          <div style={space} />
          <Card path="/" titulo="REGLAS DE HORARIO" descripcion="Reglas para la selección de horarios" style={cardStyle} />
        </div>
        <div style={column}>
          <Card path="/horario_alumno" titulo="HORARIO DEL ALUMNO(A)" descripcion="Horario de clases actual del alumno" style={cardStyle} />
          <div style={space} />
          <Card path="/" titulo="PREGUNTAS FRECUENTES" descripcion="Preguntas frecuentes sobre la toma de ramos" style={cardStyle} />
        </div>
      </div>
    </div>
  );
}

export default Loby;
