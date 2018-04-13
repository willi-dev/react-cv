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
        <form>
          <div className="form-group">
            <label htmlFor="work-position">Position</label>
            <input type="text" className="form-control" id="work-position" placeholder="Example: Web Developer"/>
          </div>
          <div className="form-group">
            <label htmlFor="work-company">Company</label>
            <input type="text" className="form-control" id="work-company" placeholder="Example: Mirum Agency"/>
          </div>
          <div className="form-group">
            <label htmlFor="work-period">Period</label>
            <input type="text" className="form-control" id="work-period" placeholder="Example: January 2016 - February 2017"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="work-description">Work Description</label>
            <textarea className="form-control" id="work-description" rows="3"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-default" type="submit">
              Submit
            </button>
          </div>
        </form>
        <hr/>
      </div>
    );
  }
}

export default connect(mapStateWork, dispatchStateWork)(Work);