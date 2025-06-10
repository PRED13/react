import React, { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const enviar = () => {
    if (nombre.trim() === '') {
      setError('El nombre no puede estar vacío');
    } else {
      setError('');
      alert(`Hola, ${nombre}`);
    }
  };

  return (
    <div>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button onClick={enviar}>Enviar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
