import React, { useState } from 'react';
import CatSpace from './components/CatSpace';
import Dont_touch from './components/Dont_touch';
import Simon from './components/Simon';
import Snake from './components/Snake';
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
      <Simon />
      <Snake />
      <CatSpace />
    </div>
  );
}

export default App;
