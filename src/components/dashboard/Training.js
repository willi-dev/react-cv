import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateTraining from '../../store/dashboard/training/mapStateAction';
import dispatchStateTraining from '../../store/dashboard/training/dispatchStateAction';
import { firebaseConfig } from '../../services/firebase';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  name: '',
  place: '',
  year: '',
}

class Training extends Component {
  
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addTraining = this.addTraining.bind(this);
  }
  
  addTraining(e){
    e.preventDefault();
    const { name, place, year } = this.state;
    let data_training = {
      name: name,
      place: place,
      year: year
    }
    firebaseConfig.database().ref('training').push(data_training);
    this.setState({ name: '', place: '', year: '' });
  }

  componentWillMount() {
    this.props.fetchTraining();
  }
  
  render(){
    const { name, place, year } = this.state;
    const isInvalid = name ==='' || place === '' || year === '';
    return (
      <div>
        <h1 className="display-4 dashboard-title">Training</h1>
        <hr/>
        <form onSubmit={this.addTraining}> 
          <div className="form-group">
            <label htmlFor="training-name">Training Name</label>
            <input type="text" 
              className="form-control" 
              id="training-name" 
              placeholder="Example: Pelatihan dasar action script 2.0"
              value={name}
              onChange={event => this.setState(byPropKey('name', event.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="training-place">Training Place</label>
            <input type="text" 
              className="form-control" 
              id="training-place" 
              placeholder="Example: Ilmu Komputer UPI Bandung"
              value={place}
              onChange={event => this.setState(byPropKey('place', event.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="training-year">Year</label>
            <input type="text" 
            className="form-control" 
            id="training-year" 
            placeholder="Example: 2012"
            value={year}
            onChange={event => this.setState(byPropKey('year', event.target.value))}/>
          </div>
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-primary" type="submit">
              Save Training
            </button>
          </div>
        </form>

        <hr/>

        {
          (!this.props.fetched) && (
            <div className="loading-container">
              <div className="spinner"></div>
            </div>
           )
        }

        <div className={!this.props.fetched && this.props.training.length > 0 ? 'element-hide': 'element-show'}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Place</th>
                <th scope="col">Year</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.training.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.year}</td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Action">
                      <button type="button" className="btn btn-secondary">
                        <i className="material-icons">delete</i>
                      </button>
                      <button type="button" className="btn btn-secondary">
                        <i className="material-icons">mode_edit</i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
        <div className={this.props.fetched && this.props.training.length === 0 ? 'element-show': 'element-hide'}>
          <div className="alert alert-warning">
            Training Unavailable
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateTraining, dispatchStateTraining)(Training);