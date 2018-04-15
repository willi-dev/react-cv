import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateAuth from '../../store/auth/mapStateAction';
import dispatchStateAuth from '../../store/auth/dispatchStateAction';
// import { auth } from '../../services/firebase';
import { Link } from 'react-router-dom';

class SidebarDashboard extends Component {
  
  onClick = (e) => {
    e.preventDefault();
    this.props.userSignOut();
    // firebaseConfig.auth().signOut();
  }

  render(){
    const REACT_VERSION = React.version;
    return (
      <div className={this.props.menuOpen ? 'side-menu side-menu__offcanvas side-menu--open' : 'side-menu side-menu__offcanvas'}>
        <ul className="side-menu__dashboard">
          <li className="side-menu__item">
            <p>react version: {REACT_VERSION}</p>
          </li>
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
            <Link to='/login' onClick={this.onClick}>Logout</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default connect(mapStateAuth, dispatchStateAuth)( SidebarDashboard );