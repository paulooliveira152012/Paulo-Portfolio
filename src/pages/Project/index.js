import React from "react";
import "./style.css"

function Project () {
    return (
        <div class="portfolio" id="portfolio">
          <h2>My Portfolio</h2>

          <ul>
            
            <div className="container">
            <a href="https://paulooliveira152012.github.io/runBuddy2/"
            target="_blank"
            class="project"
            id="runBuddy"
            > <li className="runbuddy"></li>
              <div class="title1">Run Buddy</div>
            </a>
            </div>

            <div className="container">
            <a href="https://paulooliveira152012.github.io/horiseon-2-/"
            target="_blank"
            class="project"
            id="horiseon"
            > <li className="horiseon"></li>
              <div class="title1">Horiseon</div>
            </a>
            </div>

            <div className="container">
            <a href="https://radiant-sierra-52768.herokuapp.com/"
            target="_blank"
            class="project"
            id="horiseon"
            > <li className="NEE"></li>
              <div class="title1">NE Events</div>
            </a>
            </div>

            <div className="container">
            <a href="https://young-shelf-44589.herokuapp.com/"
            target="_blank"
            class="project"
            id="horiseon"
            > <li className="listenup"></li>
              <div class="title1">ListenUp</div>
            </a>
            </div>

          </ul>
        </div>
    )
};

export default Project;