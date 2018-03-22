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
    fetchPublication: () => {
      let publicationData = firebase.database().ref('/publication');
      publicationData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_PUBLICATION_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    
    // code here

  }
}

export default dispatchStateToProps;