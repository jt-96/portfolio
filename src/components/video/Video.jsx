import React from 'react';
import './Video.css';

function Video(){

    return (

        <video id="bg-video" autoPlay loop muted>
            <source src={`${process.env.PUBLIC_URL}/assets/video/background.mp4`} type="video/mp4"/>
        </video>
    )
}

export default Video;