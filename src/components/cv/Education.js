import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateEdu from '../../store/cv/education/mapStateAction';
import dispatchStateEdu from '../../store/cv/education/dispatchStateAction';
import Loading from '../general/Loading';
import './Cv.css';
class Education extends Component {
  
  componentWillMount(){
    this.props.fetchEducation();
  }

  render(){
    return (
      <div className="container-component-outer">
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.edu.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.edu.map((item, index)=>(
              <div key={index} className="container-component-inner">
                <p>{item.school}</p>
                <p>{item.period}</p>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStateEdu, dispatchStateEdu)(Education);
