import React, { useState } from 'react';
import { IoExitOutline } from 'react-icons/io5';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Loby() {
  const [diaSeleccionado, setDiaSeleccionado] = useState('');
  const [mostrarListaDias, setMostrarListaDias] = useState(false);
  const [bloqueSeleccionado, setBloqueSeleccionado] = useState('');
  const [mostrarListaBloques, setMostrarListaBloques] = useState(false);

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

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '20px',
    width: '80%',
    maxWidth: '600px',
  };

  const inputContainerStyle = {
    marginBottom: '10px',
  };

  const diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const bloquesTiempo = [
    '08:15 - 09:35',
    '09:50 - 11:10',
    '11:25 - 12:45',
    '13:45 - 15:05',
    '15:20 - 16:40',
    '16:55 - 18:15',
    '18:45 - 20:05',
    '20:05 - 21:25',
    '21:25 - 22:45',
  ];

  const handleMostrarListaDias = () => {
    setMostrarListaDias(!mostrarListaDias);
  };

  const handleSeleccionarDia = (dia) => {
    setDiaSeleccionado(dia);
    setMostrarListaDias(false);
  };

  const handleMostrarListaBloques = () => {
    setMostrarListaBloques(!mostrarListaBloques);
  };

  const handleSeleccionarBloque = (bloque) => {
    setBloqueSeleccionado(bloque);
    setMostrarListaBloques(false);
  };

  return (
    <div style={estiloFondo}>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br/> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <div className="container card" style={containerStyle}>
        <div className="card-body">
          <h5 className="card-title">
            BIENVENIDOS A LA ASIGNACION <br />
            DE ASIGNATURAS,  <br />
            PROFESORES Y DIAS.
          </h5>
        </div>
      </div>
      <div className="container mt-4">
        <h2>Llene los siguientes campos para agregar un nuevo horario:</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="carrera" className="form-label">Carrera:</label>
            <input type="text" className="form-control" id="carrera" />
          </div>
          <div className="mb-3">
            <label htmlFor="asignatura" className="form-label">Asignatura:</label>
            <input type="text" className="form-control" id="asignatura" />
          </div>
          <div className="mb-3">
            <label htmlFor="profesor" className="form-label">Profesor(a):</label>
            <input type="text" className="form-control" id="profesor" />
          </div>
          <div className="mb-3">
            <label htmlFor="dia" className="form-label">Día:</label>
            <div className="dropdown">
              <input
                type="text"
                className="form-control"
                id="dia"
                value={diaSeleccionado}
                onClick={handleMostrarListaDias}
                readOnly
              />
              {mostrarListaDias && (
                <ul className="dropdown-menu" style={{ display: 'block' }}>
                  {diasSemana.map((dia, index) => (
                    <li key={index} onClick={() => handleSeleccionarDia(dia)}>
                      <span className="dropdown-item">{dia}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="bloque" className="form-label">Bloque:</label>
            <div className="dropdown">
              <input
                type="text"
                className="form-control"
                id="bloque"
                value={bloqueSeleccionado}
                onClick={handleMostrarListaBloques}
                readOnly
              />
              {mostrarListaBloques && (
                <ul className="dropdown-menu" style={{ display: 'block' }}>
                  {bloquesTiempo.map((bloque, index) => (
                    <li key={index} onClick={() => handleSeleccionarBloque(bloque)}>
                      <span className="dropdown-item">{bloque}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Asignar</button>
        </form>
      </div>
    </div>
  );
}

export default Loby;
