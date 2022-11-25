/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './findCristal2.css';

export default function FindCristal2({ checkQuest, setPlanet2isIsClickable, setPath }) {
  const [displayRules, setDisplayRules] = useState(true);
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet2isIsClickable(true);
  };

  const dNoneRules = () => {
    setDisplayRules(false);
  };

  return (
    <div className="findCristalBg2">
      <button onClick={() => setPath('/map')} aria-label="crystal-2" className="button-backToMap btn-cristal-2" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-1" className="myCristal-toFind2" type="button" />
      {displayRules && (
      <div className='myCrystal-container2'>
        <div className='' />
        <h2>The home world of the ancients, once home to a society descended from the gods. Destroyed by the Wraiths, it is now a vast field of ruins. This planet is known for its abundance of violet crystal. Will you find it?</h2>
        <button onClick={dNoneRules} type='button' className="btn-cristal-2">Search it</button>
      </div>
      )}
      {displayCrystal && (
      <div className='myCrystal-container2'>
        <div className="myCristal2 " />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type='button' className="btn-cristal-2">Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done2">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button" className="btn-cristal-2">Back to map</button>
      </div>
      )}
    </div>
  );
}
