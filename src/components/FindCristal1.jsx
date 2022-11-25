/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./findCristal1.css";

export default function FindCristal1({ checkQuest, setPlanet1isIsClickable, setPath }) {
  const [displayRules, setDisplayRules] = useState(true);
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet1isIsClickable(true);
  };

  const dNoneRules = () => {
    setDisplayRules(false);
  };

  return (
    <div className="findCristalBg">
      <button onClick={() => setDisplayRules(!displayRules)} aria-label="crystal-1" className="myCristal-toFind" type="button" />
      <button onClick={() => setPath('/map')} aria-label="crystal-1" className="button-backToMap btn-cristal-1" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-1" className="myCristal-toFind" type="button" />
      {displayRules && (
      <div className='myCrystal-container'>
        <div className='' />
        <h2>Crait was a distant planet in the galaxy. This world was rich in minerals, including red rhodochrosite, crystals essential for the use of hyperspeed! Here we go, we must find the crystal hidden in this picture.</h2>
        <button onClick={dNoneRules} type='button' className="btn-cristal-1">Search it</button>
      </div>
      )}
      {displayCrystal && (
        <div className="myCrystal-container">
          <div className="myCristal" />
          <h2>Well done ! You find the crystal !</h2>
          <button
            onClick={dNoneCrystal}
            type="button"
            className="btn-cristal-1"
          >
            Click here
          </button>
        </div>
      )}
      {displayWellDone && (
        <div className="well-done">
          <h2>Well done ! You can access the next planet !</h2>
          <button onClick={checkQuest} type="button" className="btn-cristal-1">
            Back to map
          </button>
        </div>
      )}
    </div>
  );
}
