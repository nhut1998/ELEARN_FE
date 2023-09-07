
import { logout } from "features/auth/store/slice";
import { call, takeEvery } from "redux-saga/effects";
import { removeStorage } from "utils";
import { APP_TOKEN_NAME, USER_CURRENT } from "utils/constants";


function* handleLogout(){
  try{
    yield call(removeStorage, USER_CURRENT);
    yield call(removeStorage, APP_TOKEN_NAME);
    // yield call(history.push, PAGE_URL.Login);
  }catch(e){

  }

}

export default function* appSaga(){
  yield takeEvery(logout.type, handleLogout);
}