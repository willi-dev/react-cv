import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateWork from '../../store/dashboard/work/mapStateAction';
import dispatchStateWork from '../../store/dashboard/work/dispatchStateAction';
import { firebaseConfig } from '../../services/firebase';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  position: '',
  company: '',
  period: '',
  work_description: '',
}

class Work extends Component {
   
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addWork = this.addWork.bind(this);
  }

  addWork(e){
    e.preventDefault();
    const { position, company, period, work_description } = this.state;
    let data_work = {
      position: position,
      company: company,
      period: period,
      description: work_description,
    }
    firebaseConfig.database().ref('work').push(data_work);
    this.setState({
      position: '',
      company: '',
      period: '',
      work_description: '',
    })
  }

  componentWillMount() {
    this.props.fetchWork();
  }
  
  render() {
    const { position, company, period, work_description } = this.state;
    const isInvalid = position === '' || company === '' || period === '' || work_description === '';
    
    return (
      <div>
        <h1 className="display-4 dashboard-title">Work Experiences</h1>
        <hr/>
        <form onSubmit={this.addWork}>
          <div className="form-group">
            <label htmlFor="work-position">Position</label>
            <input type="text" 
              className="form-control" 
              id="work-position" 
              placeholder="Example: Web Developer"
              value={position}
              onChange={event => this.setState(byPropKey('position', event.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="work-company">Company</label>
            <input type="text" 
              className="form-control" 
              id="work-company" 
              placeholder="Example: Mirum Agency"
              value={company}
              onChange={event => this.setState(byPropKey('company', event.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="work-period">Period</label>
            <input type="text" 
              className="form-control" 
              id="work-period" 
              placeholder="Example: January 2016 - February 2017"
              value={period}
              onChange={event => this.setState(byPropKey('period', event.target.value))}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="work-description">Work Description</label>
            <textarea 
              className="form-control" 
              id="work-description" 
              rows="3"
              value={work_description}
              onChange={event => this.setState(byPropKey('work_description', event.target.value))}></textarea>
          </div>
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-primary" type="submit">
              <span className="btn-element btn-element--left"><i className="material-icons">work</i> </span>
              <span className="btn-element btn-element--right">&nbsp;Save Work Experience</span>
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
        <div className={!this.props.fetched ? 'element-hide': 'element-show'}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Position</th>
                <th scope="col">Company</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.work.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.position}</td>
                  <td>{item.company}</td>
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

      </div>
    );
  }

  componentDidMount(){

    // console.log( this.props );
  }
}

export default connect(mapStateWork, dispatchStateWork)(Work);