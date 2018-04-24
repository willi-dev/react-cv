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
    fetchEducation: () => {
      let educationData = firebaseConfig.database().ref('/education');
      educationData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_EDU_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addEducation: ( dataEdu ) => {
      firebaseConfig.database().ref('education').push(dataEdu, function(error){
        if( error ){
          dispatch( { type: 'ADD_EDU_ERROR' } );
        }else {
          dispatch( { type: 'ADD_EDU_SUCCESS' } );
        }
      })
    }
    // code here

  }
}

export default dispatchStateToProps;