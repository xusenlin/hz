import React from "react";
import { Link } from "react-router-dom";
import RouteList from "../../router/route.js";
import { SiteName } from "../../config/index.js";

export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container head">
        <div className="logo">{SiteName}</div>
        <div className="nav">
          {RouteList.map(r => {
            return (
              <Link key={r.path} to={r.path}>
                {r.title}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
