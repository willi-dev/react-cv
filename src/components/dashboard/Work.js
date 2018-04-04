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
          <div class="form-group">
            <label for="work-position">Position</label>
            <input type="text" class="form-control" id="work-position" placeholder="Example: Web Developer"/>
          </div>
          <div class="form-group">
            <label for="work-company">Company</label>
            <input type="text" class="form-control" id="work-company" placeholder="Example: Mirum Agency"/>
          </div>
          <div class="form-group">
            <label for="work-period">Period</label>
            <input type="text" class="form-control" id="work-period" placeholder="Example: January 2016 - February 2017"/>
          </div>
          
          <div class="form-group">
            <label for="work-description">Work Description</label>
            <textarea class="form-control" id="work-description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-default" type="submit">
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