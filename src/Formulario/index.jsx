import "./Formulario.css"
const Formulario= ()=>{
    return(
        <form id="formulario" >
            <h2>CREAR MI CITA</h2>
            <label>Nombre mascota:   
                <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""/>
            </label>

            <label>Nombre dueño:
                <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""/>
            </label>
            
            <label>Fecha:
                <input type="date" name="fecha" class="u-full-width" value=""/>
            </label>
            
            <label>Hora:
                <input type="time" name="hora" class="u-full-width" value=""/>
            </label>
    
            <label>Sintomas:
                <textarea name="sintomas" class="u-full-width"></textarea>
            </label>
    
            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}

export default Formulario;