import React from "react";
import Paginate from "../../components/paginate/index.js";

export default function LunYu() {
  return (
    <div>
      <div>论语</div>
      <Paginate
        pageCount={1000}
        change={e => {
          console.log(e);
        }}
      />
    </div>
  );
}
