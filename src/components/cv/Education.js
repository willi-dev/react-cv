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
    let dataReverse = this.props.edu.reverse();
    return (
      <div className="container-component-outer">
        <h6>Education</h6>
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.edu.length > 0 ? 'element-show': 'element-hide'} >
          <ol>
          {
            dataReverse.map((item, index)=>(
              <li key={index}>
                <div className="container-component-inner">
                  <p className="black-text bold-text">{item.school} ({item.period})</p>
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

export default connect(mapStateEdu, dispatchStateEdu)(Education);
