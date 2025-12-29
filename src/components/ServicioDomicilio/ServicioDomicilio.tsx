import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Pantalla para crear un nuevo trabajo de servicio a domicilio.
 */
function ServicioDomicilio() {
  // -----------------------------------------------------------------------
  // SECCIÓN DE NAVEGACIÓN
  // -----------------------------------------------------------------------
  const navigate = useNavigate();

  // -----------------------------------------------------------------------
  // SECCIÓN DE ESTADO (VARIABLES)
  // -----------------------------------------------------------------------
  const [nombreCliente, setNombreCliente] = useState<string>("");
  const [contacto, setContacto] = useState<string>("");
  const [descripcionDispositivo, setDescripcionDispositivo] = useState<string>("");
  const [motivoServicio, setMotivoServicio] = useState<string>("");
  const [otroMotivo, setOtroMotivo] = useState<string>("");

  // -----------------------------------------------------------------------
  // SECCIÓN DE LÓGICA (EVENTOS)
  // -----------------------------------------------------------------------
  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();

    const motivoFinal = motivoServicio === "Otro" ? otroMotivo : motivoServicio;

    const datosDelTrabajo = {
      Cliente: nombreCliente,
      Contacto: contacto,
      Dispositivo: descripcionDispositivo,
      Motivo: motivoFinal
    };

    console.log("=== GUARDANDO NUEVO TRABAJO ===");
    console.log(datosDelTrabajo);
    alert("Trabajo guardado. Revisa la consola (F12).");
  };

  const handleVolver = () => {
    console.log("Navegando al menú principal...");
    navigate('/');
  };

  // -----------------------------------------------------------------------
  // SECCIÓN DE INTERFAZ (HTML / VISTA)
  // -----------------------------------------------------------------------
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px' }}>
      <h2>Nuevo Trabajo a Domicilio</h2>
      
      <form onSubmit={handleGuardar}>
        
        {/* GRUPO: DATOS DEL CLIENTE */}
        <fieldset style={{ marginBottom: '15px', padding: '10px' }}>
          <legend>Datos del Cliente</legend>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Nombre del Cliente:</label>
            <input 
              type="text"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Contacto:</label>
            <input 
              type="text"
              value={contacto}
              onChange={(e) => setContacto(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
              placeholder="Teléfono o Email"
            />
          </div>
        </fieldset>

        {/* GRUPO: DATOS DEL DISPOSITIVO */}
        <fieldset style={{ marginBottom: '15px', padding: '10px' }}>
          <legend>Datos del Dispositivo</legend>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Descripción:</label>
            <input 
              type="text"
              value={descripcionDispositivo}
              onChange={(e) => setDescripcionDispositivo(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
              placeholder="Ej: PC de Escritorio HP"
            />
          </div>
        </fieldset>

        {/* GRUPO: MOTIVO DEL SERVICIO */}
        <fieldset style={{ marginBottom: '15px', padding: '10px' }}>
          <legend>Motivo del Servicio</legend>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Seleccione el problema:</label>
            <select 
              value={motivoServicio}
              onChange={(e) => setMotivoServicio(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            >
              <option value="">-- Seleccione una opción --</option>
              <option value="Problemas al iniciar el sistema">Problemas al iniciar el sistema</option>
              <option value="Lentitud o fallos de funcionamiento">Lentitud o fallos de funcionamiento</option>
              <option value="Error de impresión / comunicación">Error de impresión / comunicación</option>
              <option value="Instalación o configuración">Instalación o configuración</option>
              <option value="Mantenimiento preventivo">Mantenimiento preventivo</option>
              <option value="Revisión general">Revisión general</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {motivoServicio === "Otro" && (
            <div style={{ marginBottom: '10px', backgroundColor: '#f9f9f9', padding: '10px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: 'blue' }}>
                Especifique el otro motivo:
              </label>
              <input 
                type="text"
                value={otroMotivo}
                onChange={(e) => setOtroMotivo(e.target.value)}
                style={{ width: '100%', padding: '5px' }}
              />
            </div>
          )}
        </fieldset>

        {/* BOTONERA */}
        <div style={{ marginTop: '20px' }}>
          <button 
            type="submit" 
            style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
          >
            Guardar trabajo
          </button>
          
          <button 
            type="button"
            onClick={handleVolver}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Volver al menú
          </button>
        </div>

      </form>
    </div>
  );
}

export default ServicioDomicilio;
