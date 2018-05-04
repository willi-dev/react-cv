import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateMain from '../../store/cv/mainprofile/mapStateAction';
import dispatchStateMain from '../../store/cv/mainprofile/dispatchStateAction';
import Loading from '../general/Loading';
import './Cv.css';

class MainProfile extends Component {
  
  componentWillMount(){
    this.props.fetchMainProfile();
  }

  render(){
    return (
      <div className="container-component-outer">
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.main.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.main.map((item, index)=>(
              <div key={index} className="container-component-inner">
                <p>Name: {item.nameProfile}</p>
                <p >Job title: {item.jobTitle}</p>
                <p>Phone: {item.phone}</p>
                <p>Address: {item.address}</p>
                <p>Linkedin: {item.linkedin}</p>
                <p>Github: {item.github}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);
