import {firebaseConfig} from '../../../services/firebase';
import _ from 'lodash';

const getData = values => {
  let dataVal = values;
  let data = _(dataVal)
                  .keys()
                  .map( dataKey => {
                    let cloned = _.clone(dataVal[dataKey]);
                    cloned.key = dataKey;
                    return cloned;
                  })
                  .value();
  return data;
}

const dispatchStateToProps = dispatch => {
  return {
    fetchPublication: () => {
      let publicationData = firebaseConfig.database().ref('/publication');
      publicationData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_PUBLICATION_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addPublication: ( dataPublication ) => {
      firebaseConfig.database().ref('publication').push(dataPublication, function(error){
        if(error){
          dispatch({ type: 'ADD_PUBLICATON_ERROR' });
        }else{
          dispatch({ type: 'ADD_PUBLICATION_SUCCESS' });
        }
      });
    },
    deletePublication: (idPublication, itemPublication) => {
      firebaseConfig.database().ref('publication').child(idPublication).remove( function( error ){
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