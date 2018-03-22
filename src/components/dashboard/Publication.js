import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePublication from '../../store/dashboard/publication/mapStateAction';
import dispatchStatePublication from '../../store/dashboard/publication/dispatchStateAction';

class Publication extends Component {
  
  componentWillMount() {
    this.props.fetchPublication();
  }
  
  render() {
    return (
      <div>
        <h1 className="display-4 dashboard-title">Publication</h1>
          <hr/>
      </div>
    );
  }
}

export default connect(mapStatePublication, dispatchStatePublication)(Publication);