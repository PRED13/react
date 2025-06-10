import React, { useState } from 'react';

export default function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState('');

  const agregarTarea = () => {
    setTareas([...tareas, { texto: input, completada: false }]);
    setInput('');
  };

  const alternarCompletado = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((t, i) => (
          <li
            key={i}
            style={{ textDecoration: t.completada ? 'line-through' : 'none' }}
            onClick={() => alternarCompletado(i)}
          >
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
