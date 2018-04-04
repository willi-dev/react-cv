import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePersonal from '../../store/dashboard/personaldetail/mapStateAction';
import dispatchStatePersonal from '../../store/dashboard/personaldetail/dispatchStateAction';

class PersonalDetail extends Component {
  
  componentWillMount() {
    this.props.fetchPersonal();
  }
  
  render() {
    return (
      <div>
        <h1 className="display-4 dashboard-title">Personal Detail</h1>
          <hr/>
          <div>
            <form>
              <div class="form-group">
                <label for="personal-detail-place">Place of Birth</label>
                <input type="text" class="form-control" id="personal-detail-place" placeholder="Example: Padang"/>
              </div>
              <div class="form-group">
                <label for="personal-detail-date">Date of Birth</label>
                <input type="text" class="form-control" id="personal-detail-date" placeholder="Example: 05 April 1989"/>
              </div>
              <div class="form-group">
                <label for="personal-detail-gender">Gender</label>
                <select class="form-control" id="personal-detail-gender" >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="form-group">
                <label for="personal-detail-language">Language</label>
                <input type="text" class="form-control" id="personal-detail-language" placeholder="Example: Bahasa, English"/>
              </div>
              <div class="form-group">
                <label for="personal-detail-language">Religion</label>
                <input type="text" class="form-control" id="personal-detail-religion" placeholder="Example: Islam"/>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default connect(mapStatePersonal, dispatchStatePersonal)(PersonalDetail);