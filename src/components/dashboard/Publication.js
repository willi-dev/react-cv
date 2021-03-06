import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePublication from '../../store/cv/publication/mapStateAction';
import dispatchStatePublication from '../../store/cv/publication/dispatchStateAction';
import Loading from '../general/Loading';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { byPropKey } from '../../utils';

const INITIAL_STATE = {
  publication_name: '',
  publication_description: '',
  publication_link: '',
  modal: false, 
  selectedPublication: '',
  selectedId: '',
}

class Publication extends Component {
  
  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE };
    this.addPublication = this.addPublication.bind(this);
  }

  addPublication(e){
    e.preventDefault();
    const { publication_name, publication_description, publication_link } = this.state;
    let data_publication = {
      publication: publication_name,
      description: publication_description,
      link: publication_link, 
    }
    this.props.addPublication(data_publication);
    this.setState({
      publication_name: '',
      publication_description: '',
      publication_link: '',
    })
  }
  
  toggle = ( passData ) => e => {
    e.preventDefault();
    const { type, publicationName, publicationId } = passData;
    this.setState({
      modal: !this.state.modal,
      selectedPublication: publicationName,
      selectedId: publicationId
    });
    if( type==='delete'){
      this.props.deletePublication( publicationId, publicationName );
    }
  }

  componentWillMount() {
    this.props.fetchPublication();
  }
  
  render() {
    const { publication_name, publication_description, publication_link, modal, selectedPublication, selectedId } = this.state;
    const isInvalid = publication_name ==='' || publication_description ==='' || publication_link ==='';

    return (
      <div>
        <h1 className="display-4 dashboard-title">Publication</h1>
        <hr/>
        <form onSubmit={this.addPublication}>
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
            <Loading />
           )
        }

        <div className={this.props.fetched && this.props.publication.length > 0 ? 'element-show': 'element-hide'}>
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
                        <i className="material-icons">mode_edit</i>
                      </button>
                       <button type="button" className="btn btn-warning" onClick={this.toggle( {type: 'open', publicationName: item.publication, publicationId: item.key } )}>
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
            <ModalHeader toggle={ this.toggle( {type:'close', publicationName: '', publicationId:''} ) }>Delete this Publication?</ModalHeader>
            <ModalBody>
              Publication: {selectedPublication}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={ this.toggle( {type:'delete', publicationName: selectedPublication, publicationId: selectedId } ) }>Delete</Button>{' '}
              <Button color="secondary" onClick={ this.toggle( {type:'close', publicationName: '', publicationId: '' } ) }>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className={this.props.fetched && this.props.publication.length === 0 ? 'element-show': 'element-hide'}>
          <div className="alert alert-warning">
            Publication Unavailable
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStatePublication, dispatchStatePublication)(Publication);