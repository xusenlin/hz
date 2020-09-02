import request from "../utils/request.js";

/**
 * @param params
 * @returns {AxiosPromise}
 */
export function author(params) {
  return request({
    url: "/author",
    method: "get",
    params: params
  });
}
