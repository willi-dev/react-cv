import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePersonal from '../../store/dashboard/personaldetail/mapStateAction';
import dispatchStatePersonal from '../../store/dashboard/personaldetail/dispatchStateAction';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  place_birth: '',
  date_birth: '',
  gender: '',
  language:'',
  religion: '',
}

class PersonalDetail extends Component {
  
  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentWillMount() {
    this.props.fetchPersonal();
  }
  
  render() {
    const { place_birth, date_birth, gender, language, religion } = this.state;
    const isInvalid = place_birth === '' || date_birth === '' || gender === '' || language === '' || religion === '';
    return (
      <div>
        <h1 className="display-4 dashboard-title">Personal Detail</h1>
          <hr/>
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="personal-detail-place">Place of Birth</label>
                <input type="text" 
                  className="form-control" 
                  id="personal-detail-place" 
                  placeholder="Example: Padang"
                  value={place_birth}
                  onChange={event => this.setState(byPropKey('place_birth', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="personal-detail-date">Date of Birth</label>
                <input type="text" 
                  className="form-control" 
                  id="personal-detail-date" 
                  placeholder="Example: 05 April 1989"
                  value={date_birth}
                  onChange={event => this.setState(byPropKey('date_birth', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="personal-detail-gender">Gender</label>
                <select 
                  className="form-control" 
                  id="personal-detail-gender"
                  value={gender}
                  onChange={event => this.setState(byPropKey('gender', event.target.value))}>
                  <option value="">--- select gender ---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="personal-detail-language">Language</label>
                <input type="text" 
                  className="form-control" 
                  id="personal-detail-language" 
                  placeholder="Example: Bahasa, English"
                  value={language}
                  onChange={event => this.setState(byPropKey('language', event.target.value))}/>
              </div>
              <div className="form-group">
                <label htmlFor="personal-detail-language">Religion</label>
                <input type="text" 
                  className="form-control" 
                  id="personal-detail-religion" 
                  placeholder="Example: Islam"
                  value={religion}
                  onChange={event => this.setState(byPropKey('religion', event.target.value))}/>
              </div>
              <div className="form-group">
                <button disabled={isInvalid} className="btn btn-primary" type="submit">
                  Save Personal Detail
                </button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default connect(mapStatePersonal, dispatchStatePersonal)(PersonalDetail);