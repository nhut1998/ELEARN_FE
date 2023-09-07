import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { IApiResponse } from "types";
import { ICourse, ICourseElearn, IParamCourse, IResCourse, IResponseCourseElearn } from "types/models/Course";
import { addCourseElearn, catalogCourse} from "../model";
import { addCourse, courseList,getCourse } from "./slice";





function* handleAddCourse(action: PayloadAction<ICourse>) {
  try {

    const res: IApiResponse<IResCourse> = yield call(addCourseElearn, action.payload)

  } catch (err) {

  }
}

function* handleGetCourse(action: PayloadAction<string>) {
  try {

    const res: IApiResponse<ICourseElearn[]> = yield call(catalogCourse)

    if (res.code == "OK") {
      yield put(courseList(res.data as ICourseElearn[]));
    }
  } catch (err) {

  }
}


export default function* courseSaga() {
  yield takeEvery(addCourse.type, handleAddCourse);
  yield takeEvery(getCourse.type, handleGetCourse);
}