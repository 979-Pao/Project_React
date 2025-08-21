import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const nombre = "Paola";
  const apellidos = "Montaño";

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, lineHeight: 1.5 }}>
      <h1>¨{Paola}</h1>
      <h2>{Montaño}</h2>

      <h3>Mis aficiones</h3>
      <ul>
        <li>Leer</li>
        <li>Programar</li>
        <li>Viajar</li>
      </ul>

      <img
        src="https://via.placeholder.com/240x240.png?text=Paola"
        alt="Paola"
        width="240"
        height="240"
        style={{ borderRadius: 12, display: "block", marginTop: 12 }}
      />

      <p style={{ marginTop: 16 }}>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          Ir a Google
        </a>
      </p>
    </main>
  );
}
export default App;
