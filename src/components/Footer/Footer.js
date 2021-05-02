import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//linkedin.com"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                            <li className="list-inline-item"><a href="//youtube.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                </div>
                <div className="text-center">
                    <p>Copyright © {(new Date()).getFullYear()} All Rights Reserved By Nahid Eraz</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;