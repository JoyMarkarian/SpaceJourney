/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Map({ isClickable }) {
  const [displayModal, setDisplayModal] = useState(false);
  const handleClick = () => {
    console.log('bonjour');
  };

  const handleDisplayModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="map-bg">
      {displayModal ? <button type="button" onClick={() => setDisplayModal(false)} className="map-not-possible">no possible</button> : ''}
      <button type="button" className="map-planet map-planet-1" onClick={handleClick}>planete 1</button>
      <button type="button" className={`map-planet-2 ${isClickable[0].planet ? 'map-planet' : 'notClickable-planet'}`} onClick={isClickable[0].planet ? handleClick : handleDisplayModal}>Planet 2</button>
      <button type="button" className={`map-planet-3 ${isClickable[1].planet ? 'map-planet' : 'notClickable-planet'}`} onClick={isClickable[1].planet ? handleClick : handleDisplayModal}>planete 3</button>
      <button type="button" className={`map-planet-4 ${isClickable[2].planet ? 'map-planet' : 'notClickable-planet'}`} onClick={isClickable[2].planet ? handleClick : handleDisplayModal}>planete 4</button>
    </div>
  );
}

export default Map;
