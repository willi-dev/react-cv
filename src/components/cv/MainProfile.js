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
        <h4>Willi</h4>
        <h6>Frontend Developer</h6>
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.main.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.main.map((item, index)=>(
              <div key={index} className="container-component-inner">
                
                <p >Job title: {item.jobTitle}</p>
                <p>Phone: {item.phone}</p>
                <p>Address: {item.address}</p>
                <p>Linkedin: <a href={item.linkedin} target="_blank">{item.linkedin}</a></p>
                <p>Github: <a href={item.github} target="_blank">{item.github}</a></p>
                <p>Blog: <a href={item.blog} target="_blank">{item.blog}</a></p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);
