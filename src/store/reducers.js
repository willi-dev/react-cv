import { combineReducers } from 'redux';

import authReducer from './auth/reducer';

import eduReducer from './dashboard/education/reducer';
import mainReducer from './dashboard/mainprofile/reducer';
import personalReducer from './dashboard/personaldetail/reducer';
import publicationReducer from './dashboard/publication/reducer';
import relatedReducer from './dashboard/related/reducer';
import skillReducer from './dashboard/skill/reducer';
import trainingReducer from './dashboard/training/reducer';
import workReducer from './dashboard/work/reducer';
import projectReducer from './dashboard/project/reducer';

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
