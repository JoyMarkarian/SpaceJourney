/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './findCristal3.css';

export default function FindCristal3({ checkQuest, planet3isIsClickable, setPlanet3isIsClickable, setPath }) {
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet3isIsClickable(true);
  };

  return (
    <div className="findCristalBg3">
      <button onClick={() => setPath('/')} aria-label="crystal-3" className="button-backToMap" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-1" className="myCristal-toFind3" type="button" />
      {displayCrystal && (
      <div className='myCrystal-container3'>
        <div className="myCristal3" />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type='button'>Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done3">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button">Back to map</button>
      </div>
      )}
    </div>
  );
}
