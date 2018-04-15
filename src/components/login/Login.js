import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateAuth from '../../store/auth/mapStateAction';
import dispatchStateAuth from '../../store/auth/dispatchStateAction';
// import { withRouter, Redirect } from 'react-router-dom';
// import { auth } from '../../services/firebase';
// import * as routes from '../../constants/routes';


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Login extends Component {
  
  constructor(props){
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  // onSubmit = (event) => {
  //   const {
  //     email,
  //     password,
  //   } = this.state;

  //   const {
  //     history,
  //   } = this.props;

  //   auth.doSignInWithEmailAndPassword( email, password )
  //     .then( () => {
  //       this.setState( () => ({...INITIAL_STATE}));
  //       history.push(routes.DASHBOARD_MAIN);
  //       console.log( email );
  //       console.log( password );
  //     })
  //     .catch( error => {
  //       this.setState( byPropKey('error', error ));
  //     });
  //     event.preventDefault();
  // }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      password,
    } = this.state;
   
    this.props.fetchUserDAta(email, password);
  }

  render() {
    const { email, password, error } = this.state;
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
                      <form className="form" onSubmit={this.onSubmit}>
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

export default connect(mapStateAuth, dispatchStateAuth)(Login);
