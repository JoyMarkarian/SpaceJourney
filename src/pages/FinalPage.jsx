import React from 'react';
import './finalPage.css';

function FinalPage({ userPseudo }) {
  return (
    <div>
      <div className="finalpage-cockpit">
        <div className='final-msg'>
          <p>Finally the rocket is fixed <strong>{userPseudo}</strong> can return to Earth!</p>
          <button type='button'>Back to Earth</button>
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
