import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

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
                  <Link to='/dashboard/projects'>Projects</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/educations'>Education</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashboard/skill'>Skill</Link>
                </li>
                <li className="side-menu__item">
                  <Link to='/dashbaord/training'>Training</Link>
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

              <h1 className="display-4 dashboard-title">Main Profile</h1>
              <hr/>
              
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;