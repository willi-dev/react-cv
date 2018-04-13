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
              
              <div>
                {/*loop skill here*/}
                <span className="skill-badge skill-badge__primary" > 
                  PHP &nbsp;
                  <span className="badge badge-light badge-delete">
                    <i className="material-icons">close</i>
                  </span> 
                </span>
              </div>

            </div>
            

            {/*replace it with Related component */}
            <Related />
          </div>

          
      </div>
    );
  }
}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);