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
        <form>
          <div className="form-group">
            <label htmlFor="education-school">School</label>
            <input type="text" className="form-control" id="education-school" placeholder="Example: SMA Negeri 19 Bandung"/>
          </div>
          <div className="form-group">
            <label htmlFor="education-period">Education Period</label>
            <input type="text" className="form-control" id="education-period" placeholder="Example: January 2016 - February 2017"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="education-description">Education Description</label>
            <textarea className="form-control" id="work-description" rows="3"></textarea>
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

export default connect(mapStateEdu, dispatchStateEdu)(Education);