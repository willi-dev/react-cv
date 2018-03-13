import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './dashboard.css';

import MainProfile from './MainProfile';
import PersonalDetail from './PersonalDetail';
import Work from './Work';
import Project from './Project';
import Education from './Education';
import Skill from './Skill';
import Training from './Training';
import Publication from './Publication';

class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.state = {
      menuOpen: false
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
            <div className={this.state.menuOpen ? 'side-menu side-menu__offcanvas side-menu--open' : 'side-menu side-menu__offcanvas'}>
              <ul className="side-menu__dashboard">
                <li className="side-menu__item">
                  <Link to='/dashboard/main-profile'>Main Profile</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/personal-detail'>Personal Detail</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/work'>Work Experiences</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/project'>Projects</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/education'>Education</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/skill'>Skill</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/training'>Training</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/publication'>Publication & Research</Link>
                </li>
                <li className="side-menu__item">
                </li>
              </ul>
            </div>
            <div className={this.state.menuOpen ? 'col-md-12 main-content main-content--resize' : 'col-md-12 main-content'}>
              <span className="open-menu" onClick={this.onClickMenu}>
                <i className="material-icons">menu</i>
              </span>

              <Route exact path={`${this.props.match.path}`} component={MainProfile} />
              <Route path={`${this.props.match.path}/main-profile`} component={MainProfile} />
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