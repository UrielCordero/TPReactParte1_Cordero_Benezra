import Cita from '../Cita/';
import './Listado.css';

const Listado = ({ citas, setCitas }) => {
  const eliminarCita = (indexEliminar) => {
    const eleccion=confirm('Querés eliminar los datos?');
    if(eleccion){
      citas.splice(indexEliminar, 1);
      setCitas([...citas]);
    }
  };
  
  return (
    <>
      <h2>ADMINISTRA TUS CITAS</h2>
      <div className="lista-citas">
        {citas.map((cita, index) => (
          <Cita key={index} cita={cita} eliminarCita={() => eliminarCita(index)} />
        ))}
      </div>
    </>
  );
};

export default Listado;
