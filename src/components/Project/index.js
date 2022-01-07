import React from 'react';
import WorkDay from '../../assets/projects/work-day.png'
import WeatherOutlook from '../../assets/projects/weather-outlook.png'
import EmployeeTracker from '../../assets/projects/employeeTracker.png'
import readMeGenerator from '../../assets/projects/readMeGenerator.png'
import PlaylistGenerator from '../../assets/projects/PlaylistGenerator.png'
import PassStache from '../../assets/projects/Pass-Stache.png'
import Permaculture from '../../assets/projects/Permaculture-Collective.png'


function Project() {
    return(
        <div className="projectMainDiv"> 
            <h1 className="selected">PORTFOLIO</h1>
            <div>
                <a href="https://permaculture-exchange.herokuapp.com/">
                    <img src={Permaculture} alt="Permaculture homepage"/>
                </a>
                <h2>Utah Permaculture Collective</h2>
                <h3><a href="https://github.com/JD-Rowley/permaculture-exchange">GitHub Repository</a></h3>
            </div>
            <div>
                <a href="https://thawing-temple-09016.herokuapp.com/">
                    <img src={PassStache} alt="PassStache homepage"/>
                </a>
                <h2>Pass-Stache</h2>
                <h3><a href="https://github.com/andydhpkp/pass-stache">GitHub Repository</a></h3>
            </div>
            <div>
                <a href="https://joseepina.github.io/bc-project-01/">
                    <img src={PlaylistGenerator} alt="Playlist Generator homepage"/>
                </a>
                <h2>Spotify Playlist Generator</h2>
                <h3><a href="https://github.com/JoseEPina/bc-project-01">GitHub Repository</a></h3>
            </div>
            <div>
                <a href="https://andydhpkp.github.io/weather-outlook/">
                    <img src={WeatherOutlook} alt="WeatherOutlook homepage"/>
                </a>
                <h2>Weather Outlook</h2>
                <h3><a href="https://github.com/andydhpkp/weather-outlook">GitHub Repository</a></h3>
            </div>
            <div>
                <a href="https://andydhpkp.github.io/work-day/">
                    <img src={WorkDay} alt="WorkDay homepage"/>
                </a>
                <h2>Work Day</h2>
                <h3><a href="https://github.com/andydhpkp/work-day">GitHub Repository</a></h3>
            </div>
            <div>
                <a href="https://github.com/andydhpkp/readme-generator">
                    <img src={readMeGenerator} alt="readMeGenerator homepage"/>
                </a>
                <h2>readMe.md Generator</h2>
                <p>GitHub contains walkthrough video</p>
                <h3><a href="https://github.com/andydhpkp/readme-generator">GitHub Repository</a></h3>
            </div>
            <div>
                <a href="https://watch.screencastify.com/v/Sqyv2ZyxiVrt1h32DDSv">
                    <img src={EmployeeTracker} alt="EmployeeTracker in the Terminal"/>
                </a>
                <h2>Employee Tracker</h2>
                <p>Project link is link to walkthrough video</p>
                <h3><a href="https://github.com/andydhpkp/employee-tracker">GitHub Repository</a></h3>
            </div>
        </div>
    )
}

export default Project;