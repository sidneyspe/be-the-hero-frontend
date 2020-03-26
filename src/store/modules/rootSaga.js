import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import incident from './incident/sagas';

export default function* rootsaga() {
  return yield all([auth, incident]);
}
