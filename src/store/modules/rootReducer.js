import { combineReducers } from 'redux';

import auth from './auth/reducer';
import incident from './incident/reducer';
import ong from './ong/reducer';
import profile from './profile/reducer';

export default combineReducers({
  auth,
  incident,
  ong,
  profile,
});
