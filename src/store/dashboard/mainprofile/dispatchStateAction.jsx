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
    fetchMainProfile: () => {
      let profileData = firebase.database().ref('/mainprofile');
      profileData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_MAIN_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    
    // code here

  }
}

export default dispatchStateToProps;
