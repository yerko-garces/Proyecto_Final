import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

function Seleccion() {
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

  const containerStyle = {
    width: '80%',
    maxWidth: '1200px',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
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

  const formularioStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const formularioButtonStyle = {
    margin: '10px',
  };

  const horarioStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={estiloFondo}>
      <Link to="/loby" style={{...formularioButtonStyle, position: 'absolute', top: '10px', left: '10px', textDecoration: 'none', color: 'black', fontSize: '16px', display: 'flex', alignItems: 'center'}}>
        <AiOutlineHome size={20} style={{marginRight: '5px'}} /> 
        VOLVER AL <br /> INICIO
      </Link>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br /> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <h1 style={{fontSize: '70px', marginBottom: '20px', textAlign: 'center'}}>TOMA DE HORARIO</h1>
      <div className="container card" style={containerStyle}>
        <div style={formularioStyle}>
          <label htmlFor="asignatura">Asignatura:</label>
          <input type="text" id="asignatura" className="form-control" />
          <label htmlFor="horario">Horario:</label>
          <input type="text" id="horario" className="form-control" />
          <div style={formularioButtonStyle}>
            <button className="btn btn-primary" style={formularioButtonStyle}>Visualizar</button>
            <button className="btn btn-success" style={formularioButtonStyle}>Aceptar</button>
          </div>
        </div>
        <div className="container card" >
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
    </div>
  );
}

export default Seleccion;
