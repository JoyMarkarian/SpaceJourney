/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Map({ planet1isIsClickable, setPath, planet2isIsClickable }) {
  const [displayModal, setDisplayModal] = useState(false);

  const handleDisplayModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="map-bg">
      {displayModal ? <button type="button" onClick={() => setDisplayModal(false)} className="map-not-possible">no possible</button> : ''}
      <button aria-label="planet-1" type="button" className="map-planet map-planet-1" onClick={() => setPath('planet-1')} />
      <button aria-label="planet-2" type="button" className={`map-planet-2 ${planet1isIsClickable === true ? 'map-planet' : 'notClickable-planet'}`} onClick={planet1isIsClickable ? () => setPath('planet-2') : handleDisplayModal} />
      <button aria-label="planet-3" type="button" className={`map-planet-3 ${planet2isIsClickable === true ? 'map-planet' : 'notClickable-planet'}`} onClick={planet2isIsClickable ? () => setPath('planet-3') : handleDisplayModal} />
      {/* <button aria-label="planet-4" type="button" className={`map-planet-4 ${isClickable[2].planet ? 'map-planet' : 'notClickable-planet'}`} onClick={isClickable[2].planet ? handleClick : handleDisplayModal} /> */}
    </div>
  );
}

export default Map;
