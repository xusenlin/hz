import React from "react";
import { songCi,favour } from "../../api/songCi.js"
import Poetry from "../../components/poetry/index.js";
import Paginate from "../../components/paginate/index.js";
import SearchBtn from "../../components/searchBtn/index.js";
import {successNotice} from "../../components/notice";
export default class SongCi extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      keyword:"",
      data:{list:[]}
    };
  }
  componentDidMount() {
    this.getList()
  }
  getList(pageNum = 1){
    let keyword = this.state.keyword;
    songCi({pageNum,keyword}).then(r=>{
      this.setState({data:r})
    }).catch(()=>{})
  }
  searchResult(keyword){
    this.setState({keyword},()=>{
      this.getList()
    })
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
        <Poetry title="宋词" list={this.state.data.list} favour={(id,index) => {this.clickFavour(id,index)}}/>
        <Paginate
          pageCount={this.state.data.totalPage}
          change={num => {this.getList(num)}}
        />
        <SearchBtn ok={v=>{this.searchResult(v)}} />
      </div>
    );
  }
}
