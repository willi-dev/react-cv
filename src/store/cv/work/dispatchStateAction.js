import { db } from '../../../services/firebase';
import { getData } from '../../../utils';

const dispatchStateToProps = dispatch => {
  return {
    fetchWork: () => {
      let workData = db.ref('/work');
      workData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_WORK_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addWork: (dataWork) => {
      db.ref('work').push(dataWork, function( error ){
        if( error ){
          dispatch( { type: 'ADD_WORK_ERROR', payload: error } );
        }else{
          dispatch( { type: 'ADD_WORK_SUCCESS' } );
        }
      })
    },
    deleteWork: (idWork, itemWork) => {
      db.ref('work').child(idWork).remove( function( error ){
        if( error ){
          dispatch({ type: 'DELETE_WORK_ERROR', payload: error })
        }else{
          dispatch({ type: 'DELETE_WORK_SUCCES' })
        }
      } );
    }

  }
}

export default dispatchStateToProps;