import React from 'react';
import github from '../../assets/misc/github.png'
import linkedIn from '../../assets/misc/linkedIn.png'
import stackOverflow from '../../assets/misc/stackoverflow-com-logo-black-and-white.png'

function Footer() {
    return(
        <footer>
            <div className="socials">
                <a href="https://github.com/andydhpkp" target="_blank" rel="noreferrer">
                    <img src={github} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/andrew-durham-400089158/" target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://stackoverflow.com/users/16344681/andydhpkp" target="_blank" rel="noreferrer">
                    <img src={stackOverflow} alt="stackOverflow"/>
                </a>
            </div>
            <div className="copyright">&copy;2021 by Andrew</div>
        </footer>
    )
}

export default Footer;