import React, { useEffect, useState } from 'react';

export default function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalo); // limpieza del efecto
  }, []);

  return <h2>Hora actual: {hora}</h2>;
}
