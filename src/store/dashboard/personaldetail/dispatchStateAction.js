import firebase from '../../../services/firebaseConfig';
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
    fetchPersonal: () => {
      let personalData = firebase.database().ref('/personaldetail');
      personalData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_PERSONAL_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    
    // code here

  }
}

export default dispatchStateToProps;