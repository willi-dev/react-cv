import {firebaseConfig} from '../../../services/firebase';
import { getData } from '../../../utils';

const dispatchStateToProps = dispatch => {
  return {
    fetchSkill: () => {
      let skillData = firebaseConfig.database().ref('/skill');
      skillData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_SKILL_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addSkill: (dataSkill) => {
      firebaseConfig.database().ref('skill').push(dataSkill, function(error){
        if( error ){
          dispatch( { type: 'ADD_SKILL_ERROR', payload: error } );
        }else{
          dispatch( { type: 'ADD_SKILL_SUCCESS' } );
        }
      })
    }, 
    deleteSkill: (idSkill, itemSkill) => {
      firebaseConfig.database().ref('skill').child(idSkill).remove( function( error ){
        if( error ){
          dispatch( { type: 'DELETE_SKILL_ERROR', payload: error });
        }else{
          dispatch( { type: 'DELETE_SKILL_SUCCESS' });
        }
      });
    }
  }
}

export default dispatchStateToProps;