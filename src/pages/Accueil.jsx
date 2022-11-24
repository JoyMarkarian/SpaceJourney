import React, { useState } from "react";
import "./accueil.css";
import "../components/bubble.css";
import ValidateButton from "../components/ValidateButton";

export default function Accueil() {
  const [userPseudo, setUserPseudo] = useState();
  const [changePseudo, setChangePseudo] = useState("");

  return (
    <div className="pageAccueil">
      <div className="accueil">
        <div className="txt">
          <div className="alienDiscours">
            <div className="bubble">
              <p>Coucou</p>
              <div className="alienDiscours"></div>
            </div>
          </div>
          <img className="pictureAstro" src="./src/assets/astroboy.png" alt="astro" />
          <div>
            <input
              className="inputPseudo"
              type="text"
              value={userPseudo}
              placeholder="Choose your username"
              onChange={changePseudo}
            />
            <div>
              <ValidateButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
