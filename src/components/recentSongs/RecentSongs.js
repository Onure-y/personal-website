import React from "react";
import "./recent-songs.css";
import SongComp from "../songComp/SongComp";

function RecentSongs() {
  return (
    <div className="recent-songs-container">
      <div className="songs-container">
        <SongComp imgPath="song-1.jpg" songName="Mohammad"/>
        <SongComp imgPath="song-2.jpg" songName="Nerdeyim"/>
      </div>
      <button className="all-blogs-button">See All Songs</button>
    </div>
  );
}

export default RecentSongs;
