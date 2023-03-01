import { useState } from 'react'
import Form from './components/Form'
import './components/index.css';

function App() {

// Archivo principal que renderizara otros componentes hijos

  return (
    <div>
      <h1 className='title'>Cuestionario Perfiles</h1>
      <Form/>
    </div>
  )
}

export default App
