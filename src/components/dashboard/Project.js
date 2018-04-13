import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateProject from '../../store/dashboard/project/mapStateAction';
import dispatchStateProject from '../../store/dashboard/project/dispatchStateAction';

class Project extends Component {
  
  componentWillMount() {
    this.props.fetchProject();
  }
  
  render() {
    return (
      <div>
        <h1 className="display-4 dashboard-title">Project</h1>
        <hr/>
        <form>
          <div className="form-group">
            <label htmlFor="project-name">Project Name</label>
            <input type="text" className="form-control" id="project-name" placeholder="Example: Website Company Profile"/>
          </div>
          <div className="form-group">
            <label htmlFor="project-company">Company</label>
            <input type="text" className="form-control" id="project-company" placeholder="Example: Mirum Agency"/>
          </div>
          <div className="form-group">
            <label htmlFor="project-period">Project Period</label>
            <input type="text" className="form-control" id="project-period" placeholder="Example: January 2016 - February 2017"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="project-description">Project Description</label>
            <textarea className="form-control" id="project-description" rows="3"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <hr/>
      </div>
    );
  }
}

export default connect(mapStateProject, dispatchStateProject)(Project);