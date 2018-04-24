import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateRelated from '../../store/dashboard/related/mapStateAction';
import dispatchStateRelated from '../../store/dashboard/related/dispatchStateAction';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  relatedtools_name: ''
}

class Related extends Component {
  
  constructor( props ){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addRelatedTools = this.addRelatedTools.bind(this);
  }
  
  addRelatedTools(e){
    e.preventDefault();
    const { relatedtools_name } = this.state;
    let data_related = {
      relatedtools: relatedtools_name
    };
    this.props.addRelated( data_related );
    this.setState({relatedtools_name: ''});
  }

  componentWillMount() {
    this.props.fetchRelated();
  }
  
  render() {
    const { relatedtools_name } = this.state;
    const isInvalid = relatedtools_name ==='';
    return (
      <div className="col-md-6">
        <form onSubmit={this.addRelatedTools}>
          <div className="form-group">
            <label htmlFor="relatedtools-name">Related Development Tools</label>
            <input type="text" 
              className="form-control" 
              id="relatedtools-name" 
              placeholder="Example: git"
              value={relatedtools_name}
              onChange={event => this.setState(byPropKey('relatedtools_name', event.target.value))}/>
          </div>
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-success" type="submit">
              <span className="btn-element btn-element--left"><i className="material-icons">format_paint</i> </span>
              <span className="btn-element btn-element--right">&nbsp;Add Related Development Tools</span>
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