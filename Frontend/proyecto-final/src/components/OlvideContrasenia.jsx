import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

function OlvideContrasenia() {
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

  return (
    <div style={estiloFondo}>
      <Link to="/" style={linkStyle}>
        <AiOutlineHome size={20} style={iconStyle} /> 
        VOLVER AL <br /> INICIO
      </Link>
      <div className="container card" style={containerStyle}>
        <div className="card-body">
          <h5 className="card-title">
            ENVIENOS SU RUT Y NOSOTROS LE DAREMOS UNA <br />
            NUEVA CONTRASEÑA A TRAVÉS DE SU  <br />
            CORREO INSTITUCIONAL.
          </h5>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3" style={inputContainerStyle}>
          <input type="text" className="form-control" placeholder="Ingrese su RUT" />
        </div>
        <div className="mb-3" style={inputContainerStyle}>
          <input type="text" className="form-control" placeholder="Ingrese nuevamente su RUT" />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary mb-2 me-2">ENVIAR RUT</button>
        </div>
      </div>
    </div>
  );
}

export default OlvideContrasenia;
