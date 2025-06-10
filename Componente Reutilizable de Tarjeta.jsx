function Tarjeta({ titulo, descripcion }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '5px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default function ListaTarjetas() {
  const datos = [
    { titulo: 'React', descripcion: 'Librería para interfaces' },
    { titulo: 'Node.js', descripcion: 'Entorno de ejecución para JS' },
  ];

  return (
    <div>
      {datos.map((item, i) => (
        <Tarjeta key={i} {...item} />
      ))}
    </div>
  );
}
