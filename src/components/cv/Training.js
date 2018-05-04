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
    let dataReverse = this.props.training.reverse();
    return (
      <div className="container-component-outer">
        <h6>Training</h6>
        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.training.length > 0 ? 'element-show': 'element-hide'} >
          <ol>
          {
            dataReverse.map((item, index)=>(
              <li key={index}>
                <div className="container-component-inner">
                  <p className="black-text bold-text">{item.name} ({item.year})</p>
                  <p>{item.place}</p>
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

export default connect(mapStateTraining, dispatchStateTraining)(Training);
