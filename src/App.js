import React, { Component } from 'react';
import './App.css';

import MainProfile from './components/cv/MainProfile';
import PersonalDetail from './components/cv/PersonalDetail';
import Education from './components/cv/Education';
import Training from './components/cv/Training';
import Skill from './components/cv/Skill';
import Related from './components/cv/Related';
import Work from './components/cv/Work';
import Project from './components/cv/Project';
import Publication from './components/cv/Publication';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <div className="row"> 
          <div className="col-md-6 offset-md-3">
            <MainProfile />
            <PersonalDetail />
            <Work />
            <Skill />
            <Related />
            <Project />
            <Education />
            <Training />
            <Publication />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
