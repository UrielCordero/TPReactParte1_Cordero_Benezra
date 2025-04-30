import "./Cita.css";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{cita.Mascota}</span></p>
      <p>Dueño: <span>{cita.Dueno}</span></p>
      <p>Fecha: <span>{cita.Fecha}</span></p>
      <p>Hora: <span>{cita.Hora}</span></p>
      <p>Síntomas: <span>{cita.Sintomas}</span></p>
      <button className="u-full-width" onClick={eliminarCita}>Eliminar ×</button>
    </div>
  );
};

export default Cita;
