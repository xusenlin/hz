import Axios from "axios";
import NProgress from "nprogress";
import { ApiUrl } from "../config/url.js";
import { ApiPrefix,ReqTimeout,ReqRetry,ReqRetryDelay } from "../config/index";
import { getToken } from "../utils/dataStorage";
import Snackbar from "../components/snackbar/index";

const service = Axios.create({
  baseURL: ApiUrl + "/" + ApiPrefix,
  headers: {
    Accept: "*/*"
  },
  timeout: ReqTimeout
});

service.defaults.retry = ReqRetry;
service.defaults.retryDelay = ReqRetryDelay;

service.interceptors.request.use(
  config => {
    NProgress.start();
    config.headers["Authorization"] = getToken() || "";
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    setTimeout(() => {
      NProgress.done();
    }, 300);
    if (res.status !== 200) {
      Snackbar.error("Status Code Is Not 200");
      return Promise.reject(res);
    } else {
      if (res.data.status !== true) {
        Snackbar.warning(res.data.msg);
        return Promise.reject(res);
      }
      return res.data.data;
    }
  },
  error => {
    Snackbar.error(error.message);
    NProgress.done();
    return Promise.reject(error);
  }
);

export default service;
