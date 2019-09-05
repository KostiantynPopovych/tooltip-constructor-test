import { IImage } from "types/entities";
import {
  SET_IMAGE_START,
  SET_IMAGE_PENDING,
  SET_IMAGE_SUCCESS,
  SET_IMAGE_FAILURE,
  REMOVE_IMAGE_START,
  REMOVE_IMAGE_PENDING,
  REMOVE_IMAGE_SUCCESS,
  REMOVE_IMAGE_FAILURE,
  GET_IMAGES_START,
  GET_IMAGES_PENDING,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE
} from "store/actionTypes/images";

export interface IRequestSetImage {
  type: typeof SET_IMAGE_START;
  payload: IImage;
}

interface ISetImagePending {
  type: typeof SET_IMAGE_PENDING;
}

interface ISetImageSuccess {
  type: typeof SET_IMAGE_SUCCESS;
}

interface ISetImageFailure {
  type: typeof SET_IMAGE_FAILURE;
}

export interface IRequestGetImages {
  type: typeof GET_IMAGES_START;
}

interface IGetImagesPending {
  type: typeof GET_IMAGES_PENDING;
}

interface IGetImagesSuccess {
  type: typeof GET_IMAGES_SUCCESS;
  payload: Array<IImage>;
}

interface IGetImagesFailure {
  type: typeof GET_IMAGES_FAILURE;
}

export interface IRequestRemoveImage {
  type: typeof REMOVE_IMAGE_START;
  payload: string;
}

interface IRemoveImagePending {
  type: typeof REMOVE_IMAGE_PENDING;
}

interface IRemoveImageSuccess {
  type: typeof REMOVE_IMAGE_SUCCESS;
}

interface IRemoveImageFailure {
  type: typeof REMOVE_IMAGE_FAILURE;
}

export type IImagesActionTypes =
  | IRequestSetImage
  | ISetImagePending
  | ISetImageSuccess
  | ISetImageFailure
  | IRequestGetImages
  | IGetImagesPending
  | IGetImagesSuccess
  | IGetImagesFailure
  | IRequestRemoveImage
  | IRemoveImagePending
  | IRemoveImageSuccess
  | IRemoveImageFailure;

export const requestSetImage = (img: IImage): IImagesActionTypes => ({
  type: SET_IMAGE_START,
  payload: img
});

export const setImagePending = (): IImagesActionTypes => ({
  type: SET_IMAGE_PENDING
});

export const setImageSuccess = (): IImagesActionTypes => ({
  type: SET_IMAGE_SUCCESS
});

export const setImageFailure = (): IImagesActionTypes => ({
  type: SET_IMAGE_FAILURE
});

export const requestGetImages = (): IImagesActionTypes => ({
  type: GET_IMAGES_START
});

export const getImagesPending = (): IImagesActionTypes => ({
  type: GET_IMAGES_PENDING
});

export const getImagesSuccess = (
  images: Array<IImage>
): IImagesActionTypes => ({
  type: GET_IMAGES_SUCCESS,
  payload: images
});

export const getImagesFailure = (): IImagesActionTypes => ({
  type: GET_IMAGES_FAILURE
});

export const requestRemoveImage = (id: string): IImagesActionTypes => ({
  type: REMOVE_IMAGE_START,
  payload: id
});

export const removeImagePending = (): IImagesActionTypes => ({
  type: REMOVE_IMAGE_PENDING
});

export const removeImageSuccess = (): IImagesActionTypes => ({
  type: REMOVE_IMAGE_SUCCESS
});

export const removeImageFailure = (): IImagesActionTypes => ({
  type: REMOVE_IMAGE_FAILURE
});
