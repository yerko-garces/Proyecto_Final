import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function WelcomeView() {
  const navigate = useNavigate();
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleOlvideContrasenia = () => {
    navigate('/olvideContrasenia');
  };

  const handleLoby = () => {
    localStorage.setItem('rut', rut);
    navigate('/loby');
  };

  const handleLobyAdmin = () => {
    localStorage.setItem('rut', rut);
    navigate('/loby_admin');
  };

  const handleCloseModal = () => setShowModal(false);

  const handleIngresar = async () => {
    try {
      if (!rut || !email) {
        setShowModal(true);
        setErrorMsg('Por favor, ingrese su RUT y email.');
        return;
      }

      if (rut.toUpperCase() === 'ADMIN' && email.toUpperCase() === 'ADMIN') {
        handleLobyAdmin();
        return;
      }

      const response = await fetch(`http://localhost:8090/verificarRutEmail?rut=${rut}&email=${email}`);
      const data = await response.text();

      if (data === 'true') {
        handleLoby();
      } else {
        setShowModal(true);
        setErrorMsg('No se pudo acceder, verifique sus datos.');
      }
    } catch (error) {
      console.error('Hubo un error al realizar la solicitud:', error);
    }
  };

  return (
    <div>
      <div
        style={{
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
        }}
      >
        <div
          className="container card"
          style={{
            backgroundColor: 'white',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '20px',
            width: '80%',
            maxWidth: '600px',
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              BIENVENIDOS AL PORTAL <br />
              DE INCRIPCION DE ASIGNATURAS <br />
              PARA LOS ESTUDIANTES DE INGENIERIA USACH
            </h5>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="mb-3" style={{ marginBottom: '10px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su RUT"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginBottom: '10px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary mb-2 me-2" onClick={handleIngresar}>
              Ingresar
            </button>
            <button className="btn btn-secondary mb-2" onClick={handleOlvideContrasenia}>
              Olvidé mi contraseña
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMsg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WelcomeView;
