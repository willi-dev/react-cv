import React from 'react';
import AuthUserContext from './AuthUserContext';
import {firebase} from '../services/firebase';
// import * as routes from '../constants/routes';

const withAuthentication = (Component) => {
  class WithAuthentication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged( (authUser) => {
        authUser
          ? this.setState( () => ( { authUser } ))
          : this.setState( () => ( { authUser: null } ));
      });
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
}

export default withAuthentication;
