import { db } from '../../../services/firebase';
import { getData } from '../../../utils';

const dispatchStateToProps = dispatch => {
  return {
    fetchRelated: () => {
      let relatedData = db.ref('/related');
      relatedData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_RELATED_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addRelated: ( dataRelated ) => {
      db.ref('related').push( dataRelated, function( error ){
        if( error ){
          dispatch( { type: 'ADD_RELATED_ERROR' } );
        }else{
          dispatch( { type: 'ADD_RELATED_SUCCESS' } );
        }
      })
    },
    deleteRelated: (idTool, itemTool) => {
      db.ref('related').child(idTool).remove( function( error ) {
        if( error ){
          dispatch( { type: 'DELETE_RELATED_ERROR', payload: error } );
        }else{
          dispatch( { type: 'DELETE_RELATED_SUCCESS' });
        }
      });
    }

  }
}

export default dispatchStateToProps;