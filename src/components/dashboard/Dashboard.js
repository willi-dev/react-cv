import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './dashboard.css';

import SidebarDashboard from './SidebarDashboard';
import MainProfile from './MainProfile';
import PersonalDetail from './PersonalDetail';
import Work from './Work';
import Project from './Project';
import Education from './Education';
import Skill from './Skill';
import Training from './Training';
import Publication from './Publication';

// import _ from 'lodash';

class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.state = {
      menuOpen: false,
      // education: [],
      // mainprofile: [],
      // personaldetail: [],
      // publication: [],
      // related: [],
      // skill: [],
      // training: [],
      // work: []
    };
  }
  
  onClickMenu(e){
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.menuOpen ? 'container-fluid container-hidden' : 'container-fluid'}>
          <div className="row">
            <SidebarDashboard menuOpen={this.state.menuOpen}/>
            <div className={this.state.menuOpen ? 'col-md-12 main-content main-content--resize' : 'col-md-12 main-content'}>
              <span className="open-menu" onClick={this.onClickMenu}>
                <i className="material-icons">{this.state.menuOpen ? 'close' : 'menu'}</i>
              </span>
              <Route exact path={`${this.props.match.path}`} component={MainProfile} />
              <Route path={`${this.props.match.path}/personal-detail`} component={PersonalDetail} />
              <Route path={`${this.props.match.path}/work`} component={Work} />
              <Route path={`${this.props.match.path}/project`} component={Project} />
              <Route path={`${this.props.match.path}/education`} component={Education} />
              <Route path={`${this.props.match.path}/skill`} component={Skill} />
              <Route path={`${this.props.match.path}/training`} component={Training} />
              <Route path={`${this.props.match.path}/publication`} component={Publication} />
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;