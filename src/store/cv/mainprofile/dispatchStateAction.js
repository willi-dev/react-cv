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
    // fetch main profile data
    fetchMainProfile: () => {
      let profileData = firebaseConfig.database().ref('/mainprofile');
      profileData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_MAIN_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    // add main profile data
    addMainProfile: () => {

    },
    
    editMainProfile: () => {
      dispatch({ type: 'EDIT_MAIN_PROFILE' })
    },

    cancelEditMainProfile: () => {
      dispatch({ type: 'CANCEL_EDIT_MAIN_PROFILE' })
    }

  }
}

export default dispatchStateToProps;
