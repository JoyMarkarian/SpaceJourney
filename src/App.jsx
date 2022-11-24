import React, { useState } from 'react';
import FindCristal1 from './components/FindCristal1';
import FindCristal2 from './components/FindCristal2';
import FindCristal3 from './components/FindCristal3';
import Map from './pages/Map';
import './pages/map.css';
import './App.css';

function App() {
  const [path, setPath] = useState('/');
  const [planet1isIsClickable, setPlanet1isIsClickable] = useState(false);
  const [planet2isIsClickable, setPlanet2isIsClickable] = useState(false);
  const [planet3isIsClickable, setPlanet3isIsClickable] = useState(false);
  // console.log(`path : ${path}`);
  console.log(`planet1 : ${planet1isIsClickable}`);
  console.log(`planet2 : ${planet2isIsClickable}`);
  console.log(`planet3 : ${planet3isIsClickable}`);

  const checkQuest = () => {
    setPath('/');
  };

  return (
    <div>
      {path === '/' && <Map planet1isIsClickable={planet1isIsClickable} planet2isIsClickable={planet2isIsClickable} setPath={setPath} />}
      {path === 'planet-1' && <FindCristal1 checkQuest={checkQuest} planet1isIsClickable={planet1isIsClickable} setPlanet1isIsClickable={setPlanet1isIsClickable} setPath={setPath} />}
      
      {path === 'planet-2' && <FindCristal2 checkQuest={checkQuest} setPath={setPath} setPlanet2isIsClickable={setPlanet2isIsClickable} planet2isIsClickable={planet2isIsClickable} />}

      {path === 'planet-3' && <FindCristal3 checkQuest={checkQuest} setPath={setPath} setPlanet3isIsClickable={setPlanet3isIsClickable} planet3isIsClickable={planet3isIsClickable} />}
      {/* {path === 'planet-4' && <FindCristal4 setPath={setPath} setClickable={setClickable} isClickable={isClickable} />} */}
    </div>
  );
}

export default App;
