import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateWork from '../../store/dashboard/work/mapStateAction';
import dispatchStateWork from '../../store/dashboard/work/dispatchStateAction';

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
  }
  componentWillMount() {
    this.props.fetchWork();
  }
  
  render() {
    const { position, company, period, work_description } = this.state;
    const isInvalid = position === '' || company === '' || period === '' || work_description === '';
    if( this.props.fetched ){
      console.log( this.props.work )
    }
    return (
      <div>
        
        <h1 className="display-4 dashboard-title">Work Experiences</h1>
        <hr/>
        <form>
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
              Save Work Experience
            </button>
          </div>
        </form>
        <hr/>

        {
          (!this.props.fetched) && (
             <p>loading</p>
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