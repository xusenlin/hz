import React from "react";

import { SiteName } from "../../config/index.js";

export default class Foot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container foot">
        © 2020 - 2020
        <a href="https://github.com/xusenlin/hzzm">{SiteName}</a>
        Powered By
        <a href="https://github.com/chinese-poetry/chinese-poetry">
          ChinesePoetry
        </a>
      </div>
    );
  }
}
