import React, { useState } from 'react';
import Dont_touch from './components/Dont_touch';
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
      <Dont_touch />
    </div>
  );
}

export default App;
