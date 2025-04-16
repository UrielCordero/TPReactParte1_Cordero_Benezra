import Cita from '../Cita/';
import './Listado.css';
const Listado=()=>{
    return(
        <>
        <Cita cita={{ Mascota: "Nina", Dueno: "Juan", Fecha: "2021-08-05", Hora: "08:20", Sintomas: "Le duele la pierna"}} />
        <Cita cita={{ Mascota: "Nina", Dueno: "Juan", Fecha: "2023-08-05", Hora: "09:24", Sintomas: "Duerme mucho"}} />
        <Cita cita={{ Mascota: "Floki", Dueno: "Ari", Fecha: "2023-08-05", Hora: "16:15", Sintomas: "No está comiendo"}} />
        </>
    )
}

export default Listado;