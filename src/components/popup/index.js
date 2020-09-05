import React from "react";
import ReactDOM from "react-dom";
import Popup from "./popup.js";

const popupDom = document.getElementById("popup");

let popupInstance = ReactDOM.render(<Popup />, popupDom);

export const openPopup = (...c) => {
  popupInstance.openPopup(...c);
};
export const closePopup = () => {
  popupInstance.closePopup();
};
