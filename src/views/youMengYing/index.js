import React from "react";
import Paginate from "../../components/paginate/index.js";

export default function YouMengYing() {
  return (
    <div>
      <div>幽梦影</div>
      <Paginate
        pageCount={1000}
        change={e => {
          console.log(e);
        }}
      />
    </div>
  );
}
