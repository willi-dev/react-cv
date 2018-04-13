import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import {firebase} from '../services/firebase';
import * as routes from '../constants/routes';

const withAuthorization = (authCondition) => (Component) => {
  
  class WithAuthorization extends Component {
    
    componentDidMount() {
      firebase.auth.onAuthStateChanged( authUser => {
         if(!authCondition(authUser)){
           this.props.history.push(routes.LOGIN);
         }
      });
    }

    render(){
      return(
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component /> : null }
        </AuthUserContext.Consumer>
      );
    }

  }

  return withRouter(WithAuthorization);

}

export default withAuthorization;