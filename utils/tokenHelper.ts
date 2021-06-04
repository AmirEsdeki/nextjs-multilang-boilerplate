import { read, store, remove } from "./localStorageHelper";

export const readToken: ReturnType<any> = () => {
  return read("token") || read("token", window.sessionStorage);
};
export const storeToken = (token: string, rememberMe: boolean): void => {
  if (!rememberMe) {
    store("token", `${token}`, window.sessionStorage);
    return;
  }
  store("token", `${token}`);
};
export const removeToken: ReturnType<any> = () => {
  remove("token") || remove("token", window.sessionStorage);
};
