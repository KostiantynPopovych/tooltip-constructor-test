import { takeEvery, put, call } from "redux-saga/effects";
import uuidv1 from "uuid/v1";
import {
  IRequestSetImage,
  IRequestGetImages,
  IRequestRemoveImage
} from "store/actions/images";
import {
  SET_IMAGE_START,
  GET_IMAGES_START,
  REMOVE_IMAGE_START
} from "store/actionTypes/images";
import {
  setImagePending,
  setImageSuccess,
  setImageFailure,
  requestGetImages,
  getImagesPending,
  getImagesSuccess,
  getImagesFailure,
  removeImagePending,
  removeImageSuccess,
  removeImageFailure
} from "store/actions/images";

import Storage from "api";

function* setImageAsync({ type, payload }: IRequestSetImage) {
  try {
    yield put(setImagePending());
    const exist = !!payload.id;
    if (exist) {
      yield call(Storage.set, "images", payload.id || "", payload);
    } else {
      yield call(Storage.put, "images", { ...payload, id: uuidv1() });
    }
    yield put(setImageSuccess());
    yield put(requestGetImages());
  } catch (errors) {
    yield put(setImageFailure());
  }
}

function* getImagesAsync({ type }: IRequestGetImages) {
  try {
    yield put(getImagesPending());
    const images = yield call(Storage.get, "images");
    yield put(getImagesSuccess(images));
  } catch (errors) {
    yield put(getImagesFailure());
  }
}

function* removeImageAsync({ type, payload }: IRequestRemoveImage) {
  try {
    yield put(removeImagePending());
    yield call(Storage.delete, "images", payload);
    yield put(requestGetImages());
    yield put(removeImageSuccess());
  } catch (errors) {
    yield put(removeImageFailure());
  }
}

export default function* watchSaga() {
  yield takeEvery(SET_IMAGE_START, setImageAsync);
  yield takeEvery(GET_IMAGES_START, getImagesAsync);
  yield takeEvery(REMOVE_IMAGE_START, removeImageAsync);
}
