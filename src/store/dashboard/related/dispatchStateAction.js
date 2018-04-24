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
    fetchRelated: () => {
      let relatedData = firebaseConfig.database().ref('/related');
      relatedData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_RELATED_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addRelated: ( dataRelated ) => {
      firebaseConfig.database().ref('related').push( dataRelated, function( error ){
        if( error ){
          dispatch( { type: 'ADD_RELATED_ERROR' } );
        }else{
          dispatch( { type: 'ADD_RELATED_SUCCESS' } );
        }
      })
    }    
    // code here

  }
}

export default dispatchStateToProps;