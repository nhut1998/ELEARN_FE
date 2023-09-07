import axios, { AxiosRequestConfig } from "axios";
import { contentType, getAuthHeader } from "./index";
import { IApiResponse, IDataRequest, IHeaderRequest, IResponse } from "types";



export enum EMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  HEAD = "head",
  DELETE = "delete",
}

export enum EContentType {
  JSON = "application/json",
  BINARY = "multipart/form-data",
  TEXT = "plain/text",
  URLENCODED = "application/x-www-form-urlencoded",
}

const API_BASE_URL = 'https://localhost:44397/api/v1'

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: { Accept: EContentType.JSON, ...contentType(EContentType.JSON) },
  withCredentials: true

})
function execApi<T>(
  method: EMethod,
  url: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
) {
  configs = configs ?? {};

  Object.assign(configs, { url: url, method, headers, data: null });
  if (data) {

    if (configs.method === EMethod.GET) configs.method = EMethod.POST;
    if (data instanceof FormData) {
      headers = Object.assign(headers ?? {}, contentType(EContentType.BINARY));
      configs.data = data

    } else {
      configs.data = data
    }
  }

  Object.assign(configs, { headers: configs.headers || {} });
  return API.request(configs)
    .then((response) => {

      const result: IApiResponse<T> = {
        success: false,
        data:  null,
        code: "",
        message: "",
        message_detail: "",
      };
      try {
        result.success = Math.floor(response.status / 200) === 1;

        if (result.success) {
          result.data = response.data;
          result.success = true;
          // result.errors = [];
        } else {
          // result.errors = response.data.errors ?? 'LỖi'
        }
        return result.data
      } catch (err) {
        // result.errors = []
      }
    }).catch((error) => {
      if (error.response && error.response.data) {
        const response = error.response.data;
        response.success = false;
        return response;
      } else {
        return {
          success: false,
          data: null,
          errors: [],
        }
      }
    })

}

export function apiGet<T>(url: string, headers?: IHeaderRequest, configs?: AxiosRequestConfig): IResponse<T> {
  return execApi<T>(EMethod.GET, url, undefined, headers, configs)
}

export function apiPost<T>(url: string, data?: IDataRequest, headers?: IDataRequest, configs?: AxiosRequestConfig): IResponse<T> {
  return execApi<T>(EMethod.POST, url, data, headers, configs)
}
