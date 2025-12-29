// src/components/ServicioLocal/ServicioLocal.tsx
import { useNavigate } from 'react-router-dom';

/**
 * Pantalla para crear un nuevo trabajo de servicio en el local.
 * Por ahora, es solo un placeholder.
 */
function ServicioLocal() {
  const navigate = useNavigate();

  const handleVolverClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Nuevo Trabajo – Servicio en Local</h1>
      <p>Esta es la pantalla para registrar un nuevo trabajo en el local.</p>
      <p>(Aquí iría el formulario correspondiente)</p>
      <br />
      <button onClick={handleVolverClick}>Volver al Menú</button>
    </div>
  );
}

export default ServicioLocal;
