import appSaga from "features/app/store/saga"
import authSaga from "features/auth/store/saga"
import catalogSaga from "features/course/store/saga"
import coursePagingSaga from "features/coursePaging/store/saga"
import courseSaga from "features/courses/store/saga"
import { all } from "redux-saga/effects"


export default function* rootSaga(){
  yield all([
    catalogSaga(),
    authSaga(),
    appSaga(),
    courseSaga(),
    coursePagingSaga()
  ])
}