import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audio from '../assets/audio.mp3';



const Audiobook = () => {
    // const audio = ""
    return(
        <>
            <h1>Audiobook</h1> <br /> <br />
            <ReactAudioPlayer
            src={audio}
            autoPlay
            controls
            />
        </>
    );
};
export default Audiobook;