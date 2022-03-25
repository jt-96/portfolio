import React from 'react';
import './Contact.css';
import cv from '../../assets/files/Jonathan Torrico - CV.pdf';


function Contact() {

    return (
        <div className="container contact my-3 py-3 px-4" id="contact">
            <h2 className="my-2 py-2 text-center contactTitle">Connect with Me</h2>
            <div className="flex-row text-center">
                <a href={cv} target="_blank" rel="noopener noreferrer">
                    <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/cv.png`} alt="View Curriculum Vitae" />
                </a>
                <a href="mailto:jetorrico@outlook.com" rel="noopener noreferrer">
                    <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/email.png`} alt="Email Address"/>
                </a>
                <a href="https://ar.linkedin.com/in/jonathan-torrico" target="_blank" rel="noopener noreferrer">
                    <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/linkedin.png`} alt="LinkedIn Profile"/>
                </a>
                <a href="https://github.com/jt-96" target="_blank" rel="noopener noreferrer">
                    <img className='my-5 px-2' src={`${process.env.PUBLIC_URL}/assets/contact/github.png`} alt="GitHub Profile"/>
                </a>
            </div>
        </div>
    )
}


export default Contact;