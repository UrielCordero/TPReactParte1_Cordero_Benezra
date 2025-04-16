//import { useState } from 'react'
import './App.css'
import Formulario from './Formulario/'
import Listado from './Listado'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <h1>Crear mi cita:</h1>
      <Formulario/>
      <Listado/>
    </>
  )
}

export default App;
