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
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="skill-name">Related Development Tools</label>
            <input type="text" className="form-control" id="skill-name" placeholder="Example: git"/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">
              Add Related Development Tools
            </button>
          </div>
        </form>
        <hr/>

        <div>
          {/*loop related here*/}
          <span className="skill-badge skill-badge__related">
            Git &nbsp;
            <span className="badge badge-light badge-delete">
              <i className="material-icons">close</i>
            </span> 
          </span>
        </div>
        
      </div>
    );
  }
}

export default connect( mapStateRelated, dispatchStateRelated )(Related);