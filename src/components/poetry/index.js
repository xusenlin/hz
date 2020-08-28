import React from "react";
import "./index.scss"
import StarBtn from "../starBtn/index.js"

export default class Poetry extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="warp">
        <h1>{ this.props.title }</h1>
        <ul className="poetry">
          {
            this.props.list.map((r,index)=>{
              return (
                <li className="node" key={r.id}>
                  <p className="title">{r.title}</p>

                  <p className="author">{r.author}</p>
                  <div className="paragraphs">{r.paragraphs.split("||").map((p,i)=>{
                    return (<div className="paragraph" key={i}>{p}</div>)
                  })}</div>
                  <StarBtn clickBtn={()=>{this.props.favour && this.props.favour(r.id,index)}}>点赞({r.star})</StarBtn>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
