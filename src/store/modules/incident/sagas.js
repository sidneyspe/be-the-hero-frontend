/* eslint-disable no-alert */
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { incidentSuccess, incidentFailure } from './actions';

export function* list({ payload }) {
  try {
    const { search } = payload;
    const response = yield call(api.get, 'incidents', { params: search });

    const { data, total, pages } = response.data;

    yield put(incidentSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível carregar os casos');
    yield put(incidentFailure());
  }
}

export function* create({ payload }) {
  try {
    const { name } = payload;

    yield call(api.post, 'incidents', { name });

    const result = yield call(api.get, 'incidents');
    const { data, total, pages } = result.data;

    yield put(incidentSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível salvar o caso');
    yield put(incidentFailure());
  }
}

export function* edit({ payload }) {
  try {
    const { id, name } = payload;

    yield call(api.put, `incidents/${id}`, { name });

    const result = yield call(api.get, 'incidents');
    const { data, total, pages } = result.data;

    yield put(incidentSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível atualizar o caso');
    yield put(incidentFailure());
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `incidents/${id}`);

    const result = yield call(api.get, 'incidents');
    const { data, total, pages } = result.data;

    yield put(incidentSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível deletar o caso');
    yield put(incidentFailure());
  }
}

export default all([
  takeLatest('@incident/LIST_REQUEST', list),
  takeLatest('@incident/CREATE_REQUEST', create),
  takeLatest('@incident/EDIT_REQUEST', edit),
  takeLatest('@incident/DELETE_REQUEST', destroy),
]);
