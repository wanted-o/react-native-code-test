import { put, call, takeLatest } from 'redux-saga/effects';
import { getUsersSuccess, getUsersFailure, GET_USERS_ATTEMPT } from '../actions/index';
import getUsers from './api';

function* usersSaga(prop) {
  try {
    const data = yield call(getUsers, prop.page);
    if (data.data.length > 0) {
      yield put(getUsersSuccess(data));
    } else {
      yield put(getUsersFailure('No more users'));
    }
  } catch (error) {
    yield put(getUsersFailure(error.msg));
    console.log('error log: ', error);
  }
}

export default function* mySagas() {
  yield takeLatest(GET_USERS_ATTEMPT, usersSaga);
}
