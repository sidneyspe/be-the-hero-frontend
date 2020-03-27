/* eslint-disable no-alert */
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { profileSuccess, profileFailure } from './actions';

export function* list({ payload }) {
  try {
    const { search } = payload;
    const response = yield call(api.get, 'profile', { params: search });

    const { data, total, pages } = response.data;

    yield put(profileSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível carregar os casos');
    yield put(profileFailure());
  }
}

export function* create({ payload }) {
  try {
    const { name } = payload;

    yield call(api.post, 'profile', { name });

    const result = yield call(api.get, 'profile');
    const { data, total, pages } = result.data;

    yield put(profileSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível salvar o caso');
    yield put(profileFailure());
  }
}

export function* edit({ payload }) {
  try {
    const { id, name } = payload;

    yield call(api.put, `profile/${id}`, { name });

    const result = yield call(api.get, 'profile');
    const { data, total, pages } = result.data;

    yield put(profileSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível atualizar o caso');
    yield put(profileFailure());
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `profile/${id}`);

    const result = yield call(api.get, 'profile');
    const { data, total, pages } = result.data;

    yield put(profileSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível deletar o caso');
    yield put(profileFailure());
  }
}

export default all([
  takeLatest('@profile/LIST_REQUEST', list),
  takeLatest('@profile/CREATE_REQUEST', create),
  takeLatest('@profile/EDIT_REQUEST', edit),
  takeLatest('@profile/DELETE_REQUEST', destroy),
]);
