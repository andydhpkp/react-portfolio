import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/about">ABOUT ME</Link>
                </li>
                <li>
                    <Link to="/project">PORTFOLIO</Link>
                </li>
                <li>
                    <Link to={'/contact'}>CONTACT</Link>
                </li>
                <li>
                    <Link to={'/resume'}>RESUME</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;