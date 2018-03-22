import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateEdu from '../../store/dashboard/education/mapStateAction';
import dispatchStateEdu from '../../store/dashboard/education/dispatchStateAction';

class Education extends Component {
   
  componentWillMount() {
    this.props.fetchEducation();
  }

  render() {
    return (
      <div>
        <h1 className="display-4 dashboard-title">Education</h1>
          <hr/>
      </div>
    );
  }
}

export default connect(mapStateEdu, dispatchStateEdu)(Education);