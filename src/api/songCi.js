import request from "../utils/request.js";

/**
 * @param params
 * @returns {AxiosPromise}
 */
export function songCi(params) {
  return request({
    url: "/sc",
    method: "get",
    params: params
  });
}
