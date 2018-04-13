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
        <form>
          <div className="form-group">
            <label htmlFor="training-name">Training Name</label>
            <input type="text" className="form-control" id="training-name" placeholder="Example: Pelatihan dasar action script 2.0"/>
          </div>
          <div className="form-group">
            <label htmlFor="training-place">Training Place</label>
            <input type="text" className="form-control" id="training-place" placeholder="Example: Ilmu Komputer UPI Bandung"/>
          </div>
          <div className="form-group">
            <label htmlFor="training-year">Year</label>
            <input type="text" className="form-control" id="training-year" placeholder="Example: 2012"/>
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

export default connect(mapStateTraining, dispatchStateTraining)(Training);