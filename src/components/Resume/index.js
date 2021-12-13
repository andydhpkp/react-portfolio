import React from 'react';
import resume from '../../assets/misc/Resume.pdf'

function Resume() {
    return(
        <div className="resumeMainDiv">
            <h1 className="selected">RESUME</h1>
            <h2>Download my <a id="resume" href={resume} download="Andrew_Durham_Resume">Resume</a></h2>
            <div className="frontEndDiv">
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="backEndDiv">
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;