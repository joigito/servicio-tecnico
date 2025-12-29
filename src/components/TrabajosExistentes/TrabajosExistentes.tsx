// src/components/TrabajosExistentes/TrabajosExistentes.tsx
import { useNavigate } from 'react-router-dom';

/**
 * Pantalla para ver y gestionar trabajos existentes.
 * Por ahora, es solo un placeholder.
 */
function TrabajosExistentes() {
  const navigate = useNavigate();

  const handleVolverClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Trabajos Existentes</h1>
      <p>Esta es la pantalla para buscar y gestionar trabajos ya registrados.</p>
      <p>(Aquí iría una tabla o lista de trabajos)</p>
      <br />
      <button onClick={handleVolverClick}>Volver al Menú</button>
    </div>
  );
}

export default TrabajosExistentes;
