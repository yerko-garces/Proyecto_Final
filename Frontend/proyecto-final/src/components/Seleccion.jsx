import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

function Seleccion() {
  const [codigoCarrera, setCodigoCarrera] = useState(null);
  const [asignaturas, setAsignaturas] = useState([]);
  const [selectedAsignatura, setSelectedAsignatura] = useState('');
  const [horarios, setHorarios] = useState([]);
  const [selectedHorario, setSelectedHorario] = useState('');
  const [horarioEnBlanco, setHorarioEnBlanco] = useState([
    ['08:15 - 09:35', '', '', '', '', '', ''],
    ['09:50 - 11:10', '', '', '', '', '', ''],
    ['11:25 - 12:45', '', '', '', '', '', ''],
    ['13:45 - 15:05', '', '', '', '', '', ''],
    ['15:20 - 16:40', '', '', '', '', '', ''],
    ['16:55 - 18:15', '', '', '', '', '', ''],
    ['18:45 - 20:05', '', '', '', '', '', ''],
    ['20:05 - 21:25', '', '', '', '', '', ''],
    ['21:25 - 22:45', '', '', '', '', '', ''],
  ]);

  useEffect(() => {
    const obtenerCodigoCarrera = async () => {
      try {
        const rut = localStorage.getItem('rut');
        const response = await fetch(`http://localhost:8090/obtenerCodigoCarrera?rut=${rut}`);
        
        if (response.ok) {
          const data = await response.json();
          setCodigoCarrera(data);
          obtenerNombresAsignaturas(data);
        } else {
          throw new Error('Error al obtener el código de carrera');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    obtenerCodigoCarrera();
  }, []);

  const obtenerNombresAsignaturas = async (codigoCarrera) => {
    try {
      const response = await fetch(`http://localhost:8090/obtenerAsigPorCod?codigoCarrera=${codigoCarrera}`);
      
      if (response.ok) {
        const data = await response.json();
        setAsignaturas(data);
      } else {
        throw new Error('Error al obtener los nombres de asignaturas');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const obtenerHorarios = async () => {
    try {
      const response = await fetch(`http://localhost:8090/buscarPorAsignatura?nombreAsignatura=${selectedAsignatura}`);
      
      if (response.ok) {
        const data = await response.json();
        setHorarios(data);
      } else {
        throw new Error('Error al obtener los horarios');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (selectedAsignatura !== '') {
      obtenerHorarios();
    }
  }, [selectedAsignatura]);

  const enviarHorario = async () => {
    const rutEstudiante = localStorage.getItem('rut');
    const horarioParaEnviar = [];

    for (let i = 0; i < horarioEnBlanco[0].length; i++) {
      const dia = {
        dia: obtenerDia(i + 1),
      };

      for (let j = 0; j < horarioEnBlanco.length; j++) {
        const modulo = obtenerModulo(horarioEnBlanco[j][i]);
        dia[`modulo${j + 1}`] = modulo;
      }

      dia.rutEstudiante = rutEstudiante;
      horarioParaEnviar.push(dia);
    }

    try {
      const response = await fetch('http://localhost:8090/crearHorario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(horarioParaEnviar),
      });

      if (response.ok) {
        // Procesar la respuesta si es necesario
      } else {
        throw new Error('Error al guardar el horario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const obtenerDia = (indice) => {
    switch (indice) {
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miércoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      case 6:
        return 'Sábado';
      default:
        return '';
    }
  };

  const obtenerModulo = (valor) => {
    if (valor === '') {
      return 'NULL';
    }
    return valor;
  };

  const actualizarHorarioEnBlanco = () => {
    const nuevoHorarioEnBlanco = [...horarioEnBlanco];
    const [_, dia, bloque] = selectedHorario.split(', ');
  
    const diaIndex = obtenerIndiceDia(dia);
    const bloqueIndex = obtenerIndiceBloque(bloque);
  
    if (diaIndex !== -1 && bloqueIndex !== -1) {
      nuevoHorarioEnBlanco[bloqueIndex][diaIndex] = selectedAsignatura;
      setHorarioEnBlanco(nuevoHorarioEnBlanco);
    }
  };

  const obtenerIndiceDia = (dia) => {
    switch (dia) {
      case 'Lunes':
        return 1;
      case 'Martes':
        return 2;
      case 'Miércoles':
        return 3;
      case 'Jueves':
        return 4;
      case 'Viernes':
        return 5;
      case 'Sábado':
        return 6;
      default:
        return -1;
    }
  };

  const obtenerIndiceBloque = (bloque) => {
    switch (bloque) {
      case '08:15 - 09:35':
        return 0;
      case '09:50 - 11:10':
        return 1;
      case '11:25 - 12:45':
        return 2;
      case '13:45 - 15:05':
        return 3;
      case '15:20 - 16:40':
        return 4;
      case '16:55 - 18:15':
        return 5;
      case '18:45 - 20:05':
        return 6;
      case '20:05 - 21:25':
        return 7;
      case '21:25 - 22:45':
        return 8;
      default:
        return -1;
    }
  };

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

  return (
    <div style={estiloFondo}>
      <Link
        to="/loby"
        style={{
          ...formularioButtonStyle,
          position: 'absolute',
          top: '10px',
          left: '10px',
          textDecoration: 'none',
          color: 'black',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AiOutlineHome size={20} style={{ marginRight: '5px' }} />
        VOLVER AL <br /> INICIO
      </Link>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br /> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <h1 style={{ fontSize: '70px', marginBottom: '20px', textAlign: 'center' }}>TOMA DE HORARIO</h1>
      <div className="container card" style={containerStyle}>
        <div style={formularioStyle}>
          <label htmlFor="asignatura">Asignatura:</label>
          <select
            id="asignatura"
            className="form-control"
            value={selectedAsignatura}
            onChange={(e) => setSelectedAsignatura(e.target.value)}
          >
            <option value="">Selecciona una asignatura</option>
            {asignaturas.map((asignatura, index) => (
              <option key={index} value={asignatura}>
                {asignatura}
              </option>
            ))}
          </select>
          <label htmlFor="horario">Horario:</label>
          <select
            id="horario"
            className="form-control"
            value={selectedHorario}
            onChange={(e) => setSelectedHorario(e.target.value)}
          >
            <option value="">Selecciona un horario</option>
            {horarios.map((horario, index) => (
              <option key={index} value={`${horario[0]}, ${horario[1]}, ${horario[2]}`}>
                {`${horario[0]}, ${horario[1]}, ${horario[2]}`}
              </option>
            ))}
          </select>
          <div style={formularioButtonStyle}>
            <button
              className="btn btn-primary"
              style={formularioButtonStyle}
              onClick={actualizarHorarioEnBlanco}
            >
              Visualizar
            </button>
            <button className="btn btn-success" style={formularioButtonStyle} onClick={enviarHorario}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
      <div className="container card" style={{ ...containerStyle, marginTop: '20px' }}>
        <h3>Horario en blanco</h3>
        <table className="table table-bordered text-center">
          <thead className="table-dark">
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
            {horarioEnBlanco.map((fila, index) => (
              <tr key={index}>
                {fila.map((elemento, idx) => (
                  <td key={idx}>{elemento}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Seleccion;
