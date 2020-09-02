import React from "react";
import "./style.scss"
import { themeIcon } from "../svgIcon/icon.js"

const colors = ["#673ab7","#f44336","#9c27b0","#2196f3","#607d8b","#795548","#8bc34a"];

export default class themeBtn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="theme-btn">
        { themeIcon("30px","30px") }
        <div className="theme-color">
          {colors.map(c =>{
            return (<i key={c} onClick={()=>{document.documentElement.style.setProperty("--themeColor",c);localStorage.setItem("THEME",c)}} className="color" style={{background:c}}/>)
          })}
        </div>
      </div>
    );
  }
}
