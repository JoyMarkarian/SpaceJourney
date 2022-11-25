import React, { useState } from 'react';
import './areYou.css';

export default function AreYou() {

    const [choice, setChoice] = useState(false);

    function handleChoice () {
        setChoice(!choice);
    }

  return (
    <div className='backgroundGlitch'>
        <h3 className="glitch" data-text="Are you still here ?">Are you still here ?</h3>
        <div>
            <button>Yes</button>
            <button onClick={handleChoice}>No</button>
            {choice ? <div>
                <audio autoPlay src="src/assets/sound/screamScarry.mp3"></audio>
            </div>: ""}
        </div>
    </div>
  )
}
