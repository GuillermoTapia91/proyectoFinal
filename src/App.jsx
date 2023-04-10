import { useState } from 'react'

import SectionFiltros from './components/SectionFiltros'
import SectionBuscarPorDistritos from './components/SectionBuscarPorDistritos'
import Header from './components/header'
import Cuerpo from "./components/SeccionPortada"
import Eventos from './components/Eventos/Eventos'
import './App.css'



export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      {/* <div className="container-video">
      <h1>Guillermo</h1>
        <video autoPlay loop muted   >
          <source src={videoFondo} type="video/mp4" />
        </video>
      </div> */}
      <Cuerpo/>
      <SectionBuscarPorDistritos/>
      <SectionFiltros/>
      
    </div>
  )
}


