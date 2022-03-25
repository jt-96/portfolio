import React from 'react';
import './Profile.css';

function Profile() {

    return (
        <div className="container profile my-3 py-3 px-4">
            <div className="anchor" id="profile"></div>
            <h2 className="py-2">Profile</h2>
            <p className="py-2">I'm based in MERN Stack and this are the tecnologies I used till now.</p>
            <div className="py-3 flex-row text-center">
                <img src={`${process.env.PUBLIC_URL}/assets/icons/html5.png`} alt="HTML5 Logo"/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/css3.png`} alt="CSS3 Logo"/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/js.png`} alt="JavaScript Logo"/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/react.png`} alt="React.js Logo"/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/node.png`} alt="Node.js Logo"/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/mongodb.png`} alt="MongoDB Logo"/>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/git.png`} alt="Git Logo"/>
            </div>

        </div>
    )
}

export default Profile;