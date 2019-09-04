import { all, fork } from "redux-saga/effects";

import ImagesSaga from "./images";

const sagas = [ImagesSaga];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
