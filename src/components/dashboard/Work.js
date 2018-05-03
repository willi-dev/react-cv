import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateWork from '../../store/cv/work/mapStateAction';
import dispatchStateWork from '../../store/cv/work/dispatchStateAction';
import Loading from '../general/Loading';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  position: '',
  company: '',
  period: '',
  work_description: '',
  modal: false,
  selectedWork: '',
  selectedId: ''
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
    this.props.addWork(data_work);
    this.setState({
      position: '',
      company: '',
      period: '',
      work_description: '',
    })
  }

  toggle = ( passData ) => e => {
    e.preventDefault();
    const { type, name, id } = passData;
    this.setState({
      modal: !this.state.modal,
      selectedWork: name, 
      selectedId: id
    })
    if( type==='delete' ){
      this.props.deleteWork( id, name );
    }
  }

  componentWillMount() {
    this.props.fetchWork();
  }
  
  render() {
    const { position, company, period, work_description, modal, selectedWork, selectedId } = this.state;
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
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.work.length > 0  ? 'element-show': 'element-hide'}>
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
                        <i className="material-icons">mode_edit</i>
                      </button>
                      <button type="button" className="btn btn-warning" onClick={this.toggle({ type: 'open', name: item.position, id: item.key })}>
                        <i className="material-icons">delete</i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
          <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={ this.toggle( {type:'close', name: '', id:''} ) }>Delete this work experience?</ModalHeader>
            <ModalBody>
              Work experience: {selectedWork}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={ this.toggle( {type:'delete', name: selectedWork, id: selectedId } ) }>Delete</Button>{' '}
              <Button color="secondary" onClick={ this.toggle( {type:'close', name: '', id: '' } ) }>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

        <div className={this.props.fetched && this.props.work.length === 0 ? 'element-show': 'element-hide'}>
          <div className="alert alert-warning">
            Work Experience Unavailable
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){

    // console.log( this.props );
  }
}

export default connect(mapStateWork, dispatchStateWork)(Work);