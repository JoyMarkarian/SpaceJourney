import React, { useState } from 'react';
import './findCristal3.css';

export default function FindCristal3({ checkQuest, setPlanet3isIsClickable, setPath }) {
  const [displayRules, setDisplayRules] = useState(true);
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet3isIsClickable(true);
  };

  const dNoneRules = () => {
    setDisplayRules(false);
  };

  return (
    <div className="findCristalBg3">
      <button onClick={() => setPath('/map')} aria-label="back to map" className="button-backToMap btn-cristal-3" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-3" className="myCristal-toFind3" type="button" />
      {displayRules && (
      <div className="myCrystal-container3">
        <h2 className="planet-rules">New world of the Asgard, it is rich in neutronium, key element of the Asgard technology. It is on this planet that the Asgard are rebuilding their world, hidden from view. We should be able to <span>find the 3rd crystal on this planet</span>.</h2>
        <div className="search-crystal-container">
          <button onClick={dNoneRules} type="button" className="btn-cristal-3">Search it</button>
          <img className="crystal-imgSize" src="./src/assets/crystal-3.png" alt="" />
        </div>
      </div>
      )}
      {displayCrystal && (
      <div className="myCrystal-container3">
        <div className="myCristal3" />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type="button" className="btn-cristal-3">Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done3">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button" className="btn-cristal-3">Back to map</button>
      </div>
      )}
    </div>
  );
}
