import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { catalog, catalogData } from "./slice";

import { catalogCourse } from "../model";
import { IApiResponse } from "types/api";
import { ICatalog } from "types/models/Course";


function* handleCatalog(action: PayloadAction<boolean>) {
  try {
    const res: IApiResponse<ICatalog[]> = yield call(catalogCourse)

    if (res.code === "OK") {
      yield put(catalogData(res.data as ICatalog[]))
      // console.log("res",res)
    }
  } catch (err) {

  }
}

// function* handleAddCourse(action: PayloadAction<ICourse>) {
//   try {
//     const res: IApiResponse<IResCourse> = yield call(addCourse, action.payload)
//     console.log("ress",res)
//   } catch (err) {

//   }
// }

export default function* catalogSaga() {
  yield takeLatest(catalog.type, handleCatalog);
  // yield takeLatest(catalog.type, handleAddCourse);
}