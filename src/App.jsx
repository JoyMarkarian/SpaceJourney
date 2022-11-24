import React, { useState } from 'react';
import FindCristal1 from './components/FindCristal1';
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
      {/* <FindCristal1 /> */}
    </div>
  );
}

export default App;
