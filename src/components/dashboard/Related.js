import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateRelated from '../../store/dashboard/related/mapStateAction';
import dispatchStateRelated from '../../store/dashboard/related/dispatchStateAction';

class Related extends Component {
  
  componentWillMount() {
    this.props.fetchRelated();
  }
  
  render() {
    return (
      <div>
          <hr/>
      </div>
    );
  }
}

export default connect( mapStateRelated, dispatchStateRelated )(Related);