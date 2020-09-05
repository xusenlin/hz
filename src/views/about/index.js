import React from "react";

export default function About() {
  return (
    <div>
      <h1>关于</h1>
      <div
        style={{
          padding: "20px",
          textAlign: "left",
          margin: "0 auto",
          maxWidth: "500px",
          minHeight: "calc(100vh - 178px)"
        }}
      >
        <p>这是一个公益网站，没用任何广告，PC和移动端都有着良好的阅读体验。</p>
        <p>并且会随着数据仓库的更新而更新，目前数据的统计如下：</p>
        <p>唐诗57612首，宋诗254248首，宋词21053首，元曲11057首</p>
        <p>当然还有更多的数据，我有时间的话会看情况添加进来</p>
        <p>
          如果你也喜欢这个网站，不妨给我发送邮件，一个小小的建议或者更好的想法都欢迎和我交流。
        </p>
        <p>邮箱：wumulaozu@gmail.com</p>
      </div>
    </div>
  );
}
