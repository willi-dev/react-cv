import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePublication from '../../store/cv/publication/mapStateAction';
import dispatchStatePublication from '../../store/cv/publication/dispatchStateAction';
import Loading from '../general/Loading';

class Publication extends Component {
  
  componentWillMount() {
    this.props.fetchPublication();
  }

  render(){
    return (
      <div className="container-component-outer last">
        <h6>Publication</h6>
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.publication.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.publication.map((item, index) => (
              <div key={index} className="container-component-inner">
                <p>{item.publication}</p>
                <p>{item.description}</p>
                <p>{item.link}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStatePublication, dispatchStatePublication)(Publication);
