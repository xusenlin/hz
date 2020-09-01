import React from "react";
import { openPopup,closePopup } from "../../components/popup/index.js"

export default function About() {

  return (
    <div>
      <h1 onClick={()=>{closePopup()}}>关于</h1>
      <div>
        <p onClick={()=>{openPopup("sda","sadsa")}}>
          建
        </p>
      </div>
    </div>
  );
}
