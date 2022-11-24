/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './findCristal1.css';

export default function FindCristal1({ setPath, isClickable }) {
  const [displayWellDone, setDisplayWellDone] = useState(false);
  const findCrystal = (index) => {
    setDisplayWellDone(!displayWellDone);
    isClickable[index].planet = !isClickable[index].planet;
  };
  return (
    <div className="findCristalBg">
      <button onClick={() => findCrystal(0)} aria-label="crystal-1" className="myCristal" type="button" />
      <button onClick={() => setPath('/')} aria-label="crystal-1" className="button-backToMap" type="button">Back to map</button>
      {displayWellDone && (
      <div className="well-done">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={() => setPath('/')} type="button">Back to map</button>
      </div>
      )}
    </div>
  );
};
