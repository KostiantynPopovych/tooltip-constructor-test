import defineActionConstants from "utils/defineActionConstants";
import { START, SUCCESS, PENDING, FAILURE } from "constants/actionSubLevels";

export const SET_IMAGE = defineActionConstants("SET_IMAGE", [
  START,
  SUCCESS,
  PENDING,
  FAILURE
]);

export const GET_IMAGES = defineActionConstants("GET_IMAGES", [
  START,
  SUCCESS,
  PENDING,
  FAILURE
]);

export const REMOVE_IMAGE = defineActionConstants("REMOVE_IMAGE", [
  START,
  SUCCESS,
  PENDING,
  FAILURE
]);
