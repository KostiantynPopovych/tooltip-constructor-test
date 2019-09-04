import { combineReducers } from "redux";
import ImagesReducer from "./images";

const rootReducer = combineReducers({
  images: ImagesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
