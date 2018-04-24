import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateMain from '../../store/dashboard/mainprofile/mapStateAction';
import dispatchStateMain from '../../store/dashboard/mainprofile/dispatchStateAction';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  name: '',
  job_title: '',
  phone: '',
  address: '',
  email: '',
  linkedin: '',
  github: '',
  blog: '',
}

class MainProfile extends Component {

  constructor(props){
     super(props);
     this.state = { ...INITIAL_STATE };
  }

  componentWillMount() {
    this.props.fetchMainProfile();
  }

  render() {
    const { name, job_title, phone, address, email, linkedin, github, blog } = this.state;
    const isInvalid = name === '' || job_title === '' || phone === '' || address === '' || email === '';
    return (
      <div>
          <h1 className="display-4 dashboard-title">Main Profile</h1>
          <hr/>
          {
            (!this.props.fetched) && (
              <div className="loading-container">
                <div className="spinner"></div>
              </div>
             )
          }
          <div className={this.props.fetched  && this.props.main.length === 0 ? 'element-show': 'element-hide'}>
            <form>
              <div className="form-group">
                <label htmlFor="main-profile-name">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="main-profile-name" 
                  placeholder="Example: Willi" 
                  value={name}
                  onChange={event => this.setState(byPropKey('name', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-job">Job Title</label>
                <input type="text" className="form-control" id="main-profile-job" placeholder="Example: Front End Developer" value={job_title}
                onChange={event => this.setState(byPropKey('job_title', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-phone">Phone</label>
                <input type="text" className="form-control" id="main-profile-phone" placeholder="Example: 0857 2233 8899" value={phone}
                onChange={event => this.setState(byPropKey('phone', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-address">Address</label>
                <textarea className="form-control" id="main-profile-address" rows="3" value={address}
                onChange={event => this.setState(byPropKey('address', event.target.value))}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-email">Email</label>
                <input type="text" className="form-control" id="mian-profile-email" placeholder="Example: willi.dev.id@gmail.com" value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-linkedin">Linkedin</label>
                <input type="text" className="form-control" id="main-profile-linkedin" placeholder="Example: https://www.linkedin.com/in/willidev/" value={linkedin}
                onChange={event => this.setState(byPropKey('linkedin', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-github">Github</label>
                <input type="text" className="form-control" id="main-profile-github" placeholder="Example: https://github.com/willi-dev" value={github}
                onChange={event => this.setState(byPropKey('github', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="main-profile-blog">Blog</label>
                <input type="text" className="form-control" id="main-profile-blog" placeholder="Example: https://medium.com/@willi.dev" value={blog}
                onChange={event => this.setState(byPropKey('blog', event.target.value))}/>
              </div>
              <div className="form-group">
                <button disabled={isInvalid} className="btn btn-primary" type="submit" >
                  Save Profile
                </button>
              </div>
            </form>
          </div>

          <div className={this.props.fetched && this.props.main.length > 0 ? 'element-show': 'element-hide'}>
            <div className="form-group">
              <label htmlFor="main-profile-name">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="main-profile-name" 
                placeholder="Example: Willi" 
                value={name}
                onChange={event => this.setState(byPropKey('name', event.target.value))}/>
            </div>
            <div className="form-group">
              <label htmlFor="main-profile-job">Job Title</label>
              <input type="text" className="form-control" id="main-profile-job" placeholder="Example: Front End Developer" value={job_title}
              onChange={event => this.setState(byPropKey('job_title', event.target.value))}/>
            </div>
            <div className="form-group">
              <label htmlFor="main-profile-phone">Phone</label>
              <input type="text" className="form-control" id="main-profile-phone" placeholder="Example: 0857 2233 8899" value={phone}
              onChange={event => this.setState(byPropKey('phone', event.target.value))}/>
            </div>
            <div className="form-group">
              <label htmlFor="main-profile-address">Address</label>
              <textarea className="form-control" id="main-profile-address" rows="3" value={address}
              onChange={event => this.setState(byPropKey('address', event.target.value))}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="main-profile-email">Email</label>
              <input type="text" className="form-control" id="mian-profile-email" placeholder="Example: willi.dev.id@gmail.com" value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}/>
            </div>
            <div className="form-group">
              <label htmlFor="main-profile-linkedin">Linkedin</label>
              <input type="text" className="form-control" id="main-profile-linkedin" placeholder="Example: https://www.linkedin.com/in/willidev/" value={linkedin}
              onChange={event => this.setState(byPropKey('linkedin', event.target.value))}/>
            </div>
            <div className="form-group">
              <label htmlFor="main-profile-github">Github</label>
              <input type="text" className="form-control" id="main-profile-github" placeholder="Example: https://github.com/willi-dev" value={github}
              onChange={event => this.setState(byPropKey('github', event.target.value))}/>
            </div>
            <div className="form-group">
              <label htmlFor="main-profile-blog">Blog</label>
              <input type="text" className="form-control" id="main-profile-blog" placeholder="Example: https://medium.com/@willi.dev" value={blog}
              onChange={event => this.setState(byPropKey('blog', event.target.value))}/>
            </div>
            <div className="form-group">
              <button disabled={isInvalid} className="btn btn-primary" type="submit" >
                Save Profile
              </button>
            </div>
          </div>
      </div>
    );
  }

}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);