import React from 'react';
import './Profile.css';

function Profile() {

    return (
        <div className="container profile my-3 py-3">
            <div className="anchor" id="profile"></div>
            <h2 className="py-2">Profile</h2>
            <p className="py-2">Currently I'm based in MERN Stack and this are the tecnologies I used so far.</p>
            <div className="py-3 flex-row text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/icons/html5.png`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/css3.png`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/js.png`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/react.png`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/node.png`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/mongodb.png`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/git.png`}/>
            </div>

        </div>
    )
}

export default Profile;