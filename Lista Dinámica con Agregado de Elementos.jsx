import React, { useState } from 'react';

export default function ListaNombres() {
  const [nombres, setNombres] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState('');

  const agregarNombre = () => {
    setNombres([...nombres, nuevoNombre]);
    setNuevoNombre('');
  };

  return (
    <div>
      <input
        type="text"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
      />
      <button onClick={agregarNombre}>Agregar</button>
      <ul>
        {nombres.map((nombre, i) => (
          <li key={i}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}
