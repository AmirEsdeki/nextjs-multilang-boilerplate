import axios, { AxiosInstance } from "axios";
import { readToken } from "../../utils/tokenHelper";
// import showNotify from "../../utils/snackBar";
import * as R from "ramda";
import config from "../../config";

export interface Config {
  suffix?: string;
  baseURL?: string;
  raiseError?: boolean;
  raiseInfo?: boolean;
  needsToken?: boolean;
}

let requestNeedsToken: any;

abstract class BaseAPI {
  protected httpService: AxiosInstance;
  constructor({
    suffix = "",
    baseURL = config.baseUrl,
    raiseError = true,
    raiseInfo = true,
    needsToken = true,
  }: Config) {
    this.httpService = axios.create({
      baseURL: `${baseURL}${suffix ? `/${suffix}` : ""}`,
    });
    requestNeedsToken = needsToken;
    this.requestInterceptors();
    this.responseInterceptors(raiseError, raiseInfo);
  }

  private responseInterceptors(raiseError: boolean, raiseInfo: boolean) {
    this.httpService.interceptors.response.use(
      (response: any) => {
        return R.pathOr(response, ["data"])(response);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  private requestInterceptors() {
    this.httpService.interceptors.request.use(
      (config) => {
        if (requestNeedsToken) {
          const token = readToken();
          if (token) {
            config.headers.authorization = token;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

export default BaseAPI;
