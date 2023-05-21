import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';




function Registro({ accion, usuarios }) {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleButtonClick = () => {
    if (usuarios.includes(usuario)) {
      accion(true);
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <div>
        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>
      <button onClick={handleButtonClick}>Registrarse</button>
    </div>
  );
}

export default Registro;


