import { db } from '../../../services/firebase';
import { getData } from '../../../utils';

const dispatchStateToProps = dispatch => {
  return {
    fetchPersonal: () => {
      let personalData = db.ref('/personaldetail');
      personalData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_PERSONAL_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    
    // code here

  }
}

export default dispatchStateToProps;