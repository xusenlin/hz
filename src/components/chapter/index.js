import React from "react";
import "./index.scss"

export default class Chapter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="warp">
        <h1>{ this.props.title }</h1>
        <ul className="chapter">
          {
            this.props.list.map(r=>{
              return (
                <li className="node" key={r.id}>
                  <p className="title">{r.chapter}</p>

                  <p className="author">{r.author}</p>
                  <div className="paragraphs">{r.paragraphs.split("||").map((p,i)=>{
                    return (<div className="paragraph" key={i}>{p}</div>)
                  })}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
