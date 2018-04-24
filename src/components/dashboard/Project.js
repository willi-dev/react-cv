import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateProject from '../../store/dashboard/project/mapStateAction';
import dispatchStateProject from '../../store/dashboard/project/dispatchStateAction';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  project_name: '',
  project_company: '',
  project_period: '',
  project_description: '',
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

  componentWillMount() {
    this.props.fetchProject();
  }
  
  render() {
    const { project_name, project_company, project_period, project_description } = this.state;
    const isInvalid = project_name === '' || project_company ==='' || project_period === '' || project_description === '';
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
            <div className="loading-container">
              <div className="spinner"></div>
            </div>
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