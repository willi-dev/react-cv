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
          <div class="form-group">
            <label for="education-school">School</label>
            <input type="text" class="form-control" id="education-school" placeholder="Example: SMA Negeri 19 Bandung"/>
          </div>
          <div class="form-group">
            <label for="education-period">Education Period</label>
            <input type="text" class="form-control" id="education-period" placeholder="Example: January 2016 - February 2017"/>
          </div>
          
          <div class="form-group">
            <label for="education-description">Education Description</label>
            <textarea class="form-control" id="work-description" rows="3"></textarea>
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

export default connect(mapStateEdu, dispatchStateEdu)(Education);