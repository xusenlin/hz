import React from "react";
import ReactDOM from "react-dom";
import "nprogress/nprogress.css";
import "./assets/style/scss/style.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let theme = localStorage.getItem("THEME");
if(theme && theme.length === 7){
  document.documentElement.style.setProperty("--themeColor",theme)
}
