import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

function MallaAlumno() {
  const [codigoCarrera, setCodigoCarrera] = useState(null);
  const [malla, setMalla] = useState([]);

  useEffect(() => {
    // Obtener el rut almacenado en el localStorage
    const rutGuardado = localStorage.getItem('rut');

    // Realizar la llamada a la API para obtener el código de carrera
    const obtenerCodigoCarrera = async () => {
      try {
        const response = await fetch(`http://localhost:8090/obtenerCodigoCarrera?rut=${rutGuardado}`);

        if (response.ok) {
          const data = await response.json();
          setCodigoCarrera(data);
        } else {
          throw new Error('Error al obtener el código de carrera');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Llamar a la función para obtener el código de carrera
    obtenerCodigoCarrera();
  }, []);

  useEffect(() => {
    // Obtener el nivel y nombre de asignatura por código de carrera
    const obtenerNivelYNombre = async () => {
      try {
        const response = await fetch(`http://localhost:8090/nivelYNombre?codigoCarrera=${codigoCarrera}`);

        if (response.ok) {
          const data = await response.json();
          // Organizar los datos en una estructura adecuada para la malla
          const mallaEstructurada = {};
          data.forEach(([nivel, nombreAsignatura]) => {
            if (!mallaEstructurada[nivel]) {
              mallaEstructurada[nivel] = [];
            }
            mallaEstructurada[nivel].push(nombreAsignatura);
          });
          setMalla(mallaEstructurada);
        } else {
          throw new Error('Error al obtener la malla');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Verificar que haya un código de carrera válido antes de llamar a la API
    if (codigoCarrera) {
      obtenerNivelYNombre();
    }
  }, [codigoCarrera]);

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
      <h1 style={tituloStyle}>MALLA DE LA CARRERA</h1>

      {Object.keys(malla).length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                {Object.keys(malla).map((nivel) => (
                  <th key={nivel}>Nivel {nivel}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(...Object.values(malla).map((nivel) => nivel.length)) }, (_, i) => i).map((index) => (
                <tr key={index}>
                  {Object.values(malla).map((asignaturas, nivel) => (
                    <td key={nivel}>{asignaturas[index] || '-'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MallaAlumno;
