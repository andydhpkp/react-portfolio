import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [navSelection, navClass] = useState('about')

  return (
    <Router>
      <div className="main">
        <Header
          navSelection={navSelection}
          navClass={navClass} />
         <div className="body">
          <Switch>
            <Route exact path="/react-portfolio" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
{/*             <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} /> */}
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
