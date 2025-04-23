import "./Cita.css"
const Cita = ({ cita }) => {
    return (
        <div class="cita">
            <p>Mascota: <span>{cita.Mascota}</span></p>
            <p>Dueño: <span>{cita.Dueno}</span></p>
            <p>Fecha: <span>{cita.Fecha}</span></p>
            <p>Hora: <span>{cita.Hora}</span></p>
            <p>Síntomas: <span>{cita.Sintomas}</span></p>
            <button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );
};

export default Cita;