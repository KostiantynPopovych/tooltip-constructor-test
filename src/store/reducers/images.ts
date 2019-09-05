import {
  SET_IMAGE_SUCCESS,
  SET_IMAGE_FAILURE,
  SET_IMAGE_PENDING,
  REMOVE_IMAGE_PENDING,
  REMOVE_IMAGE_SUCCESS,
  REMOVE_IMAGE_FAILURE,
  GET_IMAGES_PENDING,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE
} from "store/actionTypes/images";
import { IImage } from "types/entities";
import { IImagesActionTypes } from "store/actions/images";

interface IImagesState {
  images: Array<IImage>;

  isLoading: boolean;
  isError: boolean;
}

const initialState: IImagesState = {
  images: [],

  isLoading: false,
  isError: false
};

const reducer = (
  state = initialState,
  action: IImagesActionTypes
): IImagesState => {
  switch (action.type) {
    case SET_IMAGE_PENDING:
      return {
        ...state,
        isLoading: true
      };

    case SET_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case SET_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case GET_IMAGES_PENDING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_IMAGES_SUCCESS: {
      return {
        ...state,
        images: action.payload,
        isLoading: false,
        isError: false
      };
    }

    case GET_IMAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case REMOVE_IMAGE_PENDING:
      return {
        ...state,
        isLoading: true
      };

    case REMOVE_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case REMOVE_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
};

export default reducer;
