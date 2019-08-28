import { db } from '../../../services/firebase';
import { getData } from '../../../utils';

const dispatchStateToProps = dispatch => {
  return {
    fetchTraining: () => {
      let trainingData = db.ref('/training');
      trainingData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_TRAINING_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addTraining: (dataTraining) => {
      db.ref('training').push( dataTraining, function(error){
        if(error){
          dispatch({ type: 'ADD_TRAINING_ERROR', payload: error });
        }else{
          dispatch({ type: 'ADD_TRAINING_SUCCESS' });
        }
      })
    },
    deleteTraining: (idTraining, itemTraining ) => {
      db.ref('training').child(idTraining).remove( function( error ){
        if( error ){
          dispatch( { type: 'DELETE_TRAINING_ERROR', payload: error } );
        }else{
          dispatch( { type: 'DELETE_TRAINING_SUCCESS' });
        }
      })
    }
  }
}

export default dispatchStateToProps;