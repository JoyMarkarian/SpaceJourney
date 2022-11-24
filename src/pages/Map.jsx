/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Map({ planet1isIsClickable, setPath }) {
  const [displayModal, setDisplayModal] = useState(false);
  console.log(`map : ${planet1isIsClickable}`);

  // useEffect(() => {
  //   if (planet1isIsClickable === true) {
  //     setPath('planet-2');
  //   }
  // }, []);
  // const handleClick = (path) => {
  //   setPath(path);
  // };

  const handleDisplayModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="map-bg">
      {displayModal ? <button type="button" onClick={() => setDisplayModal(false)} className="map-not-possible">no possible</button> : ''}
      <button aria-label="planet-1" type="button" className="map-planet map-planet-1" onClick={() => setPath('planet-1')} />
      <button aria-label="planet-2" type="button" className={`map-planet-2 ${planet1isIsClickable === true ? 'map-planet' : 'notClickable-planet'}`} onClick={planet1isIsClickable ? () => setPath('planet-2') : handleDisplayModal} />
      {/* <button aria-label="planet-3" type="button" className={`map-planet-3 ${isClickable[1].planet ? 'map-planet' : 'notClickable-planet'}`} onClick={isClickable[1].planet ? handleClick : handleDisplayModal} />
      <button aria-label="planet-4" type="button" className={`map-planet-4 ${isClickable[2].planet ? 'map-planet' : 'notClickable-planet'}`} onClick={isClickable[2].planet ? handleClick : handleDisplayModal} /> */}
    </div>
  );
}

export default Map;
