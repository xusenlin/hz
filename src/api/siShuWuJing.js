import request from "../utils/request.js";

/**
 * @param params
 * @returns {AxiosPromise}
 */
export function siShuWuJing(params) {
  return request({
    url: "/sswj",
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
    closeLoading: true,
    url: "/sswj/favour",
    method: "get",
    params: params
  });
}
