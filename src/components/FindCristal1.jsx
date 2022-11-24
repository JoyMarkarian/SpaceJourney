import React from 'react';
import './findCristal1.css';

export default function FindCristal1({ setPath }) {
  return (
    <div className="findCristalBg">
      <button aria-label="crystal-1" className="myCristal" type="button" />
      <button onClick={() => setPath('/')} aria-label="crystal-1" className="button-backToMap" type="button">Back to map</button>
    </div>
  );
};
