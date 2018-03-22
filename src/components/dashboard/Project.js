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
      </div>
    );
  }
}

export default connect(mapStateProject, dispatchStateProject)(Project);