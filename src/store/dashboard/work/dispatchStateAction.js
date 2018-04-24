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
    fetchWork: () => {
      let workData = firebaseConfig.database().ref('/work');
      workData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_WORK_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addWork: (dataWork) => {
      firebaseConfig.database().ref('work').push(dataWork, function( error ){
        if( error ){
          dispatch( { type: 'ADD_WORK_ERROR' } );
        }else{
          dispatch( { type: 'ADD_WORK_SUCCESS' } );
        }
      })
    }
    
    // code here

  }
}

export default dispatchStateToProps;