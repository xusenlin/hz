import request from "../utils/request.js";

/**
 * @param params
 * @returns {AxiosPromise}
 */
export function lunYu(params) {
  return request({
    url: "/ly",
    method: "get",
    params: params
  });
}
/**
 * @param params
 * @returns {AxiosPromise}
 */
export function favour(params) {
  return request({
    closeLoading:true,
    url: "/ly/favour",
    method: "get",
    params: params
  });
}
