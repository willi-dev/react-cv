import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateAuth from '../../store/auth/mapStateAction';
import dispatchStateAuth from '../../store/auth/dispatchStateAction';
import { Redirect, withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { firebaseConfig } from '../../services/firebase';
import store from '../../store/store';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  isAuth: false,
  errorMessage: '',
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
      isAuth,
      errorMessage
    } = this.state;

    firebaseConfig.auth().signInWithEmailAndPassword( email, password )
      .then( (firebaseUser) => {
        this.props.fetchUserData(firebaseUser);
        this.props.userSignIn();
        localStorage.setItem('authUser', firebaseUser );
        this.setState({isAuth: true});
        this.props.history.push('/dashboard');
      })
      .catch( error => {
        this.props.fetchUserDataReject(error);
        this.setState({errorMessage: error});
      });
  }

  render() {
    const { email, password, error, isAuth, errorMessage } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center mb-5">Dashboard Login</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <span className="anchor" id="formLogin"></span>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="mb-0">Login</h3>
                    </div>
                    <div className="card-body">
                      <form className="form" onSubmit={this.onSubmitLogin}>
                        { errorMessage.message }
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
                        <button disabled={isInvalid} type="submit" className="btn btn-outline-primary btn-block">L O G I N</button>
                        {error && <p>{error.message}</p>}
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

}

export default withRouter(connect(mapStateAuth, dispatchStateAuth)(Login));
