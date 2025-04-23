import './App.css'
import Formulario from './Formulario/'
import Listado from './Listado'

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE CITAS</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario/>
          </div>
          <div class="one-half column">
            <Listado/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
