import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStateAuth from '../../store/auth/mapStateAction';
import dispatchStateAuth from '../../store/auth/dispatchStateAction';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { firebaseConfig } from '../../services/firebase';
import './login.css';

const INITIAL_STATE = {
  isAuth: true,
}

class Logout extends Component {

  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
  }

  componentDidMount(){
    // this.props.userSignOut();
    let _this = this;
    firebaseConfig.auth().signOut().then( function(){
        localStorage.removeItem('authUser');
        if( localStorage.getItem('authUser') === null ){
          _this.setState({isAuth : false})
          setTimeout(() => { 
            _this.props.history.push(routes.LOGIN);
          }, 6000)
        }
      }, function(error){
        console.log(error)
      });
  }

  render(){
    // const { isAuth } = this.state;
    return(
    
      <div className="logout-container">
        <div className="icon-exit">
          <i class="material-icons">exit_to_app</i>
          <p>Exit from dashboard</p>
        </div>
      </div>
    );
  }

}

export default withRouter( connect(mapStateAuth, dispatchStateAuth )(Logout));
