import axios, { AxiosInstance } from "axios";
import { readToken } from "../../utils/tokenHelper";
// import showNotify from "../../utils/snackBar";
import * as R from "ramda";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export interface Config {
  suffix?: string;
  baseURL?: string;
  raiseError?: boolean;
  raiseInfo?: boolean;
}

let requestNeedsToken: any;

abstract class BaseAPI<FiltersType, GetType, PostType, PutType> {
  protected httpService: AxiosInstance;
  constructor({
    suffix = "",
    baseURL = publicRuntimeConfig.host,
    raiseError = true,
    raiseInfo = true,
  }: Config) {
    this.httpService = axios.create({
      baseURL: `${baseURL}${suffix ? `/${suffix}` : ""}`,
    });
    this.httpService.defaults.headers.post["Content-Type"] = "application/json";
    this.requestInterceptors();
    this.responseInterceptors(raiseError, raiseInfo);
  }

  public get(data: FiltersType): GetType[] {
    return this.httpService.get("", {
      params: {
        ...data,
      },
    }) as any;
  }

  public getOne(id: string): GetType {
    return this.httpService.get(`/${id}`) as any;
  }

  public Post(data: PostType): GetType {
    return this.httpService.post(``, data) as any;
  }

  public Put(data: PutType): any {
    return this.httpService.put(``, data) as any;
  }

  public Delete(id: string): GetType {
    return this.httpService.delete(`/${id}`) as any;
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
