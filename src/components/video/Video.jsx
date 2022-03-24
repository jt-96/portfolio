import React from 'react';
import video from '../../assets/video/background.mp4';
import './Video.css';

function Video(){

    return (

        <video id="bg-video" autoPlay loop muted>
            <source src={video} type="video/mp4"/>
        </video>
    )
}

export default Video;