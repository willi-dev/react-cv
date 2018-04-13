import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateMain from '../../store/dashboard/mainprofile/mapStateAction';
import dispatchStateMain from '../../store/dashboard/mainprofile/dispatchStateAction';

class MainProfile extends Component {

  componentWillMount() {
    this.props.fetchMainProfile();
  }

  render() {
    // console.log( this.props )
    return (
      <div>
          <h1 className="display-4 dashboard-title">Main Profile</h1>
          <hr/>
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="main-profile-name">Name</label>
                <input type="text" className="form-control" id="main-profile-name" placeholder="Example: Willi" />
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-job">Job Title</label>
                <input type="text" className="form-control" id="main-profile-job" placeholder="Example: Front End Developer" />
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-phone">Phone</label>
                <input type="text" className="form-control" id="main-profile-phone" placeholder="Example: 0857 2233 8899" />
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-address">Address</label>
                <textarea className="form-control" id="main-profile-address" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-email">Email</label>
                <input type="text" className="form-control" id="mian-profile-email" placeholder="Example: willi.dev.id@gmail.com"/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-linkedin">Linkedin</label>
                <input type="text" className="form-control" id="main-profile-linkedin" placeholder="Example: https://www.linkedin.com/in/willidev/"/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-github">Github</label>
                <input type="text" className="form-control" id="main-profile-github" placeholder="Example: https://github.com/willi-dev"/>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit" >
                  Submit
                </button>
              </div>
            </form>
          </div>
      </div>
    );
  }

}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);