import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePublication from '../../store/dashboard/publication/mapStateAction';
import dispatchStatePublication from '../../store/dashboard/publication/dispatchStateAction';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  publication_name: '',
  publication_description: '',
  publication_link: '',
}

class Publication extends Component {
  
  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentWillMount() {
    this.props.fetchPublication();
  }
  
  render() {
    const { publication_name, publication_description, publication_link } = this.state;
    const isInvalid = publication_name ==='' || publication_description ==='' || publication_link ==='';

    return (
      <div>
        <h1 className="display-4 dashboard-title">Publication</h1>
        <hr/>
        <form>
          <div className="form-group">
            <label htmlFor="publication-name">Publication</label>
            <input type="text" 
              className="form-control" 
              id="publication-name" 
              placeholder="Example: Undergraduate Thesis"
              value={publication_name}
              onChange={event => this.setState(byPropKey('publication_name', event.target.value))}/>
          </div>

          <div className="form-group">
            <label htmlFor="publication-description">Publication Description</label>
            <textarea className="
              form-control" 
              id="publication-description" 
              rows="3"
              value={publication_description}
              onChange={event => this.setState(byPropKey('publication_description', event.target.value))}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="publication-link">Link Publication</label>
            <input type="text" 
              className="form-control" 
              id="publication-link" 
              placeholder="Example: http://repository.upi.edu/14288/"
              value={publication_link}
              onChange={event => this.setState(byPropKey('publication_link', event.target.value))}/>
          </div>
          
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-primary" type="submit">
              Submit
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
                <th scope="col">Publication</th>
                <th scope="col">Description</th>
                <th scope="col">Link</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.publication.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.publication}</td>
                  <td>{item.description}</td>
                  <td>{item.link}</td>
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
}

export default connect(mapStatePublication, dispatchStatePublication)(Publication);