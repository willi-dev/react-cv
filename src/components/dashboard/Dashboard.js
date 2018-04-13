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
import withAuthentication from '../withAuthentication';
import * as routes from '../../constants/routes';
// import Login from '../login/Login';
// import { firebase } from '../../services/firebase';
// import AuthUserContext from '../AuthUserContext';

class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.state = {
      menuOpen: false,
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
              <Route exact path={routes.DASHBOARD_MAIN} component={MainProfile} />
              <Route path={routes.DASHBOARD_PERSONAL} component={PersonalDetail} />
              <Route path={routes.DASHBOARD_WORK} component={Work} />
              <Route path={routes.DASHBOARD_PROJECT} component={Project} />
              <Route path={routes.DASHBOARD_EDUCATION} component={Education} />
              <Route path={routes.DASHBOARD_SKILL} component={Skill} />
              <Route path={routes.DASHBOARD_TRAINING} component={Training} />
              <Route path={routes.DASHBOARD_PUBLICATION} component={Publication} />
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthentication(Dashboard);
