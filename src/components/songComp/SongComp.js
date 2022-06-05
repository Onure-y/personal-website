import React from "react";
import { FaPlay } from "react-icons/fa";
import "./song-comp.css";

function SongComp(props) {
  return (
    <div className="song-container">
      <p className ="song Name">{props.songName}</p>
      <div className="play-button-container">
        <FaPlay className="play-button"/>
      </div>
      <img src={props.imgPath} alt="song-1"></img>
    </div>
  );
}

export default SongComp;
