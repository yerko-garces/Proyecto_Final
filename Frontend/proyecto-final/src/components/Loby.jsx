import React from 'react';
import { IoExitOutline } from 'react-icons/io5'; // Importa el ícono de salida desde react-icons
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

  return (
    <div style={estiloFondo}>
      <Link Link to="/" style={salirEstilo}>
        SALIR DE LA <br/> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <h1>HOLA</h1>
      <Card path="/" titulo="Volver al menu" descripcion="Espacio para volver al menu" />
    </div>
  );
}

export default Loby;
