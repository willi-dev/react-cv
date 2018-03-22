import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateWork from '../../store/dashboard/work/mapStateAction';
import dispatchStateWork from '../../store/dashboard/work/dispatchStateAction';

class Work extends Component {
  
  componentWillMount() {
    this.props.fetchWork();
  }
  
  render() {
    return (
       <div>
         <h1 className="display-4 dashboard-title">Work Experiences</h1>
          <hr/>
       </div>
    );
  }
}

export default connect(mapStateWork, dispatchStateWork)(Work);