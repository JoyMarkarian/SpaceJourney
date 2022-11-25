import React, { useState } from 'react';
import './finalPage.css';

function FinalPage({ userPseudo }) {
  const [displayRocket, setDisplayRocket] = useState(false);
  return (
    <div>
      {displayRocket && <div className='rocket-bg'>
        <iframe src="https://giphy.com/embed/sGBMzyeEzKpySD74qv" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>}
      <div className="finalpage-cockpit">
        <div className='final-msg'>
          <p>Finally the rocket is fixed <strong>{userPseudo}</strong> can return to Earth!</p>
          <button onClick={() => setDisplayRocket(!displayRocket)} type='button'>Back to Earth</button>
        </div>
        <div className='dontTouch-msg'>
          <p>Oh! A mysterious button appeared after the repair. Wana press it?</p>
          <button type='button'>don't touch</button>
        </div>
      </div>
    </div>

  );
}

export default FinalPage;
