import React from "react";
import ReactPaginate from 'react-paginate';
import {successNotice,warningNotice,infoNotice,errorNotice} from '../../components/notice/index.js';


export default function Main() {
  return (
    <div>
      <button onClick={successNotice("超搞笑歇斯底！")} >successNotice</button>
      <button onClick={warningNotice("超搞笑歇斯底！")} >warningNotice</button>
      <button onClick={infoNotice("超搞笑歇斯底！")} >infoNotice</button>
      <button onClick={errorNotice("超搞笑歇斯底！")} >errorNotice</button>
      <br/>
      <ReactPaginate pageCount={100} pageRangeDisplayed={2} marginPagesDisplayed={4} />
    </div>
  );
}
