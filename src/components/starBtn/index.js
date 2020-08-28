import React from "react";
import "./style.scss"

export default class StarBtn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="star-btn" onClick={this.props.clickBtn}>
        { this.props.children }
      </div>
    );
  }
}
