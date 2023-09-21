import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { IResponses } from "types/models/Response";
import { getListCourseAll, postLike, postUnLike } from "../models";
import { ICoursePaging, IParamCourse, IPostLike } from "types/models/Course";
import { actionGetListCourse, actionLike, actionListCourse, actionUnLike } from "./slice";
import { IApiResponse } from "types";


function* handleLike(action: PayloadAction<IPostLike>) {
  try {
    const res: IResponses = yield call(postLike, action.payload)
    console.log(res)
  } catch (err) {

  }
}

function* handleUnLike(action: PayloadAction<IPostLike>) {
  try {
    const res: IResponses = yield call(postUnLike, action.payload)
  } catch (err) {

  }
}

function* handleListCourse(action: PayloadAction<IParamCourse>) {
  try {
    const res: IApiResponse<ICoursePaging> = yield call(getListCourseAll, action.payload);
    if (res.code === "OK") {
      yield put(actionGetListCourse(res.data as ICoursePaging));
    }
  } catch (err) {

  }
}

export default function* postLikeSaga() {
  yield takeLatest(actionLike.type, handleLike)
  yield takeLatest(actionUnLike.type, handleUnLike)
  yield takeEvery(actionListCourse.type, handleListCourse)
}