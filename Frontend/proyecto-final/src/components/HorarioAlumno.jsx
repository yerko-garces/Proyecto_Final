import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

function HorarioAlumno() {
  const [horarios, setHorarios] = useState([]);
  
  useEffect(() => {
    const rutEstudiante = localStorage.getItem('rut');
    fetch(`http://localhost:8090/obtenerHorariosPorRut?rut=${rutEstudiante}`)
      .then(response => response.json())
      .then(data => {
        setHorarios(data); 
      })
      .catch(error => {
        console.error('Error obteniendo los horarios:', error);
      });
  }, []);

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
        <IoExitOutline size={30} style={iconStyle} />
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
            {horarios.map((horario, index) => (
              <tr key={index}>
                <td>{horario.bloque}</td>
                <td>{horario.dia === 'Lunes' ? horario.nombreRamo : ''}</td>
                <td>{horario.dia === 'Martes' ? horario.nombreRamo : ''}</td>
                <td>{horario.dia === 'Miércoles' ? horario.nombreRamo : ''}</td>
                <td>{horario.dia === 'Jueves' ? horario.nombreRamo : ''}</td>
                <td>{horario.dia === 'Viernes' ? horario.nombreRamo : ''}</td>
                <td>{horario.dia === 'Sábado' ? horario.nombreRamo : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HorarioAlumno;
