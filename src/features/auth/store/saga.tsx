import { PayloadAction } from "@reduxjs/toolkit";
import { IAccessTokenBody, ILogin, ILoginForm, ILoginResponse, IRegister, IRegisterRespone, IUser } from "types/models/Account";
import { IApiResponse } from "types";
import { authLogin, registerUser } from "../models";
import { call, put, takeEvery } from "redux-saga/effects";
import { accessToken, login, loginSuccess, registerUsers } from "./slice";
import { encodeToken, getStorage, removeStorage, setLocalItem } from "utils";
import { APP_TOKEN_NAME, USER_CURRENT } from "utils/constants";
import  { toastSuccess,toastError } from "app/hooks/useNotify";

function* handleAccessToken(action: PayloadAction<IAccessTokenBody>){
  const data:IUser = getStorage("user") as unknown as IUser??undefined
  try{ 
    if (data){
      yield put(loginSuccess(data));
    }
    else{
      yield call(removeStorage, USER_CURRENT);
      yield call(removeStorage, APP_TOKEN_NAME);
      // yield call(history.push, PAGE_URL.Login);
    }
  }
  catch(e){
    yield call(removeStorage, USER_CURRENT);
    yield call(removeStorage, APP_TOKEN_NAME);
    // yield put(loginFailure(ON_FETCH_ERROR));
    // yield call(history.push, PAGE_URL.Login);
  }
}


function* handleLogin(action: PayloadAction<ILoginForm>) {
  try {
   const response: IApiResponse<ILoginResponse> = yield call(
      authLogin,
      action.payload
    );
    if(response.code == "LOGIN_OK"){
      toastSuccess("Đăng nhập thành công")
      yield put(loginSuccess(response.data?.user_info as IUser))

      setLocalItem(
        APP_TOKEN_NAME,
        encodeToken({
          token: response.data?.token as string,
          userid: response.data?.user_info.id as number
        })
      );
      setLocalItem(USER_CURRENT,response.data?.user_info)
    }else{
      toastError("Đăng nhập không thành công")
    }
   
  } catch (err) {

  }
}

function* handleRegister(action: PayloadAction<IRegister>){
  //const toast = useToast()
//  const notifyb =  useNotify()
  try{
    const response:IApiResponse<IRegisterRespone> = yield call(
      registerUser,
      action.payload
    )
    if(response.code == "OK"){
      toastSuccess("Đăng ký thành công")
    }if(response.code == "ERROR") {
      toastError(response.message)
    }
   
console.log("response",response)
  }catch(err){
console.log("errrrrrrrrrr",err)
  }
}

export default function* authSaga() {
  yield takeEvery(registerUsers.type, handleRegister)
  yield takeEvery(accessToken.type,handleAccessToken )
  yield takeEvery(login.type, handleLogin)
}

