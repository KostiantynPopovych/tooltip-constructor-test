import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import GridPage from "pages/Grid";

const store = configureStore();

const Router: FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GridPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default Router;
