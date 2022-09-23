import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer row text-center py-2 g-0">
            <div className="col-1">
                <a href="http://qr.afip.gob.ar/?qr=POPelgui7DIvzLfNnvhThQ,," target="_F960AFIPInfo">
                    <img className="qr" src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" border="0"></img>
                </a>
            </div>
            <div className="col-11">
                <div className="d-flex flex-column justify-content-center">
                    <span>Made with React - Background by <a href="http://1041uuu.tumblr.com">1041uuu</a></span>
                    <span>
                        From <img src="https://flagcdn.com/w20/ar.png" srcSet="https://flagcdn.com/w40/ar.png 2x" width="20" alt="Argentina" /> with &#x1F497;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;