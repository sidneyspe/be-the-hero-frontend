import { combineReducers } from 'redux';

import auth from './auth/reducer';
import incident from './incident/reducer';

export default combineReducers({
  auth,
  incident,
});
