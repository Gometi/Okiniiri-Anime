import React from 'react';
import './Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCode, faCoffee } from '@fortawesome/fontawesome-free-solid';

function Footer() {
    return(
        <div className="footer">
            <div className="footer__quote">
             <p> Anime is love, Anime is life</p>
            </div>
            <div className="footer__subquotes">
                <h5> Love anime | Live anime</h5>
            </div>
           
            <FontAwesomeIcon icon={faCode} /> 
            <FontAwesomeIcon icon={faCoffee} /> 

            <p className="footer__copyright"> A product of Team Akastuki &hearts; </p>
            
        </div>
    )
}

export default Footer;

// <i className="fa fa-spinner fa-spin">no spinner but why</i>