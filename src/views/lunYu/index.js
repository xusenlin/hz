import React from "react";
import { lunYu } from "../../api/lunYu.js";
import Chapter from "../../components/chapter/index.js";
import Paginate from "../../components/paginate/index.js";

export default class LunYu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { list: [] }
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList(pageNum = 1) {
    lunYu({ pageNum, pageSize: 1 })
      .then(r => {
        this.setState({ data: r });
      })
      .catch(() => {});
  }
  render() {
    return (
      <div>
        <Chapter title="论语" list={this.state.data.list} />
        <Paginate
          pageCount={this.state.data.totalPage}
          change={num => {
            this.getList(num);
          }}
        />
      </div>
    );
  }
}
