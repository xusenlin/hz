import request from "../utils/request.js";

/**
 * @param params
 * @returns {AxiosPromise}
 */
export function tangShi(params) {
  return request({
    url: "/ts",
    method: "get",
    params: params
  });
}
