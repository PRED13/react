import React, { useState } from 'react';

export default function Tema() {
  const [oscuro, setOscuro] = useState(false);

  const estilo = {
    backgroundColor: oscuro ? '#222' : '#eee',
    color: oscuro ? '#eee' : '#222',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={estilo}>
      <h2>{oscuro ? 'Modo Oscuro' : 'Modo Claro'}</h2>
      <button onClick={() => setOscuro(!oscuro)}>Cambiar Tema</button>
    </div>
  );
}
