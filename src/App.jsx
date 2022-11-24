import React, { useState } from 'react';
import FindCristal from './components/FindCristal';
import Map from './pages/Map';
import './pages/map.css';

function App() {
  const [isClickable, setClickable] = useState([
    { planet: false },
    { planet: false },
    { planet: false },
  ]);
  return (
    <div>
      <Map isClickable={isClickable} />
      <FindCristal />
    </div>
  );
}

export default App;
