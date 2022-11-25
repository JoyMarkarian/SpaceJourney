/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './findCristal4.css';

export default function FindCristal4({ checkQuest, setPlanet4isIsClickable, setPath }) {
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet4isIsClickable(true);
  };

  return (
    <div className="findCristalBg4">
      <button onClick={() => setPath('/')} aria-label="back to map" className="button-backToMap btn-cristal-4" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-4" className="myCristal-toFind4" type="button" />
      {displayCrystal && (
      <div className="myCrystal-container4">
        <div className="myCristal4" />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type="button" className="btn-cristal-4">Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done4">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button" className="btn-cristal-4">Back to map</button>
      </div>
      )}
    </div>
  );
}
