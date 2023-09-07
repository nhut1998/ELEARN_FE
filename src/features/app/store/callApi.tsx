import { call, put } from "redux-saga/effects"
import { IApiResponse, IResponse } from "../../../types"


export type CallApiResponse<T> = IApiResponse<T>;
export type FnCallApi<T> = (...p: any[]) => IResponse<T>;

export function* callApi<R, I extends CallApiResponse<R> = IApiResponse<R>>(h: FnCallApi<R>, ...p: any[]){
  const result: I = yield call(h, ...p);
//   if(result.status_code === 401){
// console.log('loiiiiiiiiiiiiiiiiiiiiiiiiii')
//   }
  return result;
}