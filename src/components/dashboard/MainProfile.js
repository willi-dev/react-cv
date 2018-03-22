import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateMain from '../../store/dashboard/mainprofile/mapStateAction';
import dispatchStateMain from '../../store/dashboard/mainprofile/dispatchStateAction';

class MainProfile extends Component {

  componentWillMount() {
    this.props.fetchMainProfile();
  }

  render() {
    console.log( this.props )
    return (
      <div>
          <h1 className="display-4 dashboard-title">Main Profile</h1>
          <hr/>
      </div>
    );
  }

}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);