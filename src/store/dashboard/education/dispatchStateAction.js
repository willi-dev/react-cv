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
    
    // code here

  }
}

export default dispatchStateToProps;