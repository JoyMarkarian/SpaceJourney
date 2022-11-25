import React, { useState, useEffect } from 'react';

import ColorCard from './compoSimon/colorCard';
import timeout from './utilsSimon/util';
import './compoSimon/colorCard.css';
import './simon.css';

export default function Simon({ setPath }) {
  //code de https://www.youtube.com/watch?v=EGRAKMNkyFg
  const [isOn, setIsOn] = useState(false);

  const colorList = ["green", "red", "yellow", "blue"];
  const initPLay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay:false,
    userColors: [],
  };

  const [play, setPlay] = useState(initPLay);
  const [flashColor, setFlashColor] = useState("");

  function startHandle () {
    setIsOn(true)
  }

  useEffect(()=> {
    if(isOn){
      setPlay({...initPLay, isDisplay:true})
    }else{
      setPlay(initPLay)
    }
  }, [isOn])

  useEffect(()=>{
    if(isOn && play.isDisplay){
      let newColor = colorList[Math.floor(Math.random()*4)];
      const copyColors = [...play.colors];
      copyColors.push(newColor)
      setPlay({...play, colors:copyColors})
    }
  }, [isOn, play.isDisplay])

  useEffect(()=>{
    if(isOn && play.isDisplay && play.colors.length){
      displayColors()
    }
  }, [isOn, play.isDisplay, play.colors.length])

  async function displayColors(){
    await timeout(1000);
    for(let i = 0; i< play.colors.length; i++){
      setFlashColor(play.colors[i]);
      await timeout(1000);
      setFlashColor("");
      await timeout(1000);

      if(i === play.colors.length - 1){
        const copyColors = [...play.colors];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
      }
    }
  }

  async function cardClickHandle(color){
    if(!play.isDisplay && play.userPlay){
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);
      
      
      

      if(color === lastColor){
        if(copyUserColors.length){
          setPlay({...play, userColors:copyUserColors})
        }else{
          await timeout(1000);
          setPlay({...play, isDisplay:true, userPlay:false, score:play.colors.length, userColors:[]})
        }
        
      }else{
        await timeout(1000);
        setPlay({...initPLay, score:play.colors.length})
      }
      await timeout(1000);
      setFlashColor("");
    }
  }

  function closeHandle(){
    setIsOn(false)
  }

  return (
    <div className='bg-black'>
      <h3 className='textSimon'>Follow instructions and take your time !</h3>
      <div className='cardWrapper'>
        {
          colorList && colorList.map((v, i) => (<ColorCard onClick={()=>{cardClickHandle(v)}} flash={flashColor === v} color={v} />) )
        }
      </div>
      {isOn && !play.isDisplay && !play.userPlay && play.score && (
        <div className='lost'>
          <div>Finalscore : {play.score - 1}</div>
          <button onClick={closeHandle}>Close</button>
        </div>
      )}
      {!isOn && !play.score && (
        <button onClick={startHandle} className='startButton'>Start</button>
      )}
      { isOn && (play.isDisplay || play.userPlay) && (
        <div className='score'>{play.score}</div>
      )}
      {play.score === 1 ? <div>
        <h3>Beginner's luck, move on</h3>
        <button onClick={() => setPath('/Snake')}>Next</button>
        </div> : ""}
    </div>
  )
}

