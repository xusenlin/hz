import React from "react";
import Paginate from "../../components/paginate/index.js";

export default function About() {
  return (
    <div>
      <div>关于</div>
      <Paginate
        pageCount={1000}
        change={e => {
          console.log(e);
        }}
      />
    </div>
  );
}
