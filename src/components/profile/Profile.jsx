import React from 'react';
import './Profile.css';

function Profile() {

    return (
        <div className="container profile my-3 py-3" id="profile">
            <h2 className="py-2">Profile</h2>
            <p className="py-2">Currently I'm based in MERN Stack and this are the tecnologies I used so far.</p>
            <div className="row py-3 flex-row text-center">
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
                <span className="col px-3">Icon</span>
            </div>

        </div>
    )
}

export default Profile;