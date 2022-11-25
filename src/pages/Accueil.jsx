import React, { useState } from "react";
import "./accueil.css";
import "../components/bubble.css";

export default function Accueil() {
  const [userPseudo, setUserPseudo] = useState();

  function handlePseudo(event) {
    setUserPseudo(event.target.value);
  };

  return (
    <div>
      <div className="accueil">
        <div className="txt">
          <div>
            <div className="alienDiscours">
              <div className="bubble">
                <p>
                  C’est ton histoire {userPseudo}, terrien, qui lors de tes vacances,
                  tu tombe en panne d’hypervitesse. Malheureusement, tes quatre
                  cristaux alimentant le saut spatial ont grillés. Heureusement
                  pour toi, tu te retrouve dans une constellation ou les
                  planètes regorgent de ces cristaux manquants.
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
              onChange={handlePseudo}
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
