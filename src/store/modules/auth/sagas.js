/* eslint-disable no-alert */
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'sessions', {
      username,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      alert(
        'Login inválido, Você não tem permissão para acessar essa aplicação'
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    alert('Falha na autenticação, Erro ao logar. Verifique os dados.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
