import React from "react";
import "./style.scss"
import { successIcon,errorIcon,infoIcon,warningIcon } from "./icon.js";
import Notification from 'rc-notification/es/index';

let N;Notification.newInstance({prefixCls:"notice",style:{}}, (n) => N = n);

const index = (icon, content, color)=>{
  N.notice({
    content: <div className="notice-content" style={{background:color}}>
      {icon} <span className="notice-tip">{content}</span>
    </div>,
  })
};

const infoNotice = content =>{return index.bind(null,infoIcon(),content,"#2196f3")};
const errorNotice = content =>{return index.bind(null,errorIcon(),content,"#f44336")};
const warningNotice = content =>{return index.bind(null,warningIcon(),content,"#ff9800")};
const successNotice = content =>{ return index.bind(null,successIcon(),content,"#4caf50")};

export { errorNotice,warningNotice,infoNotice,successNotice }
