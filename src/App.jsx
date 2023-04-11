import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cuerpo from "./components/SeccionPortada"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className="App">
          <Cuerpo/>
      </div>
    </div>
  )
}

export default App

