import { IHeaderRequest } from "../../../types";
import { ILogin, ILoginResponse, IRegister,IRegisterRespone } from "types/models/Account";


import AccountPaths from "./paths";
import { apiPost } from "utils/api";

export const registerUser = (data:IRegister) => {
  return apiPost<IRegisterRespone>(AccountPaths.Register, {...data})
}

export const authLogin = (data:ILogin) => {
  const { username, password } = data
  return apiPost<ILoginResponse>(AccountPaths.Login, {username, password})
}