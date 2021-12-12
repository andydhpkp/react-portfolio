import React from 'react';

function Footer() {
    return(
        <footer>
            <div className="socials">
                <a href="https://github.com/andydhpkp" target="_blank" rel="noreferrer">
                    <img src="/Users/andrewdurham/Desktop/Bootcamp/Challenges/react-portfolio/src/assets/misc/github.png" alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/andrew-durham-400089158/" target="_blank" rel="noreferrer">
                    <img src="../../assets/misc/linkedIn.png" alt="LinkedIn"/>
                </a>
                <a href="https://stackoverflow.com/users/16344681/andydhpkp" target="_blank" rel="noreferrer">
                    <img src="../../assets/misc/stackoverflow-com-logo-black-and-white.png" alt="stackOverflow"/>
                </a>
            </div>
            <div className="copyright">&copy;2021 by Andrew</div>
        </footer>
    )
}

export default Footer;