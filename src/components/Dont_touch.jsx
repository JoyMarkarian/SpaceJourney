import React from 'react'
import './dont_touch.css'

export default function Dont_touch({ setPath }) {

  return (
    <div className="tuVeuxVraimentCliquer">
      <button className="nonNeRegardePas" onClick={() => setPath('/Simon')}>DON'T TOUCH</button>
    </div>
  )
}