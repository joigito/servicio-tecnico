// src/components/ServicioDomicilio/ServicioDomicilio.tsx
import { useNavigate } from 'react-router-dom';

/**
 * Pantalla para crear un nuevo trabajo de servicio a domicilio.
 * Por ahora, es solo un placeholder.
 */
function ServicioDomicilio() {
  const navigate = useNavigate();

  const handleVolverClick = () => {
    // La ruta '/' nos lleva de vuelta a la pantalla de Inicio.
    navigate('/');
  };

  return (
    <div>
      <h1>Nuevo Trabajo – Servicio a Domicilio</h1>
      <p>Esta es la pantalla para registrar un nuevo trabajo a domicilio.</p>
      <p>(Aquí iría el formulario correspondiente)</p>
      <br />
      <button onClick={handleVolverClick}>Volver al Menú</button>
    </div>
  );
}

export default ServicioDomicilio;
