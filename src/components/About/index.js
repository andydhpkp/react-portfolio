import React from 'react';

function About() {
    return(
        <div className="aboutMainDiv">
            <h1>ABOUT ME</h1>
            <div className="aboutSecondaryDiv">
                <div className="aboutLeft">
                    <h2>Hey, I'm <span>Andrew Durham</span></h2>
                    <p>
                        I am a recent graduate from the full stack web development bootcamp offered through the University of Utah. I am also about to finish a Master's degree in Software Engineering through 
                        Regis University in Denver, Colorado. Through the bootcamp I have learned a variety of front and back-end languages like HTML, CSS, JavaScript, jQuery, Node.js, Express, and React.
                        The bootcamp and graduate program have given me experience working with teams on a variety of development and software planning projects. I am currently living in Salt Lake City, Utah
                        where I can typically be found at concerts, hiking, playing basketball, or continuing my journey of finishing the Wheel of Time before I am 30!
                    </p>
                </div>
                <div className="aboutRight">
                    <img src="../../assets/misc/Profile.jpg" alt="A smiling Andrew"/>
                </div>
            </div>
        </div>
    )
}

export default About;