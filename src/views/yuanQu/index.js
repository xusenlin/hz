import React from "react";
import { yuanQu,favour } from "../../api/yuanQu.js"
import Poetry from "../../components/poetry/index.js";
import Paginate from "../../components/paginate/index.js";
import {successNotice} from "../../components/notice";
export default class YuanQu extends React.Component{
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
    yuanQu({pageNum}).then(r=>{
      this.setState({data:r})
    }).catch(()=>{})
  }
  clickFavour(id,index){
    let d = this.state.data;
    d.list[index].star = ++d.list[index].star;

    favour({id}).then(()=>{
      this.setState({data:d});
      successNotice("点赞成功")
    }).catch(()=>{})
  }
  render() {
    return (
      <div>
        <Poetry title="元曲" list={this.state.data.list} favour={(id,index) => {this.clickFavour(id,index)}}/>
        <Paginate
          pageCount={this.state.data.totalPage}
          change={num => {this.getList(num)}}
        />
      </div>
    );
  }
}
