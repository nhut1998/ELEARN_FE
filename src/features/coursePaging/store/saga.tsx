import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { IApiResponse } from "types";
import { ICourseElearn, ICoursePaging, IParamCourse } from "types/models/Course";
import { getCoursePaging } from "../model";
import { actionCourseListPaging, actionGetCoursePaging } from "./slice";


function* handleGetCoursePaging(action: PayloadAction<IParamCourse>) {
  try {
    const res: IApiResponse<ICoursePaging> = yield call(getCoursePaging, action.payload)
    if (res.code == "OK") {
      yield put(actionCourseListPaging(res.data as ICoursePaging));
    }
  } catch (err) {

  }
}

export default function* coursePagingSaga() {
  yield takeEvery(actionGetCoursePaging.type, handleGetCoursePaging)
}