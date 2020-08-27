import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "./views/layout/main.js";
import NotFound from "./views/error/404.js";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/404" component={NotFound} />
          <Main path="/" component={Main} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

//document.documentElement.style.setProperty("--themeColor","#AAA")
