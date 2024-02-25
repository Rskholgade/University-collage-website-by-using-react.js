/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import "./VideoPlayer.css"
import video from "../../assets/pexels-venya-pak-7971025 (2160p).mp4"

const Video = ({playState,setPlaystate}) => {

const Player= useRef(null);

 const closeplayer =(e)=>{
  if(e.target===Player.current){
    setPlaystate(false);
  }
 }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={Player} 
    onClick={closeplayer} >
      <video src={video} autoPlay muted controls ></video>
    </div>
  )
}

export default Video
