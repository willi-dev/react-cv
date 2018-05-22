import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateProject from '../../store/cv/project/mapStateAction';
import dispatchStateProject from '../../store/cv/project/dispatchStateAction';
import Loading from '../general/Loading';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { byPropKey } from '../../utils';

const INITIAL_STATE = {
  project_name: '',
  project_company: '',
  project_period: '',
  project_description: '',
  modal: false, 
  selectedProject: '',
  selectedId: '',
}

class Project extends Component {
  
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addProject = this.addProject.bind(this);
  }

  addProject(e){
    e.preventDefault();
    const { project_name, project_company, project_period, project_description } = this.state;
    let data_project = {
      name: project_name,
      company: project_company,
      period: project_period,
      description: project_description,
    }
    this.props.addProject( data_project );
    this.setState({
      project_name: '',
      project_company: '',
      project_period: '',
      project_description: '',
    });
  }

  toggle = ( passData ) => e => {
    e.preventDefault();
    const { type, name, id } = passData;
    this.setState({
      modal: !this.state.modal,
      selectedProject: name,
      selectedId: id
    });
    if( type==='delete' ){
      this.props.deleteProject( id, name );
    }
  }

  componentWillMount() {
    this.props.fetchProject();
  }
  
  render() {
    const { project_name, project_company, project_period, project_description, modal, selectedProject, selectedId } = this.state;
    const isInvalid = project_name === '' || project_company ==='' || project_period === '' || project_description === '';
    // let dataReverse = this.props.project.reverse();
    return (
      <div>
        <h1 className="display-4 dashboard-title">Project</h1>
        <hr/>
        <form onSubmit={this.addProject}>
          <div className="form-group">
            <label htmlFor="project-name">Project Name</label>
            <input type="text" 
              className="form-control" 
              id="project-name" 
              placeholder="Example: Website Company Profile"
              value={project_name}
              onChange={event => this.setState(byPropKey('project_name', event.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="project-company">Company</label>
            <input type="text" 
              className="form-control" 
              id="project-company" 
              placeholder="Example: Mirum Agency"
              value={project_company}
              onChange={event => this.setState(byPropKey('project_company', event.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="project-period">Project Period</label>
            <input type="text" 
              className="form-control" 
              id="project-period" 
              placeholder="Example: January 2016 - February 2017"
              value={project_period}
              onChange={event => this.setState(byPropKey('project_period', event.target.value))}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="project-description">Project Description</label>
            <textarea className="form-control" 
              id="project-description" 
              rows="3"
              value={project_description}
              onChange={event => this.setState(byPropKey('project_description', event.target.value))}></textarea>
          </div>
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-primary" type="submit">
              <span className="btn-element btn-element--left"><i className="material-icons">assignment_turned_in</i></span>
              <span className="btn-element btn-element--right">&nbsp;Save Project</span>
            </button>
          </div>
        </form>
        <hr/>

        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={this.props.fetched && this.props.project.length > 0 ? 'element-show': 'element-hide'}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Project</th>
                <th scope="col">Company</th>
                <th scope="col">Period</th>
                <th scope="col">Description</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.project.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.company}</td>
                  <td>{item.period}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Action">
                      <button type="button" className="btn btn-secondary">
                        <i className="material-icons">mode_edit</i>
                      </button>
                      <button type="button" className="btn btn-warning" onClick={this.toggle({ type: 'open', name: item.name, id: item.key})}>
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
            <ModalHeader toggle={ this.toggle( {type:'close', name: '', id:''} ) }>Delete this project?</ModalHeader>
            <ModalBody>
              Project: {selectedProject}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={ this.toggle( {type:'delete', name: selectedProject, id: selectedId } ) }>Delete</Button>{' '}
              <Button color="secondary" onClick={ this.toggle( {type:'close', name: '', id: '' } ) }>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className={this.props.fetched && this.props.project.length === 0 ? 'element-show': 'element-hide'}>
          <div className="alert alert-warning">
            Projects Unavailable
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateProject, dispatchStateProject)(Project);