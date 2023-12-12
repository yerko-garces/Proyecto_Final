import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

function HorarioAlumno() {
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


  const linkStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '5px',
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

  const horarioContainerStyle = {
    width: '80%',
    maxWidth: '2000px', 
    marginTop: '20px',
  };

  return (
    <div style={estiloFondo}>
      <Link to="/loby" style={linkStyle}>
        <AiOutlineHome size={20} style={iconStyle} /> 
        VOLVER AL <br /> INICIO
      </Link>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br /> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <h1 style={tituloStyle}>HORARIO</h1>
      <div className="container card" style={horarioContainerStyle}>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Bloque</th>
              <th scope="col">Lunes</th>
              <th scope="col">Martes</th>
              <th scope="col">Miércoles</th>
              <th scope="col">Jueves</th>
              <th scope="col">Viernes</th>
              <th scope="col">Sábado</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bloque) => (
              <tr key={bloque}>
                <td>{bloque}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HorarioAlumno;
