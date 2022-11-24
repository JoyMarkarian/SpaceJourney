import React, { useState } from 'react';
import FindCristal1 from './components/FindCristal1';
import Map from './pages/Map';
import './pages/map.css';
import './App.css';

function App() {
  const [path, setPath] = useState('/');
  const [isClickable, setClickable] = useState([
    { planet: false },
    { planet: false },
    { planet: false },
  ]);
  return (
    <div>
      {path === '/' && <Map isClickable={isClickable} setPath={setPath} />}
      {path === 'planet-1' && <FindCristal1 setPath={setPath} />}
    </div>

  );
}

export default App;
