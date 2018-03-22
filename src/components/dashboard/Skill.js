import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateSkill from '../../store/dashboard/skill/mapStateAction';
import dispatchStateSkill from '../../store/dashboard/skill/dispatchStateAction';
import Related from './Related';

class Skill extends Component {
  
  componentWillMount() {
    this.props.fetchSkill();
  }
  
  render() {
    return (
      <div>
        <h1 className="display-4 dashboard-title">Skill</h1>
          <hr/>
          <Related />
      </div>
    );
  }
}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);