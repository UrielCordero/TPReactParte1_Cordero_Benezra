import "./Formulario.css";

const Formulario = ({ setCitas }) => {
  const enviarDatos = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const eleccion=confirm('Querés mandar los datos?');
    if(eleccion){
      const cita = {
      Mascota: formulario.mascota.value,
      Dueno: formulario.propietario.value,
      Fecha: formulario.fecha.value,
      Hora: formulario.hora.value,
      Sintomas: formulario.sintomas.value,
      };
      setCitas(function(citas) {
        const nuevasCitas = citas.slice();
        nuevasCitas.push(cita);
        return nuevasCitas;
      });
    }
    formulario.reset();
  };

  return (
    <form id="formulario" onSubmit={enviarDatos}>
      <h2>CREAR MI CITA</h2>
      <label>
        Nombre mascota:
        <input type="text" name="mascota" className="u-full-width" required />
      </label>

      <label>
        Nombre dueño:
        <input type="text" name="propietario" className="u-full-width" required />
      </label>

      <label>
        Fecha:
        <input type="date" name="fecha" className="u-full-width" required />
      </label>

      <label>
        Hora:
        <input type="time" name="hora" className="u-full-width" required />
      </label>

      <label>
        Sintomas:
        <textarea name="sintomas" className="u-full-width" required />
      </label>

      <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
    </form>
  );
};

export default Formulario;
