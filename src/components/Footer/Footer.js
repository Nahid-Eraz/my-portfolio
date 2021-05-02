import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>Follow Me</p>
                <div className="row">
                    <ul className="media list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/erazpro/"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/eraz_md"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        <li className="list-inline-item"><a href="https://github.com/Nahid-Eraz"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/nahid-eraz-55a3811b5/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                        <li className="list-inline-item"><a href="https://medium.com/@nahidulislameraz"><FontAwesomeIcon className="icon" icon={faMedium} /></a></li>
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