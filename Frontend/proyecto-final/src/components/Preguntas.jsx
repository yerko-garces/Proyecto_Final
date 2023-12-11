import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

function Preguntas() {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const faqStyle = {
    width: '80%',
    maxWidth: '600px',
    marginTop: '20px',
  };

  const preguntas = [
    { pregunta: 'Pregunta 1', respuesta: 'Respuesta a la Pregunta 1.' },
    { pregunta: 'Pregunta 2', respuesta: 'Respuesta a la Pregunta 2.' },
    // Agrega más preguntas y respuestas aquí
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={estiloFondo}>
      <Link to="/loby" style={{ position: 'absolute', top: '10px', left: '10px', textDecoration: 'none', color: 'black', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
        <AiOutlineHome size={20} style={{ marginRight: '5px' }} /> VOLVER AL <br /> INICIO
      </Link>
      <Link to="/" style={salirEstilo}>
        SALIR DE LA <br /> APLICACION
        <IoExitOutline size={30} style={iconoEstilo} />
      </Link>
      <h1 style={{ fontSize: '70px', marginBottom: '20px', textAlign: 'center' }}>PREGUNTAS FRECUENTES</h1>
      <div className="container card" style={faqStyle}>
        {preguntas.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <button
              style={{ width: '100%', textAlign: 'left', padding: '10px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '5px', outline: 'none' }}
              onClick={() => toggleAccordion(index)}
            >
              {item.pregunta}
            </button>
            {activeIndex === index && (
              <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preguntas;
