import React from 'react';
import './App.css'
import Button from './componets/Button';
import QuoteBox from './componets/QuoteBox'
import quotes from  "./quotes.json"
import { useState } from 'react';
function App() {
  
  const [index,setIndex]=useState(Math.floor(Math.random()*quotes.length))
  const change=()=>{
    setIndex(Math.floor(Math.random()*quotes.length))
  }
 
  const colors = [
    '#845AEC',
    '#5AC3EC',
    '#A3EC5A',
    '#EC5AB6',
    '#EC5A5C',
    '#C2EC5A',
    '#5A68EC',
    '#EC5AC0',
    '#5A6DEC',
    '#5AB9EC',
  ]

  const color = Math.floor(Math.random()*colors.length);
  document.body.style = `background:${colors[color]}`

   
  return (
    <div className="App" style={{color:colors[color]}}>
    <QuoteBox aleatorio={`${index}`}  /> 
    <Button cambio={change}  color={`${colors[color]}`} />
    </div>
  )
}

export default App
