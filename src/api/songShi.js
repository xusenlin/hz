import request from "../utils/request.js";

/**
 * @param params
 * @returns {AxiosPromise}
 */
export function songShi(params) {
  return request({
    url: "/ss",
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
    url: "/ss/favour",
    method: "get",
    params: params
  });
}
