import React, { useState } from 'react';
import { IoExitOutline } from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const Contador = () => {
  const [asignatura, setAsignatura] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8090/contarPorNombreAsignatura?nombreAsignatura=${asignatura}`);
      if (response.ok) {
        const cantidad = await response.json();
        setMensaje(`La cantidad de alumnos inscritos en ${asignatura} es: ${cantidad}`);
      } else {
        throw new Error('No se pudo obtener la cantidad de alumnos.');
      }
    } catch (error) {
      console.error('Error al obtener la cantidad de alumnos:', error);
      setMensaje('Error al obtener la cantidad de alumnos');
    }
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#ADD8E6', minHeight: '100vh', paddingTop: '20px' }}>
      <div className="row">
        <div className="col-12 text-center">
          <Link to="/homeAdmin" style={{ ...linkStyle, float: 'left' }}>
            <AiOutlineHome size={20} style={{ marginRight: '5px' }} />
            VOLVER AL INICIO
          </Link>
          <Link to="/" style={{ ...linkStyle, float: 'right' }}>
            SALIR DE LA APLICACION
            <IoExitOutline size={30} style={{ marginLeft: '5px' }} />
          </Link>
        </div>
      </div>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="col-md-6">
          <div className="card p-4">
            <h5 className="card-title text-center mb-4">Cantidad de Alumnos por Asignatura</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="asignatura" className="form-label">Asignatura:</label>
                <input
                  type="text"
                  className="form-control"
                  id="asignatura"
                  placeholder="Ingrese el nombre de la asignatura"
                  value={asignatura}
                  onChange={(e) => setAsignatura(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Aceptar</button>
            </form>
            {mensaje && (
              <div className="alert alert-success mt-3" role="alert">
                {mensaje}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contador;
