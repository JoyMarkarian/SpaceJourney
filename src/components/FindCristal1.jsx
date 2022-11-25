/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useEffect } from 'react';
import './findCristal1.css';

export default function FindCristal1({ checkQuest, setPlanet1isIsClickable, setPath }) {
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet1isIsClickable(true);
  };

  return (
    <div className="findCristalBg">
      <button onClick={() => setPath('/')} aria-label="crystal-1" className="button-backToMap" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-1" className="myCristal-toFind" type="button" />
      {displayCrystal && (
      <div className='myCrystal-container'>
        <div className='myCristal' />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type='button'>Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button">Back to map</button>
      </div>
      )}
    </div>
  );
}
