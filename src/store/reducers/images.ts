import { SET_IMAGE, REMOVE_IMAGE, GET_IMAGES } from "store/actionTypes/images";
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

const reducer = (state = initialState, action: any): IImagesState => {
  switch (action.type) {
    case SET_IMAGE.PENDING:
      return {
        ...state,
        isLoading: true
      };

    case SET_IMAGE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case SET_IMAGE.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case GET_IMAGES.PENDING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_IMAGES.SUCCESS: {
      return {
        ...state,
        images: action.payload,
        isLoading: false,
        isError: false
      };
    }

    case GET_IMAGES.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case REMOVE_IMAGE.PENDING:
      return {
        ...state,
        isLoading: true
      };

    case REMOVE_IMAGE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case REMOVE_IMAGE.FAILURE:
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
