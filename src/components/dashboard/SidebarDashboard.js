import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarDashboard extends Component {

  render(){
    return (
       <div className={this.props.menuOpen ? 'side-menu side-menu__offcanvas side-menu--open' : 'side-menu side-menu__offcanvas'}>
        <ul className="side-menu__dashboard">
          <li className="side-menu__item">
            <Link to='/dashboard/'>Main Profile</Link>
          </li>
          <li className="side-menu__item">
            <Link to='/dashboard/personal-detail'>Personal Detail</Link>
          </li>
          <li className="side-menu__item">
            <Link to='/dashboard/work'>Work Experience</Link>
          </li>
          <li className="side-menu__item">
            <Link to='/dashboard/project'>Project</Link>
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
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default SidebarDashboard;