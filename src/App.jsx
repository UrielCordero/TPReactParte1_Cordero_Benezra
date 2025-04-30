import './App.css'
import { useState } from 'react'
import Formulario from './Formulario/'
import Listado from './Listado'

function App() {
  const [citas, setCitas] = useState([])

  return (
    <>
      <h1>ADMINISTRADOR DE CITAS</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario setCitas={setCitas} />
          </div>
          <div className="one-half column">
            <Listado citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
