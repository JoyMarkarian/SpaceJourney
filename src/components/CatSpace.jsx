import React from 'react'

export default function CatSpace({ setPath }) {
  return (
    <div>
        <h3>It's break time, enjoy it...</h3>
        <video controls>
            <source src="src/assets/videoCat/catSpace.mp4" type="video/mp4" />
        </video>
        <button onClick={() => setPath('/SuperQuizz')}>Next</button>
    </div>
  )
}