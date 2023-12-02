import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeView() {
  const navigate = useNavigate();

  const handleOlvideContrasenia = () => {
    navigate('/olvideContrasenia'); 
  };

  const handleLoby = () => {
    navigate('/loby'); 
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

  return (
    <div style={estiloFondo}>
      <div className="container card" style={containerStyle}>
        <div className="card-body">
          <h5 className="card-title">
            BIENVENIDOS AL PORTAL <br />
            DE INCRIPCION DE ASIGNATURAS <br />
            PARA LOS ESTUDIANTES DE INGENIERIA USACH
          </h5>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3" style={inputContainerStyle}>
          <input type="text" className="form-control" placeholder="Ingrese su RUT" />
        </div>
        <div className="mb-3" style={inputContainerStyle}>
          <input type="password" className="form-control" placeholder="Ingrese su contraseña" />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary mb-2 me-2" onClick={handleLoby}>
            Ingresar
          </button>
          <button className="btn btn-secondary mb-2" onClick={handleOlvideContrasenia}>
            Olvidé mi contraseña
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeView;
