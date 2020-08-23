import "./index.scss";
import React from "react";
import HeadNav from "./head.js";
import Foot from "./foot.js";
import RouteList from "../../router/route.js";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
const Main = props => {
  return (
    <div>
      <HeadNav />
      <div className="container content">
        <Switch>
          {RouteList.map(route => {
            return (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Redirect to="/tang_si" />
        </Switch>
      </div>
      <Foot />
    </div>
  );
};
export default withRouter(Main);
