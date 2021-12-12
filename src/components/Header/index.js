import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const { navSelection, navClass } = props

    return(
        <header>
            <div>
                <h1>ANDREW DURHAM</h1>
            </div>
            <Navigation
                navSelection={navSelection}
                navClass={navClass} />
        </header>
    )
}

export default Header