import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateTraining from '../../store/dashboard/training/mapStateAction';
import dispatchStateTraining from '../../store/dashboard/training/dispatchStateAction';

class Training extends Component {

  componentWillMount() {
    this.props.fetchTraining();
  }
  
  render(){
    return (
      <div>
        <h1 className="display-4 dashboard-title">Training</h1>
          <hr/>
      </div>
    );
  }
}

export default connect(mapStateTraining, dispatchStateTraining)(Training);