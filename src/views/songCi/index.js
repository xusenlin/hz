import React from "react";
import Paginate from "../../components/paginate/index.js";

export default function SongCi() {
  return (
    <div>
      <div>宋词</div>
      <Paginate
        pageCount={1000}
        change={e => {
          console.log(e);
        }}
      />
    </div>
  );
}
