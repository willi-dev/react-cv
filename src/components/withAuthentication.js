import React, {Component} from 'react';
import PropTypes from 'prop-types';

import firebase from '../services/firebaseConfig';

const withAuthentication = (Component) => {
  
  class WithAuthentication extends Component {

    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }
    
    getChildContext() {
      return {
        authUser: this.state.authUser,
      }
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged( (authUser) => {
        authUser
          ? this.setState( () => ( { authUser } ))
          : this.setState( () => ( { authUser: null } ));
      });
      // console.log( firebase );
    }

    render() {
      return (
        <Component />
      );
    }
  }

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.object,
  }

  return WithAuthentication;

}

export default withAuthentication;
