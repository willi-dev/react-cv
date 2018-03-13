import React, { Component } from 'react';

class Login extends Component {
  
  render() {
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
                      
                      <form className="form" autocomplete="off" >
                        <div className="form-group">
                          <label for="useremail">Email</label>
                          <input type="email" className="form-control" name="useremail" id="useremail" required="" placeholder="email..."/>
                        </div>
                        <div className="form-group">
                          <label for="userpassword">Password</label>
                          <input type="password" className="form-control" name="userpassword" id="userpassword" required="" placeholder="password..." autocomplete="new-password" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary btn-block">L O G I N</button>
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

export default Login;