
import React, { useState, useEffect } from "react";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/182/top";

function MusicPlayer() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const inputRef = React.useRef();

  useEffect(() => {
    if (currentSong) {
      inputRef.current.play();
    }
    console.log(currentSong);
  }, [currentSong]);

  useEffect(() => {
    setIsLoading(true);
    fetch(BASE_URL, {
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => {
        return res.ok ? res.json() : null;
      })
      .then(songs => {
        setSongs(songs.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <p> {error.message}</p>;
  }
  if (isLoading) {
    return <p> Loading songs...</p>;
  }

  const handlePlay = songPreview => {
    if (currentSong) {
      if (currentSong === songPreview) {
        return inputRef.current.play();
      }
    }
    setCurrentSong(songPreview);
  };

  return (
    <div>
      <h4>My first trial to create a Music Player. It will be better in React Advanced.This is purely from stackOverflow example</h4>
      {songs.map((song, i) => (
        <div key={i}>
          <h1>{song.title}</h1>
          <img src={song.contributors[0].picture_small} />
          <br />
          <audio ref={inputRef} src={currentSong} />
          <button onClick={() => handlePlay(song.preview)}>Play</button>
          <button onClick={() => inputRef.current.pause()}>Pause</button>
        </div>
      ))}
    </div>
  );
}

export default MusicPlayer;