import Storage from "good-storage";
import { UserInfoKey,UserTokenKey } from "../config/index.js";

export function getUserInfo(key = null) {
  let userInfo = Storage.get(UserInfoKey) || {};
  if (key) return userInfo.hasOwnProperty(key) ? userInfo[key] : null;
  return userInfo;
}

export function setUserInfo(user) {
  Storage.set(UserInfoKey, user);
  return user;
}

export function getToken() {
  return Storage.get(UserTokenKey);
}

export function setToken(token) {
  return Storage.set(UserTokenKey, token);
}


export function removeToken() {
  return Storage.remove(UserTokenKey);
}
