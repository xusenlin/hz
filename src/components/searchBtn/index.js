import React from "react";
import "./style.scss"
import { searchIcon } from "../svgIcon/icon.js"


export default class searchBtn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-btn">
        { searchIcon("30px","30px") }
        <div className="search-input">
          <input
            type="text"
            placeholder="请完整输入标题或作者后回车"
            onKeyDown={e => {
              let evt = window.event || e;
              if (evt.keyCode === 13) {
                this.props.ok(e.target.value)
              }
            }}
          />
        </div>
      </div>
    );
  }
}
