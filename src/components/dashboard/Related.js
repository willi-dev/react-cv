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

        {
          (!this.props.fetched) && (
            <div className="loading-container">
              <div className="spinner"></div>
            </div>
           )
        }
        <div className={!this.props.fetched ? 'element-hide': 'element-show'}>
          {
            this.props.related.map((item, index) => (
              <span key={index} className="skill-badge skill-badge__related">
                {item.relatedtools} &nbsp;
                <span className="badge badge-light badge-delete">
                  <i className="material-icons">close</i>
                </span> 
              </span>
            ))
          }
        </div>
        
      </div>
    );
  }
}

export default connect( mapStateRelated, dispatchStateRelated )(Related);