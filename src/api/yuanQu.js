import request from "../utils/request.js";

/**
 * @param params
 * @returns {AxiosPromise}
 */
export function yuanQu(params) {
  return request({
    url: "/yq",
    method: "get",
    params: params
  });
}
