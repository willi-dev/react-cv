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
          
          <div class="row">
            <div class="col-md-6">
              <form>
                <div class="form-group">
                  <label for="skill-name">Skill</label>
                  <input type="text" class="form-control" id="skill-name" placeholder="Example: PHP"/>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" type="submit">
                    Add Skill
                  </button>
                </div>
              </form>
              <hr/>
              
              <div>
                {/*loop skill here*/}
                <span class="skill-badge skill-badge__primary" > 
                  PHP
                  <span class="badge badge-light badge-delete">
                    <i class="material-icons">close</i>
                  </span> 
                </span>
              </div>

            </div>
            

            {/*replace it with Related component */}
            <div class="col-md-6">
              <form>
                <div class="form-group">
                  <label for="skill-name">Related Development Tools</label>
                  <input type="text" class="form-control" id="skill-name" placeholder="Example: git"/>
                </div>
                <div class="form-group">
                  <button class="btn btn-success" type="submit">
                    Add Related Development Tools
                  </button>
                </div>
              </form>
              <hr/>

              <div>
                {/*loop related here*/}
                <span class="skill-badge skill-badge__related">
                  Git
                  <span class="badge badge-light badge-delete">
                    <i class="material-icons">close</i>
                  </span> 
                </span>
              </div>
              
            </div>
          </div>

          <Related />
      </div>
    );
  }
}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);