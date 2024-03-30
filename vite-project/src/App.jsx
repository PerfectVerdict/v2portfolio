import React from 'react';
import './App.css'
import npc1Image from './assets/npc1.jpg'
export default function App() {
  return(
    
  
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <p>official portfolio of Ethan Metz.</p>
      <p>full stack npc.</p>
    </div>

    <figure><img src={npc1Image} alt="Npc meme with loading spinner on forehead." /></figure>
  </div>
  )
}

