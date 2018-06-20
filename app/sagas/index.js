import { all } from 'redux-saga/effects';
import users from './users';

export default function* sagas() {
  yield all([
    users(),
  ]);
}
