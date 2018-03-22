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
      </div>
    );
  }
}

export default connect(mapStatePersonal, dispatchStatePersonal)(PersonalDetail);