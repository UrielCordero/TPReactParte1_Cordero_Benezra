const Cita = ({ cita }) => {
    return (
        <div className="cita">
            <p><strong>Mascota:</strong> {cita.Mascota}</p>
            <p><strong>Dueño:</strong> {cita.Dueno}</p>
            <p><strong>Fecha:</strong> {cita.Fecha}</p>
            <p><strong>Hora:</strong> {cita.Hora}</p>
            <p><strong>Síntomas:</strong> {cita.Sintomas}</p>
        </div>
    );
};

export default Cita;