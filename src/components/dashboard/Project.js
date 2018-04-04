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
          <div class="form-group">
            <label for="project-name">Project Name</label>
            <input type="text" class="form-control" id="project-name" placeholder="Example: Website Company Profile"/>
          </div>
          <div class="form-group">
            <label for="project-company">Company</label>
            <input type="text" class="form-control" id="project-company" placeholder="Example: Mirum Agency"/>
          </div>
          <div class="form-group">
            <label for="project-period">Project Period</label>
            <input type="text" class="form-control" id="project-period" placeholder="Example: January 2016 - February 2017"/>
          </div>
          
          <div class="form-group">
            <label for="project-description">Project Description</label>
            <textarea class="form-control" id="project-description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
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