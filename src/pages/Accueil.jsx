import React, { useState } from "react";
import "./accueil.css";
import "../components/bubble.css";

export default function Accueil() {
  const [userPseudo, setUserPseudo] = useState();
  const [changePseudo, setChangePseudo] = useState("");

  return (
    <div>
      <div className="accueil">
        <div className="txt">
          <div>
            <div className="alienDiscours">
              <div className="bubble">
                <p>
                  C’est l’histoire de Julien, terrien, qui lors de ses vacances,
                  tombe en panne d’hypervitesse. Malheureusement, ses quatre
                  cristaux alimentant le saut spatial ont grillés. Heureusement
                  pour lui, il s’est retrouvé dans une constellation ou les
                  planètes regorgent des cristaux manquants.
                </p>
                <div className="alienDiscours"></div>
              </div>
            </div>
            <img
              className="pictureAstro"
              src="./src/assets/astroboy.png"
              alt="astro"
            />
            <input
              className="inputPseudo"
              type="text"
              value={userPseudo}
              placeholder="Choose your username"
              onChange={changePseudo}
            />
            <div>
              <button className="validatePseudo" type="button">
                Validate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
