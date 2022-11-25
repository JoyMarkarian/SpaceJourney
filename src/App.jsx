import React, { useState } from 'react';

import AreYou from './components/AreYou';
import CatSpace from './components/CatSpace';
import Dont_touch from './components/Dont_touch';
import Simon from './components/Simon';
import Snake from './components/Snake';
import SuperQuizz from './components/SuperQuizz';

import Accueil from './pages/Accueil';
import FindCristal1 from './components/FindCristal1';
import FindCristal2 from './components/FindCristal2';
import FindCristal3 from './components/FindCristal3';
import FindCristal4 from './components/FindCristal4';
import FinalPage from './pages/FinalPage';

import Map from './pages/Map';
import './pages/map.css';
import './App.css';

export default function App() {
  const [path, setPath] = useState('/');
  const [userPseudo, setUserPseudo] = useState("");
  const [planet1isIsClickable, setPlanet1isIsClickable] = useState(false);
  const [planet2isIsClickable, setPlanet2isIsClickable] = useState(false);
  const [planet3isIsClickable, setPlanet3isIsClickable] = useState(false);
  const [planet4isIsClickable, setPlanet4isIsClickable] = useState(false);

  console.log(`plante 1 : ${planet1isIsClickable}`);
  console.log(`plante 2 : ${planet2isIsClickable}`);
  console.log(`plante 3 : ${planet3isIsClickable}`);
  console.log(`plante 4 : ${planet4isIsClickable}`);

  const checkQuest = () => {
    setPath('/map');
  };

  return (
    <div>
      {path === '/' && <Accueil setPath={setPath} userPseudo={userPseudo} setUserPseudo={setUserPseudo} />}
      {path === '/map' && <Map planet1isIsClickable={planet1isIsClickable} planet2isIsClickable={planet2isIsClickable} planet3isIsClickable={planet3isIsClickable} planet4isIsClickable={planet4isIsClickable} setPath={setPath} />}
      {path === 'planet-1' && <FindCristal1 checkQuest={checkQuest} planet1isIsClickable={planet1isIsClickable} setPlanet1isIsClickable={setPlanet1isIsClickable} setPath={setPath} />}

      {path === 'planet-2' && <FindCristal2 checkQuest={checkQuest} setPath={setPath} setPlanet2isIsClickable={setPlanet2isIsClickable} planet2isIsClickable={planet2isIsClickable} />}

      {path === 'planet-3' && <FindCristal3 checkQuest={checkQuest} setPath={setPath} setPlanet3isIsClickable={setPlanet3isIsClickable} planet3isIsClickable={planet3isIsClickable} />}

      {path === 'planet-4' && <FindCristal4 checkQuest={checkQuest} setPath={setPath} setPlanet4isIsClickable={setPlanet4isIsClickable} planet4isIsClickable={planet4isIsClickable} />}
      {path === '/Simon' && <Simon setPath={setPath} />}
      {path === '/Snake' && <Snake setPath={setPath} />}
      {path === '/CatSpace' && <CatSpace setPath={setPath} />}
      {path === '/SuperQuizz' && <SuperQuizz setPath={setPath} />}
      {path === '/AreYou' && <AreYou setPath={setPath} />}
      {path === 'final-page' && <FinalPage userPseudo={userPseudo} setPath={setPath} />}
    </div>
  );
}