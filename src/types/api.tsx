
export interface IError {
  loc: string;
  message: string;
  detail: string;
}

export type TAuthHeader = 'Bearer' | 'Basic';


export interface IApiResponse<T>{
  success: boolean;
  data: T | null;
  code: string;
  message: string;
  message_detail: string;
}


export interface IListData<T> {
  data: T[];
}

export interface IListCode<T>  extends IListData<T>{
  code: string;
}

export type IResponse<T> = Promise<IApiResponse<T>>;

export type IHeaderRequest = HeadersInit | Record<string, any>;
export type IDataRequest = Record<string, any> | FormData