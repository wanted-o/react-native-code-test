
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { middleware } from './app/utils/redux';
import sagas from './app/sagas';
import AppReducer from './app/reducers';

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, middleware];

  const store = createStore(AppReducer, initialState, compose(applyMiddleware(...middlewares)));

  sagaMiddleware.run(sagas);

  return store;
};

