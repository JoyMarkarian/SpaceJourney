import React, { useState } from "react";
import "./accueil.css";
import ValidateButton from "../components/ValidateButton";

export default function Accueil() {
  const [userPseudo, setUserPseudo] = useState();
  const [changePseudo, setChangePseudo] = useState("");

  return (
    <div className="accueil">
      <div className="txt">
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
  );
}
