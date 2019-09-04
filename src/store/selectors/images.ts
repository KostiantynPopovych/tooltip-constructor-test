import { AppState } from "store/reducers";

export const getImages = (state: AppState) => state.images.images;
export const getLoadingState = (state: AppState) => state.images.isLoading;
