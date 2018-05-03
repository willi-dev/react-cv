import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateSkill from '../../store/dashboard/skill/mapStateAction';
import dispatchStateSkill from '../../store/dashboard/skill/dispatchStateAction';
import Loading from '../general/Loading';
import Related from './Related';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  skill_name: '',
  modal: false,
  selectedSkill: '',
  selectedId: '',
}

class Skill extends Component {
  
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
    this.addSkill = this.addSkill.bind(this);
  }

  addSkill(e){
    e.preventDefault();
    const { skill_name } = this.state;
    let data_skill = {
      skill: skill_name
    };
    this.props.addSkill( data_skill );
    this.setState({skill_name: ''});
  }

  componentWillMount() {
    this.props.fetchSkill();
  }

  toggle = (passData) => e => {
    e.preventDefault();
    const { type, skill, id } = passData;
    this.setState({
      modal: !this.state.modal,
      selectedSkill: skill,
      selectedId: id
    });
    if( type === 'delete' ){
      // do action 
      this.props.deleteSkill(id, skill);
    }
  }

  render() {
    const { skill_name, modal, selectedSkill, selectedId } = this.state;
    const isInvalid = skill_name === '';
    return (
      <div>
        <h1 className="display-4 dashboard-title">Skill</h1>
          <hr/>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.addSkill}>
                <div className="form-group">
                  <label htmlFor="skill-name">Skill</label>
                  <input type="text" 
                    className="form-control" 
                    id="skill-name" 
                    placeholder="Example: PHP"
                    value={skill_name}
                    onChange={event => this.setState(byPropKey('skill_name', event.target.value))}/>
                </div>
                <div className="form-group">
                  <button disabled={isInvalid} className="btn btn-primary" type="submit">
                    Add Skill
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
                  this.props.skill.map( (item, index) => (
                    <span key={index} className="skill-badge skill-badge__primary" > 
                      {item.skill} &nbsp;
                      <span className="badge badge-light badge-delete" onClick={ this.toggle( {type:'open', skill: item.skill, id: item.key } ) }>
                        <i className="material-icons">close</i>
                      </span> 
                    </span>
                  ))
                }
                
              </div>

              <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={ this.toggle( {type:'close', skill: '', id:''} ) }>Delete this skill?</ModalHeader>
                <ModalBody>
                  Skill: {selectedSkill}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={ this.toggle( {type:'delete', skill: selectedSkill, id: selectedId } ) }>Delete</Button>{' '}
                  <Button color="secondary" onClick={ this.toggle( {type:'close', skill: '', id: '' } ) }>Cancel</Button>
                </ModalFooter>
              </Modal>

            </div>
            
            <Related />
          </div>

          
      </div>
    );
  }
}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);