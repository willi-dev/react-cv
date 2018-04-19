import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateAuth from '../../store/auth/mapStateAction';
import dispatchStateAuth from '../../store/auth/dispatchStateAction';
import { Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { firebaseConfig } from '../../services/firebase';
import { isAuthenticated } from '../../services/firebase/auth';
import '../../App.css';
import './login.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: false,
  errorMessage: '',
  redirectTo: false,
};

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onSubmitLogin = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      password,
    } = this.state;

    firebaseConfig.auth().signInWithEmailAndPassword( email, password )
      .then( (firebaseUser) => {
        this.props.fetchUserData(firebaseUser);
        this.props.userSignIn();
        this.setState({redirectTo: isAuthenticated() });
      })
      .catch( error => {
        this.props.fetchUserDataReject(error);
        this.setState({error: true, errorMessage: error});
      });
  }
  
  render() {
    const { email, password, error, errorMessage, redirectTo } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <div className="body-container__login">
        {
          redirectTo && (
            <Redirect to={routes.DASHBOARD_MAIN} />
          )
        }
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center mb-5">Dashboard Login</h2>
              <div className="row">
                <div className="col-md-4 mx-auto">
                  <span className="anchor" id="formLogin"></span>
                  <div className="card">
                    
                    <div className="card-body">
                      <form className="form" onSubmit={this.onSubmitLogin}>

                        <div className={error ? 'element-show alert alert-warning' : 'element.hide'} role="alert">
                          { errorMessage.message }
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="username">Email</label>
                          <input 
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="email" 
                            className="form-control" 
                            name="username" 
                            id="username" 
                            required="" placeholder="email..."/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="userpassword">Password</label>
                          <input 
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password" 
                            className="form-control" 
                            name="userpassword" 
                            id="userpassword" 
                            required="" 
                            placeholder="password..." />
                        </div>
                        <button disabled={isInvalid} type="submit" className="btn btn-outline-primary btn-block">
                          <span className="btn-element btn-element--left"><i className="material-icons">lock_open</i></span>
                          <span className="btn-element btn-element--right">&nbsp;Sign In</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount(){
    this.setState({ redirectTo: isAuthenticated() });
  }

}

export default connect(mapStateAuth, dispatchStateAuth)(Login);
