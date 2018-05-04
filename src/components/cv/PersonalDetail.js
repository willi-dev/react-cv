import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePersonal from '../../store/cv/personaldetail/mapStateAction';
import dispatchStatePersonal from '../../store/cv/personaldetail/dispatchStateAction';
import Loading from '../general/Loading';
import './Cv.css';

class PersonalDetail extends Component {
  
  componentWillMount(){
    this.props.fetchPersonal();
  }

  render(){
    return (
      <div className="container-component-outer">
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.personal.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.personal.map((item, index)=>(
              <div key={index} className="container-component-inner">
                <p>Place, Date of Birth: {item.placeBirth}, {item.dateOfBirth}</p>
                <p>Gender: {item.gender}</p>
                <p>Language: {item.language}</p>
                <p>Religion: {item.religion}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStatePersonal, dispatchStatePersonal)(PersonalDetail);
