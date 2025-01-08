// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [colorFondo, setColorFondo] = useState("#e3e3e3");
  const [colorTexto, setColorTexto] = useState("#333333");
  const [nombre, setNombre] = useState("Juan Pérez");
  const [foto, setFoto] = useState("https://via.placeholder.com/50");
  const [campoAdicional, setCampoAdicional] = useState("Software Engineer");
  const [mostrarBack, setMostrarBack] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setMostrarBack(checked);
    } else {
      if (name === "colorFondo") setColorFondo(value);
      else if (name === "colorTexto") setColorTexto(value);
      else if (name === "nombre") setNombre(value);
      else if (name === "foto") setFoto(value);
      else if (name === "campoAdicional") setCampoAdicional(value);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Generador de Name Tag</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>Color de Fondo: </label>
        <input
          type="color"
          name="colorFondo"
          value={colorFondo}
          onChange={handleInputChange}
        />

        <label>Color del Texto: </label>
        <input
          type="color"
          name="colorTexto"
          value={colorTexto}
          onChange={handleInputChange}
        />

        <label>Nombre: </label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
        />

        <label>URL de la Foto: </label>
        <input
          type="text"
          name="foto"
          value={foto}
          onChange={handleInputChange}
        />

        <label>Mostrar Parte Trasera: </label>
        <input
          type="checkbox"
          name="mostrarBack"
          checked={mostrarBack}
          onChange={handleInputChange}
        />

        <label>Campo Adicional: </label>
        <input
          type="text"
          name="campoAdicional"
          value={campoAdicional}
          onChange={handleInputChange}
        />
      </div>

      {/* Vista Previa */}
      <div
        style={{
          width: '300px',
          height: '150px',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: colorFondo,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <img
          src={foto}
          alt="Foto"
          style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <h2 style={{ color: colorTexto }}>{nombre}</h2>
        <p style={{ color: colorTexto }}>{campoAdicional}</p>

        {mostrarBack && (
          <div
            style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
            }}
          >
            <table>
              <tr>
                <th>Campo Adicional</th>
                <td>{campoAdicional}</td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

