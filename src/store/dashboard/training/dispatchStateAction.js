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
    fetchTraining: () => {
      let trainingData = firebaseConfig.database().ref('/training');
      trainingData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_TRAINING_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addTraining: (dataTraining) => {
      firebaseConfig.database().ref('training').push( dataTraining, function(error){
        if(error){
          dispatch({ type: 'ADD_TRAINING_ERROR' });
        }else{
          dispatch({ type: 'ADD_TRAINING_SUCCESS' });
        }
      })
    }
    // code here

  }
}

export default dispatchStateToProps;