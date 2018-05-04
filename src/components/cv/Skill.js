import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateSkill from '../../store/cv/skill/mapStateAction';
import dispatchStateSkill from '../../store/cv/skill/dispatchStateAction';
import Loading from '../general/Loading';

class Skill extends Component {
  
  componentWillMount() {
    this.props.fetchSkill();
  }

  render(){
    return (
      <div className="container-component-outer">
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.skill.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.skill.map((item, index) => (
              <span key={index}>{item.skill} &nbsp;</span>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);
