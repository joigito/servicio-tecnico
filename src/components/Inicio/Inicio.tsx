// src/components/Inicio/Inicio.tsx
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

/**
 * Pantalla de Inicio.
 * 
 * Este es el primer 'Form' que ve el usuario. Muestra las opciones principales.
 * Piensa en este componente como un formulario autocontenido.
 */
function Inicio() {
  // El hook 'useNavigate' nos da una función para navegar programáticamente.
  // Es el equivalente a obtener una referencia para poder llamar a Form2.Show().
  const navigate = useNavigate();

  // --- MANEJADORES DE EVENTOS (Como los Sub 'Button_Click' en VB6) ---

  const handleNuevoDomicilioClick = () => {
    // Navega a la ruta '/nuevo-domicilio', que App.tsx mapea al componente ServicioDomicilio.
    navigate('/nuevo-domicilio');
  };

  const handleNuevoLocalClick = () => {
    navigate('/nuevo-local');
  };

  const handleTrabajosExistentesClick = () => {
    navigate('/trabajos-existentes');
  };

  // --- RENDERIZADO DEL COMPONENTE (Como la parte visual del .frm) ---
  // JSX es una sintaxis que mezcla HTML y JavaScript para definir la interfaz.
  return (
    <div className="inicio-container">
      <h1>Menú Principal</h1>
      <div className="botones-container">
        {/* 
          En React, 'onClick' es el evento equivalente al 'Button_Click' de VB6.
          Le asignamos la función que hemos definido arriba.
        */}
        <button className="boton-grande" onClick={handleNuevoDomicilioClick}>
          Nuevo trabajo – Servicio a domicilio
        </button>

        <button className="boton-grande" onClick={handleNuevoLocalClick}>
          Nuevo trabajo – Servicio en local
        </button>

        <button className="boton-grande" onClick={handleTrabajosExistentesClick}>
          Trabajos existentes
        </button>
      </div>
    </div>
  );
}

export default Inicio;
