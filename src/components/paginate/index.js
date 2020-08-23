import React from "react";
import "./style.scss";
import ReactPaginate from "react-paginate";

export default class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { change, ...other } = this.props;
    return (
      <ReactPaginate
        containerClassName="paginate"
        previousLabel="上一页"
        nextLabel="下一页"
        onPageChange={r => {
          change(r.selected + 1);
        }}
        disabledClassName="disabled"
        {...other}
      />
    );
  }
}
