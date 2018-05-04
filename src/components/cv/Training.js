import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateTraining from '../../store/cv/training/mapStateAction';
import dispatchStateTraining from '../../store/cv/training/dispatchStateAction';
import Loading from '../general/Loading';

class Training extends Component {
  
  componentWillMount() {
    this.props.fetchTraining();
  }

  render(){
    return (
      <div className="container-component-outer">
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.training.length > 0 ? 'element-show': 'element-hide'} >
          {
            this.props.training.map((item, index)=>(
              <div key={index} className="container-component-inner">
                <p>{item.name}</p>
                <p>{item.place}</p>
                <p>{item.year}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStateTraining, dispatchStateTraining)(Training);
