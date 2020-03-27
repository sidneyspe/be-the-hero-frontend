import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import incident from './incident/sagas';
import ong from './ong/sagas';
import profile from './profile/sagas';

export default function* rootsaga() {
  return yield all([auth, incident, ong, profile]);
}
