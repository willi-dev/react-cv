import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStateMain from '../../store/cv/mainprofile/mapStateAction';
// import dispatchStateMain from '../../store/cv/mainprofile/dispatchStateAction';
import mapStateMain from '../../store/dashboard/mainprofile/mapStateAction';
import dispatchStateMain from '../../store/dashboard/mainprofile/dispatchStateAction';
import Loading from '../general/Loading';

class MainProfile extends Component {
  
  componentWillMount(){
    this.props.fetchMainProfile();
  }

  render(){
    return (
      <div style={{fontFamily: 'courier new'}}>
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.main.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.main.map((item, index)=>(
              <div id={index} style={{fontSize: 12+'px'}}>
                <p style={{margin: 0}}>name: {item.nameProfile}</p>
                <p style={{margin: 0}}>job title: {item.jobTitle}</p>
                <p style={{margin: 0}}>phone: {item.phone}</p>
                <p style={{margin: 0}}>address: {item.address}</p>
                <p style={{margin: 0}}>linkedin: {item.linkedin}</p>
                <p style={{margin: 0}}>github: {item.github}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);
