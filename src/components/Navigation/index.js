import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(props) {
    const { navSelection, navClass } = props

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/about">ABOUT ME</Link>
                </li>
                <li>
                    <Link
                        to={'/portfolio'}
                        onClick={() => navSelection('portfolio')}
                        className={`${navClass === 'portfolio'}`}>
                            PORTFOLIO
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/contact'}
                        onClick={() => navSelection('contact')}
                        className={`${navClass === 'contact'}`}>
                            CONTACT
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/resume'}
                        onClick={() => navSelection('resume')}
                        className={`${navClass === 'resume'}`}>
                            RESUME
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;