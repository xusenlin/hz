import React from "react";
import { siShuWuJing } from "../../api/siShuWuJing.js"
import Chapter from "../../components/chapter/index.js";
import Paginate from "../../components/paginate/index.js";
export default class SiShuWuJing extends React.Component{
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
    siShuWuJing({pageNum,pageSize:1}).then(r=>{
      this.setState({data:r})
    }).catch(()=>{})
  }
  render() {
    return (
      <div>
        <Chapter title="四书五经" list={this.state.data.list}/>
        <Paginate
          pageCount={this.state.data.totalPage}
          change={num => {this.getList(num)}}
        />
      </div>
    );
  }
}
