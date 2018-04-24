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
    fetchSkill: () => {
      let skillData = firebaseConfig.database().ref('/skill');
      skillData.on('value', snapshot =>{
        dispatch({ type: 'FETCH_SKILL_FULFILLED', payload: getData( snapshot.val() )});
      });
    },
    addSkill: (dataSkill) => {
      firebaseConfig.database().ref('skill').push(dataSkill, function(error){
        if( error ){
          dispatch( { type: 'ADD_SKILL_ERROR' } );
        }else{
          dispatch( { type: 'ADD_SKILL_SUCCESS' } );
        }
      })
    }
    // code here

  }
}

export default dispatchStateToProps;