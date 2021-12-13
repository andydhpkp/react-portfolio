import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="main">
        <Header />
         <div className="body">
          <Switch>
            <Route exact path="/react-portfolio" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
