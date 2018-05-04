import {firebaseConfig} from '../../../services/firebase';
import { getData } from '../../../utils';

const dispatchStateToProps = dispatch => {
  return {
    fetchProject: () => {
      let projectData = firebaseConfig.database().ref('/project');
      projectData.on('value', snapshot => {
        dispatch({ type: 'FETCH_PROJECT_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addProject: ( dataProject ) => {
      firebaseConfig.database().ref('project').push( dataProject, function(error){
        if( error ){
          dispatch( { type: 'ADD_PROJECT_ERROR' } );
        }else{
          dispatch( { type: 'ADD_PROJECT_SUCCESS' } );
        }
      })
    },
    deleteProject: (idProject, itemProject) => {
      firebaseConfig.database().ref('project').child(idProject).remove( function(error){
        if( error ){
          dispatch( {type: 'DELETE_PROJECT_ERROR', payload: error } );
        }else{
          dispatch( { type: 'DELETE_PROJECT_SUCCESS' } );
        }
      })
    }
  }
}

export default dispatchStateToProps;