import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import GridPage from "pages/Grid";

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GridPage} />
    </Switch>
  </BrowserRouter>
);
export default Router;
