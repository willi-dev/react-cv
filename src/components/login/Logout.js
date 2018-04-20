import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import mapStateAuth from '../../store/auth/mapStateAction';
// import dispatchStateAuth from '../../store/auth/dispatchStateAction';
import { Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { auth } from '../../services/firebase';
import './login.css';

const INITIAL_STATE = {
  isAuth: true,
  redirectTo: false,
}

class Logout extends Component {

  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
  }

  render(){
    const { redirectTo } = this.state;
    return(
      <div>
        {
          redirectTo && (
            <Redirect to={routes.LOGIN} />
          )
        }
        <div className="logout-container">
          <div className="icon-exit">
            <i className="material-icons">exit_to_app</i>
            <p>Exit from dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    let _this = this;
    auth.doSignOut()
      .then( function() {
        localStorage.removeItem('authUser');
        if( localStorage.getItem('authUser') === null ){
          _this.setState({ isAuth: auth.isAuthenticated(), redirectTo: true })
        }
      }, function(error){
        console.log(error)
      });
  }

}

export default Logout;
