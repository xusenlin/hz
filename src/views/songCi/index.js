import React from "react";
import { songCi } from "../../api/songCi.js"
import Poetry from "../../components/poetry/index.js";
import Paginate from "../../components/paginate/index.js";
export default class SongCi extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{list:[]}
    };
  }
  componentDidMount() {
    this.getList()
  }
  getList(pageNum = 1){
    songCi({pageNum}).then(r=>{
      this.setState({data:r})
    }).catch(()=>{})
  }
  render() {
    return (
      <div>
        <Poetry title="宋词" list={this.state.data.list}/>
        <Paginate
          pageCount={this.state.data.totalPage}
          change={num => {this.getList(num)}}
        />
      </div>
    );
  }
}
