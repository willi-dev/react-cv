import {firebaseConfig} from '../../../services/firebase';
import { getData } from '../../../utils';

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
