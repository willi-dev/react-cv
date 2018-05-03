import { combineReducers } from 'redux';

import authReducer from './auth/reducer';

import eduReducer from './cv/education/reducer';
import mainReducer from './cv/mainprofile/reducer';
import personalReducer from './cv/personaldetail/reducer';
import publicationReducer from './cv/publication/reducer';
import relatedReducer from './cv/related/reducer';
import skillReducer from './cv/skill/reducer';
import trainingReducer from './cv/training/reducer';
import workReducer from './cv/work/reducer';
import projectReducer from './cv/project/reducer';

export default combineReducers({
	auth: authReducer,
  edu: eduReducer,
  main: mainReducer,
  personal: personalReducer,
  publication: publicationReducer,
  related: relatedReducer,
  project: projectReducer,
  skill: skillReducer,
  training: trainingReducer,
  work: workReducer,
  
});
