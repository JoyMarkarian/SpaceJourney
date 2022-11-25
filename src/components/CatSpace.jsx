import React from 'react';
import './catSpace.css'

export default function CatSpace({ setPath }) {
  return (
    <div className='backgroundCatSpace'>
      <div>
      <h3>It's break time, enjoy it...</h3>
        <video controls>
            <source src="src/assets/videoCat/catSpace.mp4" type="video/mp4" />
        </video>
      </div>
      <button className='buttonCatSpace' onClick={() => setPath('/SuperQuizz')}>Next</button>
    </div>
  )
}