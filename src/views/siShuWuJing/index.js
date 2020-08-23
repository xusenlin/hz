import React from "react";
import Paginate from "../../components/paginate/index.js";

export default function SiShuWuJing() {
  return (
    <div>
      <div>四书五经</div>
      <Paginate
        pageCount={1000}
        change={e => {
          console.log(e);
        }}
      />
    </div>
  );
}
