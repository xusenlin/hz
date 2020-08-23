import React from "react";
import Paginate from "../../components/paginate/index.js";

export default function TangShi() {
  return (
    <div>
      <div>唐诗</div>
      <Paginate
        pageCount={1000}
        change={e => {
          console.log(e);
        }}
      />
    </div>
  );
}
