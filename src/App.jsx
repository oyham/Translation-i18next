import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <p>Pequeña aplicación dónde hacemos uso de la librería <strong>i18next</strong> para el cámbio de idíoma de fórma dinámica.</p>
      <p>Ir al repositorio en <a href="" target="_blank"><em>GitHub</em></a> para seguír el paso a paso</p>
    </div>
  )
}

export default App
