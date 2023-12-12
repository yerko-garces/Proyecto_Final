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

  const tituloStyle = {
    fontSize: '50px',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif', 
    color: '#333', 
    fontWeight: 'bold', 
    textTransform: 'uppercase', 

  };

  return (
    <div style={estiloFondo}>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br /> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <h1 style={tituloStyle}>BIENVENIDO ADMIN </h1>
      <div style={cardsContainer}>
        <div style={column}>
          <Card path="/loby_admin" titulo="AGREGAR CLASES" descripcion="Seccion donde se podran agregar clases junto a los profesores." style={cardStyle} />
      
          <Card path="/contador" titulo="Cantidad de alumnos por curso" descripcion="Seccion donde podran ver la cantidad de alumnos por curso" style={cardStyle} />
          
        </div>
      </div>
    </div>
  );
}

export default Loby;
