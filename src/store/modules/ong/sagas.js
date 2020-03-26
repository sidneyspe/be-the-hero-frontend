/* eslint-disable no-alert */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

import { ongSuccess, ongFailure } from './actions';

export function* list({ payload }) {
  try {
    const { search } = payload;
    const response = yield call(api.get, 'ongs', { params: search });

    const { data, total, pages } = response.data;

    yield put(ongSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível carregar as ongs');
    yield put(ongFailure());
  }
}

export function* create({ payload }) {
  try {
    const { ong } = payload;
    const { name, email, whatsapp, city, uf } = ong;

    yield call(api.post, 'ongs', { name, email, whatsapp, city, uf });

    const result = yield call(api.get, 'ongs');
    const { data, total, pages } = result.data;

    yield put(ongSuccess(data, total, pages));
    history.push('/');
  } catch (err) {
    const message = err.response.data.error;
    alert(message);
    yield put(ongFailure());
  }
}

export function* edit({ payload }) {
  try {
    const { id, ong } = payload;
    const { name, email, whatsapp, city, uf } = ong;

    yield call(api.put, `ongs/${id}`, { name, email, whatsapp, city, uf });

    const result = yield call(api.get, 'ongs');
    const { data, total, pages } = result.data;

    yield put(ongSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível atualizar a ong');
    yield put(ongFailure());
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `ongs/${id}`);

    const result = yield call(api.get, 'ongs');
    const { data, total, pages } = result.data;

    yield put(ongSuccess(data, total, pages));
  } catch (err) {
    alert('Não foi possível deletar a ong');
    yield put(ongFailure());
  }
}

export default all([
  takeLatest('@ong/LIST_REQUEST', list),
  takeLatest('@ong/CREATE_REQUEST', create),
  takeLatest('@ong/EDIT_REQUEST', edit),
  takeLatest('@ong/DELETE_REQUEST', destroy),
]);
