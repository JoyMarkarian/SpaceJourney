import React, { useState } from 'react';
import Map from './pages/Map';
import './pages/map.css';

function App() {
  const [isClickable, setClickable] = useState(false);
  return (
    <div>
      <Map isClickable={isClickable} setClickable={setClickable} />
    </div>
  );
}

export default App;
