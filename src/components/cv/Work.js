import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateWork from '../../store/cv/work/mapStateAction';
import dispatchStateWork from '../../store/cv/work/dispatchStateAction';
import Loading from '../general/Loading';

class Work extends Component {
  
  componentWillMount() {
    this.props.fetchWork();
  }

  render(){
    return (
      <div className="container-component-outer">
        <h6>Work Experience</h6>
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.work.length > 0 ? 'element-show': 'element-hide'} >
          <ol>
          {
            this.props.work.map((item, index) => (
              <li key={index} >
              <div className="container-component-inner">
                <p>{item.position}</p>
                <p>{item.company}</p>
                <p>{item.periode}</p>
                <p>{item.description}</p>
              </div>
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    );
  }

}

export default connect(mapStateWork, dispatchStateWork)(Work);
