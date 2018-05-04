import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateRelated from '../../store/cv/related/mapStateAction';
import dispatchStateRelated from '../../store/cv/related/dispatchStateAction';
import Loading from '../general/Loading';

class Related extends Component {
  
  componentWillMount() {
    this.props.fetchRelated();
  }

  render(){
    return (
      <div className="container-component-outer">
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.related.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.related.map((item, index) => (
              <span key={index}>{item.relatedtools} &nbsp;</span>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect( mapStateRelated, dispatchStateRelated )(Related);
