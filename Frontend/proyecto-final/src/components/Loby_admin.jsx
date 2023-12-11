import React, { useState, useEffect } from 'react';
import { IoExitOutline } from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LobyAdmin = () => {
  const [carrera, setCarrera] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [profesor, setProfesor] = useState('');
  const [diaSeleccionado, setDiaSeleccionado] = useState('');
  const [mostrarListaDias, setMostrarListaDias] = useState(false);
  const [bloqueSeleccionado, setBloqueSeleccionado] = useState('');
  const [mostrarListaBloques, setMostrarListaBloques] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [carreras, setCarreras] = useState([]);
  const [asignaturas, setAsignaturas] = useState([]);

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

  const obtenerCodigoCarrera = async (nombreCarrera) => {
    try {
      const response = await fetch(`http://localhost:8090/encontrarCodigoCarrera?nombreCarrera=${nombreCarrera}`);
      if (response.ok) {
        const codigoCarrera = await response.json();
        return codigoCarrera;
      } else {
        throw new Error('No se pudo obtener el código de carrera.');
      }
    } catch (error) {
      console.error('Error al obtener el código de carrera:', error);
      return null;
    }
  };

  const obtenerAsignaturasPorCodigoCarrera = async (codigoCarrera) => {
    try {
      const response = await fetch(`http://localhost:8090/obtenerAsigPorCod?codigoCarrera=${codigoCarrera}`);
      if (response.ok) {
        const data = await response.json();
        setAsignaturas(data);
      } else {
        throw new Error('No se pudieron obtener las asignaturas.');
      }
    } catch (error) {
      console.error('Error al obtener las asignaturas:', error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:8090/nombresCarreras')
      .then((response) => response.json())
      .then((data) => {
        setCarreras(data);
      })
      .catch((error) => {
        console.error('Error al obtener nombres de carreras:', error);
      });
  }, []);

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

  const handleCarreraChange = async (selectedCarrera) => {
    setCarrera(selectedCarrera);
    if (selectedCarrera) {
      const codigoCarrera = await obtenerCodigoCarrera(selectedCarrera);
      if (codigoCarrera !== null) {
        await obtenerAsignaturasPorCodigoCarrera(codigoCarrera);
      } else {
        console.error('No se pudo obtener el código de carrera.');
      }
    } else {
      setAsignaturas([]); 
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (
      carrera.trim() === '' ||
      asignatura.trim() === '' ||
      profesor.trim() === '' ||
      diaSeleccionado === '' ||
      bloqueSeleccionado === ''
    ) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    const codigoCarrera = await obtenerCodigoCarrera(carrera);
    if (codigoCarrera !== null) {
      const nuevoHorario = {
        codigoCarrera: codigoCarrera,
        nombreCarrera: carrera,
        nombreAsignatura: asignatura,
        nombreProfesor: profesor,
        dia: diaSeleccionado,
        bloque: bloqueSeleccionado,
      };

      fetch('http://localhost:8090/guardarHorarioSelec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoHorario),
      })
        .then((response) => {
          if (response.ok) {
            setMensaje('Se ha agregado correctamente');
          } else {
            setMensaje('Ha ocurrido un error. Verifique los datos');
          }
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
          setMensaje('Ha ocurrido un error. Verifique los datos');
        });
    } else {
      setMensaje('No se pudo obtener el código de carrera. Verifique los datos.');
    }
  };

  return (
    <div style={estiloFondo}>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br /> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <div className="container card" style={containerStyle}>
        <div className="card-body">
          <h5 className="card-title">
            BIENVENIDOS A LA ASIGNACION <br />
            DE ASIGNATURAS, <br />
            PROFESORES Y DIAS.
          </h5>
        </div>
      </div>
      <div className="container mt-4">
        <h2>Llene los siguientes campos para agregar un nuevo horario:</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
          <label htmlFor="carrera" className="form-label">
              Carrera:
            </label>
            <select
              className="form-select"
              value={carrera}
              onChange={(e) => handleCarreraChange(e.target.value)}
            >
              <option value="">Seleccione una carrera</option>
              {carreras.map((carrera, index) => (
                <option key={index} value={carrera}>
                  {carrera}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="asignatura" className="form-label">
              Asignatura:
            </label>
            <select
              className="form-select"
              value={asignatura}
              onChange={(e) => setAsignatura(e.target.value)}
            >
              <option value="">Seleccione una asignatura</option>
              {asignaturas.map((asignatura, index) => (
                <option key={index} value={asignatura}>
                  {asignatura}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="profesor" className="form-label">
              Profesor(a):
            </label>
            <input
              type="text"
              className="form-control"
              id="profesor"
              onChange={(e) => setProfesor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dia" className="form-label">
              Día:
            </label>
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
            <label htmlFor="bloque" className="form-label">
              Bloque:
            </label>
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
          <button type="submit" className="btn btn-primary">
            Asignar
          </button>
        </form>
      </div>
      {mensaje && (
        <div className="alert alert-dismissible alert-success" role="alert">
          <p>{mensaje}</p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setMensaje(null)}
          ></button>
        </div>
      )}
    </div>
  );
};

export default LobyAdmin;
