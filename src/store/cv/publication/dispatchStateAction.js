import { db } from '../../../services/firebase';
import { getData } from '../../../utils';

const dispatchStateToProps = dispatch => {
  return {
    fetchPublication: () => {
      let publicationData = db.ref('/publication');
      publicationData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_PUBLICATION_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addPublication: ( dataPublication ) => {
      db.ref('publication').push(dataPublication, function(error){
        if(error){
          dispatch({ type: 'ADD_PUBLICATON_ERROR' });
        }else{
          dispatch({ type: 'ADD_PUBLICATION_SUCCESS' });
        }
      });
    },
    deletePublication: (idPublication, itemPublication) => {
      db.ref('publication').child(idPublication).remove( function( error ){
        if( error ){
          dispatch( { type: 'DELETE_PUBLICATION_ERROR', payload: error });
        }else{
          dispatch( { type: 'DELETE_PUBLICATION_SUCCESS' } );
        }
      })
    }
  }
}

export default dispatchStateToProps;