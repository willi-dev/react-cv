import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateProject from '../../store/cv/project/mapStateAction';
import dispatchStateProject from '../../store/cv/project/dispatchStateAction';
import Loading from '../general/Loading';

class Project extends Component {
  
  componentWillMount() {
    this.props.fetchProject();
  }

  render(){
    return (
      <div className="container-component-outer">
        <h6>Project</h6>
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.project.length > 0 ? 'element-show': 'element-hide'} >
          <ol>
          {
            this.props.project.map((item, index) => (
              <li key={index}>
              <div className="container-component-inner">
                <p>{item.name}</p>
                <p>{item.company}</p>
                <p>{item.period}</p>
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

export default connect(mapStateProject, dispatchStateProject)(Project);
