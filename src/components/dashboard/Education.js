import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateEdu from '../../store/cv/education/mapStateAction';
import dispatchStateEdu from '../../store/cv/education/dispatchStateAction';
import Loading from '../general/Loading';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { byPropKey } from '../../utils';

const INITIAL_STATE = {
  school: '',
  edu_period: '',
  edu_description: '',
  modal: false, 
  selectedEducation: '',
  selectedId: '',
}

class Education extends Component {
  
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addEducation = this.addEducation.bind(this);
  }
  
  addEducation(e){
    e.preventDefault();
    const {school, edu_period, edu_description} = this.state;
    let data_education = {
      description: edu_description,
      period: edu_period,
      school: school,
    }
    this.props.addEducation( data_education );
    this.setState({
      school: '',
      edu_period: '',
      edu_description: '',
    })
  }

  toggle = ( passData ) => e => {
    e.preventDefault();
    const { type, name, id } = passData;
    this.setState({
      modal: !this.state.modal,
      selectedEducation: name,
      selectedId: id
    });
    if( type==='delete' ){
      this.props.deleteEducation(id, name);
    }
  }

  componentWillMount() {
    this.props.fetchEducation();
  }

  render() {
    const { school, edu_period, edu_description, modal, selectedEducation, selectedId } = this.state;
    const isInvalid = school === '' || edu_period === '' || edu_description === '';

    return (
      <div>
        <h1 className="display-4 dashboard-title">Education</h1>
        <hr/>
        <form onSubmit={this.addEducation}>
          <div className="form-group">
            <label htmlFor="education-school">School</label>
            <input type="text" 
              className="form-control" 
              id="education-school" 
              placeholder="Example: SMA Negeri 19 Bandung"
              value={school}
              onChange={event => this.setState(byPropKey('school', event.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="education-period">Education Period</label>
            <input type="text" 
              className="form-control" 
              id="education-period" 
              placeholder="Example: January 2016 - February 2017"
              value={edu_period}
              onChange={event => this.setState(byPropKey('edu_period', event.target.value))}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="education-description">Education Description</label>
            <textarea className="form-control" 
              id="work-description" 
              rows="3"
              value={edu_description}
              onChange={event => this.setState(byPropKey('edu_description', event.target.value))}></textarea>
          </div>
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-primary" type="submit">
              <span className="btn-element btn-element--left"><i className="material-icons">school</i></span>
              <span className="btn-element btn-element--right">&nbsp;Save Education</span>
            </button>
          </div>
        </form>

        <hr/>

        {
          (!this.props.fetched) && (
            <Loading />
           )
        }

        <div className={this.props.fetched && this.props.edu.length > 0 ? 'element-show': 'element-hide'}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">School</th>
                <th scope="col">Period</th>
                <th scope="col">Description</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.edu.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.school}</td>
                  <td>{item.period}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Action">
                      <button type="button" className="btn btn-secondary">
                        <i className="material-icons">mode_edit</i>
                      </button>
                      <button type="button" className="btn btn-warning" onClick={this.toggle({ type: 'open', name: item.school, id: item.key })}>
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
            <ModalHeader toggle={ this.toggle( {type:'close', name: '', id:''} ) }>Delete this education?</ModalHeader>
            <ModalBody>
              Education: {selectedEducation}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={ this.toggle( {type:'delete', name: selectedEducation, id: selectedId } ) }>Delete</Button>{' '}
              <Button color="secondary" onClick={ this.toggle( {type:'close', name: '', id: '' } ) }>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className={this.props.fetched && this.props.edu.length === 0 ? 'element-show': 'element-hide'}>
          <div className="alert alert-warning">
            Education Unavailable
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateEdu, dispatchStateEdu)(Education);