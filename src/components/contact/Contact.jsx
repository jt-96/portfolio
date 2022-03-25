import React from 'react';
import './Contact.css';

function Contact() {

    return (
        <div className="container contact my-3 py-3 px-4" id="contact">
            <h2 className="my-2 py-2 text-center contactTitle">Connect with Me</h2>
            <div className="flex-row text-center">
                <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/cv.png`} />
                <a href="mailto:jetorrico@outlook.com">
                    <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/email.png`} />
                </a>
                <a href="https://ar.linkedin.com/in/jonathan-torrico" target="_blank">
                    <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/linkedin.png`} />
                </a>
                <a href="https://github.com/jt-96" target="_blank">
                    <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/github.png`} />
                </a>
            </div>
        </div>
    )
}


export default Contact;