import React from "react";
import "./index.scss"
import { tangShi } from "../../api/tangShi.js"
import Paginate from "../../components/paginate/index.js";
const sm = require("./sm.png")
export default class TangShi extends React.Component{
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
    tangShi({pageNum}).then(r=>{
      this.setState({data:r})
    }).catch(()=>{})
  }
  render() {
    return (
      <div>
        <div>唐诗</div>
        <ul className="tang-shi">
          {
            this.state.data.list.map(r=>{
              return (
                <li className="node" key={r.id}>
                  <p className="title">{r.title}</p>

                  <p className="author">{r.author}</p>
                  <div className="paragraphs">{r.paragraphs.split("||").map((p,i)=>{
                    return (<div className="paragraph" key={i}>{p}</div>)
                  })}</div>
                </li>
              )
            })
          }
        </ul>
        <Paginate
          pageCount={this.state.data.totalPage}
          change={num => {this.getList(num)}}
        />
        <img style={{width:"140px",marginBottom: "20px"}} src={sm} alt=""/>
      </div>
    );
  }
}
