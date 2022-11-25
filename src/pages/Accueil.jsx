import React, { useState } from "react";
import "./accueil.css";
import "../components/bubble.css";

export default function Accueil({ setPath }) {
  const [userPseudo, setUserPseudo] = useState("");
  const [displayUser, setDisplayUser] = useState(false);

  function handlePseudo(event) {
    setUserPseudo(event.target.value);
  };

  return (
    <div>
      <div className="accueil">
        <div className="txt">
          <div>
            {displayUser === true && (
              <div>
                <div className="alienDiscours">
                  <div className="bubble">
                    <p className="text-bubble">
                      Noooon <strong>{userPseudo}</strong> !
                      Tes vacances sont fichus tu es tombé en panne d'hypervitesse !  Tes quatre
                      cristaux alimentant le saut spatial ont grillés. 
                    </p>
                    <p>
                      Heureusement pour toi, tu te retrouve dans une constellation ou les
                      planètes regorgent de ces cristaux manquants.
                    </p>
                    <p>
                      A toi de jouer, n'oublie pas de renseigner ton nom pour pouvoir jouer !!
                    </p>
                    <button>next</button>
                    <div className="alienDiscours" />
                  </div>
                </div>
                <img
                  className="pictureAstro"
                  src="./src/assets/astroboy.png"
                  alt="astro"
                />
              </div>
            )}
            {displayUser === false && (
              <div className="choose-pseudo">
                <input
                  className="inputPseudo"
                  type="text"
                  value={userPseudo}
                  placeholder="Choose your username"
                  onChange={handlePseudo}
                />
                <button onClick={userPseudo ? () => setDisplayUser(true) : undefined} className="home-validateButton" type="button">
                  Validate
                </button>
              </div>
            )}
            {displayUser && userPseudo && (
              <div>
                <button onClick={() => setPath('/map')} className="home-validateButton button-goToMap" type="button">
                  Let's go !
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
