import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateSkill from '../../store/dashboard/skill/mapStateAction';
import dispatchStateSkill from '../../store/dashboard/skill/dispatchStateAction';
import Loading from '../general/Loading';
import Related from './Related';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  skill_name: '',
}

class Skill extends Component {
  
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addSkill = this.addSkill.bind(this);
  }

  addSkill(e){
    e.preventDefault();
    const { skill_name } = this.state;
    let data_skill = {
      skill: skill_name
    };
    this.props.addSkill( data_skill );
    this.setState({skill_name: ''});
  }

  componentWillMount() {
    this.props.fetchSkill();
  }
  
  render() {
    const { skill_name } = this.state;
    const isInvalid = skill_name === '';
    return (
      <div>
        <h1 className="display-4 dashboard-title">Skill</h1>
          <hr/>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.addSkill}>
                <div className="form-group">
                  <label htmlFor="skill-name">Skill</label>
                  <input type="text" 
                    className="form-control" 
                    id="skill-name" 
                    placeholder="Example: PHP"
                    value={skill_name}
                    onChange={event => this.setState(byPropKey('skill_name', event.target.value))}/>
                </div>
                <div className="form-group">
                  <button disabled={isInvalid} className="btn btn-primary" type="submit">
                    <span className="btn-element btn-element--left"><i className="material-icons">games</i> </span>
                    <span className="btn-element btn-element--right">&nbsp;Add Skill</span>
                  </button>
                </div>
              </form>
              <hr/>
              
              {
                (!this.props.fetched) && (
                  <Loading />
                 )
              }
              <div className={!this.props.fetched ? 'element-hide': 'element-show'}>
                {
                  this.props.skill.map( (item, index) => (
                    <span key={index} className="skill-badge skill-badge__primary" > 
                      {item.skill} &nbsp;
                      <span className="badge badge-light badge-delete">
                        <i className="material-icons">close</i>
                      </span> 
                    </span>
                  ))
                }
                
              </div>

            </div>
            
            <Related />
          </div>

          
      </div>
    );
  }
}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);