import GridPage from "./grid";
import { connect } from "react-redux";
import { AppState } from "store/reducers";
import {
  requestSetImage,
  requestGetImages,
  requestRemoveImage
} from "store/actions/images";
import { getImages, getLoadingState } from "store/selectors/images";

const mapStateToProps = (state: AppState) => ({
  images: getImages(state),
  isLoading: getLoadingState(state)
});

const mapDispatchToProps = {
  requestSetImage,
  requestGetImages,
  requestRemoveImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridPage);
