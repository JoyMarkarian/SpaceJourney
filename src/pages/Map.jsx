/* eslint-disable react/prop-types */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types

function Map({
  planet1isIsClickable,
  planet2isIsClickable,
  planet3isIsClickable,
  planet4isIsClickable,
  setPath,
}) {
  const [displayModal, setDisplayModal] = useState(false);
  const handleDisplayModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="map-bg">
      {displayModal ? (
        <button
          type="button"
          onClick={() => setDisplayModal(false)}
          className="map-not-possible"
        >
          Cette planète n'est pas accessible pour le moment. Retrouve les
          cristaux précédents afin de pouvoir poursuivre ta quête.
        </button>
      ) : (
        ""
      )}
      <button
        aria-label="planet-1"
        type="button"
        className="map-planet map-planet-1"
        onClick={() => setPath("planet-1")}
      />
      <button
        aria-label="planet-2"
        type="button"
        className={`map-planet-2 ${
          planet1isIsClickable === true ? "map-planet" : "notClickable-planet"
        }`}
        onClick={
          planet1isIsClickable ? () => setPath("planet-2") : handleDisplayModal
        }
      />
      <button
        aria-label="planet-3"
        type="button"
        className={`map-planet-3 ${
          planet2isIsClickable === true ? "map-planet" : "notClickable-planet"
        }`}
        onClick={
          planet2isIsClickable ? () => setPath("planet-3") : handleDisplayModal
        }
      />
      <button
        aria-label="planet-4"
        type="button"
        className={`map-planet-4 ${
          planet3isIsClickable === true ? "map-planet" : "notClickable-planet"
        }`}
        onClick={
          planet3isIsClickable ? () => setPath("planet-4") : handleDisplayModal
        }
      />
      {planet4isIsClickable && (
        <button
          onClick={() => setPath("final-page")}
          className="button-backToHome"
          type="button"
        >
          Back to Earth !
        </button>
      )}
    </div>
  );
}

export default Map;
