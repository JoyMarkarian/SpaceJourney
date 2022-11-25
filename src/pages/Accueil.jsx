import React, { useState } from "react";
import "./accueil.css";
import "../components/bubble.css";

export default function Accueil({ setPath, setUserPseudo, userPseudo }) {
  const [displayUser, setDisplayUser] = useState(false);
  const [nextText1, setNextText1] = useState(true);
  const [nextText2, setNextText2] = useState(false);
  const [nextText3, setNextText3] = useState(false);
  const MAX_LENGTH = 15;

  const dText1 = () => {
    setNextText1(false);
    setNextText2(true);
  };

  const dText2 = () => {
    setNextText2(false);
    setNextText3(true);
  };

  function handlePseudo(event) {
    if (event.target.value.length <= MAX_LENGTH) {
      setUserPseudo(event.target.value);
    }
  }

  return (
    <div>
      <div className="accueil">
        <div className="txt">
          <div>
            {displayUser === false && (
              <div className="choose-pseudo">
                <input
                  className="inputPseudo"
                  type="text"
                  value={userPseudo}
                  placeholder="Choose your username"
                  onChange={handlePseudo}
                />
                <button
                  onClick={userPseudo ? () => setDisplayUser(true) : undefined}
                  className="home-validateButton"
                  type="button"
                >
                  Validate
                </button>
              </div>
            )}
            {displayUser === true && (
              <div>
                <div>
                  <div className="alienDiscours">
                    <div className="bubble">
                      {nextText1 === true && (
                        <>
                          <p className="text-bubble">
                            Nooooo <strong>{userPseudo}</strong> ! Your vacation
                            is ruined, you ran out of hyperspeed! your four
                            crystals powering the space jump have burned out.
                          </p>
                          <button onClick={dText1} type="button">
                            next
                          </button>
                        </>
                      )}
                      {nextText2 === true && (
                        <>
                          <p className="text-bubble">
                            Fortunately for you, you find yourself in a
                            constellation where the planets are teeming with
                            these missing crystals.
                          </p>
                          <button onClick={dText2} type="button">
                            next
                          </button>
                        </>
                      )}
                      {nextText3 === true && (
                        <p className="text-bubble">Your turn !!</p>
                      )}
                      <div className="alienDiscours" />
                    </div>
                  </div>
                  <img
                    className="pictureAstro"
                    src="./src/assets/astroboy.png"
                    alt="astro"
                  />
                </div>
              </div>
            )}
            {displayUser && userPseudo && (
              <div>
                <button
                  onClick={() => setPath("/map")}
                  className="home-validateButton button-goToMap"
                  type="button"
                >
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
