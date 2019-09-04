import { createStore, applyMiddleware, Store, compose } from "redux";
import createSagaMiddleware, { END } from "redux-saga";

import rootReducer, { AppState } from "store/reducers";
import rootSaga from "store/sagas";

type SagaEnhancedStore<S> = Store<S> & {
  close: Function;
  runSaga: Function;
};

const configureStore = (initialState = {}): SagaEnhancedStore<AppState> => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  ) as SagaEnhancedStore<AppState>;

  store.close = () => store.dispatch(END);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
