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
          
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label htmlFor="skill-name">Skill</label>
                  <input type="text" className="form-control" id="skill-name" placeholder="Example: PHP"/>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Add Skill
                  </button>
                </div>
              </form>
              <hr/>
              
              {
                (!this.props.fetched) && (
                  <div className="loading-container">
                    <div className="spinner"></div>
                  </div>
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