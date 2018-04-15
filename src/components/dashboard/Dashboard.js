import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
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
import * as routes from '../../constants/routes';
import mapStateAuth from '../../store/auth/mapStateAction';
import dispatchStateAuth from '../../store/auth/dispatchStateAction';

// import store from '../../store/store';

const INITIAL_STATE = {
  menuOpen: false,
  isAuth: true
}

class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.state = {...INITIAL_STATE};
    // console.log('retrievedObject: ', JSON.parse(localStorage.getItem('authUser')));
  }

  componentDidMount(){
    this.props.userSignIn();
    if( localStorage.getItem('authUser') === null ){
      this.setState({isAuth: false});
    }

  }
  
  onClickMenu(e){
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    const { menuOpen, isAuth } = this.state;
    // let isAuthentication = store.getState().auth.isAuth;
    return (
      <div>
        { !isAuth && (
          <Redirect to={routes.LOGIN} />
        )}
        <div className={menuOpen ? 'container-fluid container-hidden' : 'container-fluid'}>
          <div className="row">
            <SidebarDashboard menuOpen={menuOpen} />
            <div className={menuOpen ? 'col-md-12 main-content main-content--resize' : 'col-md-12 main-content'}>
              <span className="open-menu" onClick={this.onClickMenu}>
                <i className="material-icons">{menuOpen ? 'close' : 'menu'}</i>
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

export default connect(mapStateAuth, dispatchStateAuth)(Dashboard);
