import React from 'react'
import './backEarth.css'

export default function BackEarth({ displayRocket, setDisplayRocket }) {

  return (
    <div className="tuVeuxVraimentRentrer">
      <button className="tuPeuxRegarderMais" onClick={() => setDisplayRocket(!displayRocket)}>BACK EARTH</button>
    </div>
  )
}