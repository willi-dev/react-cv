import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateRelated from '../../store/dashboard/related/mapStateAction';
import dispatchStateRelated from '../../store/dashboard/related/dispatchStateAction';
import Loading from '../general/Loading';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  relatedtools_name: '',
  modal: false,
  selectedTool: '',
  selectedId: '',
}

class Related extends Component {
  
  constructor( props ){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addRelatedTools = this.addRelatedTools.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  
  addRelatedTools(e){
    e.preventDefault();
    const { relatedtools_name } = this.state;
    let data_related = {
      relatedtools: relatedtools_name
    };
    this.props.addRelated( data_related );
    this.setState({relatedtools_name: ''});
  }

  componentWillMount() {
    this.props.fetchRelated();
  }

  toggle = (passData) => e => {
    e.preventDefault();
    const { type, tool, id } = passData;
    this.setState({
      modal: !this.state.modal,
      selectedTool: tool,
      selectedId: id
    });
    if( type === 'delete' ){
      this.props.deleteRelated( id, tool );
    }
  }
  
  render() {
    const { relatedtools_name, modal, selectedTool, selectedId } = this.state;
    const isInvalid = relatedtools_name ==='';
    return (
      <div className="col-md-6">
        <form onSubmit={this.addRelatedTools}>
          <div className="form-group">
            <label htmlFor="relatedtools-name">Related Development Tools</label>
            <input type="text" 
              className="form-control" 
              id="relatedtools-name" 
              placeholder="Example: git"
              value={relatedtools_name}
              onChange={event => this.setState(byPropKey('relatedtools_name', event.target.value))}/>
          </div>
          <div className="form-group">
            <button disabled={isInvalid} className="btn btn-success" type="submit">
              Add Related Development Tools
            </button>
          </div>
        </form>
        <hr/>

        {
          (!this.props.fetched) && (
            <Loading />
           )
        }
        <div className={!this.props.fetched ? 'element-hide': 'element-show'}>
          {
            this.props.related.map((item, index) => (
              <span key={index} className="skill-badge skill-badge__related">
                {item.relatedtools} &nbsp;
                <span className="badge badge-light badge-delete" onClick={ this.toggle({type: 'open', tool: item.relatedtools, id: item.key }) }>
                  <i className="material-icons">close</i>
                </span> 
              </span>
            ))
          }
        </div>

        <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={ this.toggle( {type:'close', tool: '', id:''} ) }>Delete this related tool?</ModalHeader>
          <ModalBody>
            Related Tool: {selectedTool}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={ this.toggle( {type:'delete', tool: selectedTool, id: selectedId } ) }>Delete</Button>{' '}
            <Button color="secondary" onClick={ this.toggle( {type:'close', tool: '', id: '' } ) }>Cancel</Button>
          </ModalFooter>
        </Modal>
        
      </div>
    );
  }
}

export default connect( mapStateRelated, dispatchStateRelated )(Related);