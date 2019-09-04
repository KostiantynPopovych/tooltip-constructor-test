import { IImage } from "types/entities";
import { SET_IMAGE, GET_IMAGES, REMOVE_IMAGE } from "store/actionTypes/images";

export interface IRequestSetImage {
  type: typeof SET_IMAGE.START;
  payload: IImage;
}

interface ISetImagePending {
  type: typeof SET_IMAGE.PENDING;
}

interface ISetImageSuccess {
  type: typeof SET_IMAGE.SUCCESS;
}

interface ISetImageFailure {
  type: typeof SET_IMAGE.FAILURE;
}

export interface IRequestGetImages {
  type: typeof GET_IMAGES.START;
}

interface IGetImagesPending {
  type: typeof GET_IMAGES.PENDING;
}

interface IGetImagesSuccess {
  type: typeof GET_IMAGES.SUCCESS;
  payload: Array<IImage>;
}

interface IGetImagesFailure {
  type: typeof GET_IMAGES.FAILURE;
}

export interface IRequestRemoveImage {
  type: typeof REMOVE_IMAGE.START;
  payload: string;
}

interface IRemoveImagePending {
  type: typeof REMOVE_IMAGE.PENDING;
}

interface IRemoveImageSuccess {
  type: typeof REMOVE_IMAGE.SUCCESS;
}

interface IRemoveImageFailure {
  type: typeof REMOVE_IMAGE.FAILURE;
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
  type: SET_IMAGE.START,
  payload: img
});

export const setImagePending = (): IImagesActionTypes => ({
  type: SET_IMAGE.PENDING
});

export const setImageSuccess = (): IImagesActionTypes => ({
  type: SET_IMAGE.SUCCESS
});

export const setImageFailure = (): IImagesActionTypes => ({
  type: SET_IMAGE.FAILURE
});

export const requestGetImages = (): IImagesActionTypes => ({
  type: GET_IMAGES.START
});

export const getImagesPending = (): IImagesActionTypes => ({
  type: GET_IMAGES.PENDING
});

export const getImagesSuccess = (
  images: Array<IImage>
): IImagesActionTypes => ({
  type: GET_IMAGES.SUCCESS,
  payload: images
});

export const getImagesFailure = (): IImagesActionTypes => ({
  type: GET_IMAGES.FAILURE
});

export const requestRemoveImage = (id: string): IImagesActionTypes => ({
  type: REMOVE_IMAGE.START,
  payload: id
});

export const removeImagePending = (): IImagesActionTypes => ({
  type: REMOVE_IMAGE.PENDING
});

export const removeImageSuccess = (): IImagesActionTypes => ({
  type: REMOVE_IMAGE.SUCCESS
});

export const removeImageFailure = (): IImagesActionTypes => ({
  type: REMOVE_IMAGE.FAILURE
});
