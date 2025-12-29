// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos las 'pantallas' o 'formularios' de nuestra aplicación.
// Cada uno es un componente de React que hemos separado en su propia carpeta
// para mantener el orden, similar a tener archivos .frm separados.
import Inicio from './components/Inicio/Inicio';
import ServicioDomicilio from './components/ServicioDomicilio/ServicioDomicilio';
import ServicioLocal from './components/ServicioLocal/ServicioLocal';
import TrabajosExistentes from './components/TrabajosExistentes/TrabajosExistentes';

/**
 * Componente principal de la aplicación.
 * 
 * Su única función es configurar el 'router'. El router decide qué 'pantalla'
 * (componente) mostrar según la URL en el navegador.
 * 
 * - BrowserRouter: Es el componente que envuelve toda la lógica de navegación.
 * - Routes: Contiene todas las posibles rutas.
 * - Route: Define una ruta individual.
 *   - path: La URL que activa esta ruta (ej: '/', '/nuevo-domicilio').
 *   - element: El componente de React que se debe mostrar para esa ruta.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para la pantalla de inicio */}
        <Route path="/" element={<Inicio />} />

        {/* Rutas para cada una de las opciones del menú */}
        <Route path="/nuevo-domicilio" element={<ServicioDomicilio />} />
        <Route path="/nuevo-local" element={<ServicioLocal />} />
        <Route path="/trabajos-existentes" element={<TrabajosExistentes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
