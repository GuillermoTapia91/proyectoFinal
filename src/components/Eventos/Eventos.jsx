import { useState } from "react"
export default function Eventos () {
  
  const handleClick = (e) => {
    console.log("Hola")
  }
  return(
    <div>
      <button onClick={handleClick}>clickeame</button>
    </div>
  )
}