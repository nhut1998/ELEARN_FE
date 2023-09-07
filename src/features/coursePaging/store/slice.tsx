import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse, RootState } from "types";
import { ICourseElearn, ICoursePaging, IParamCourse, IResponseCoursePaging } from "types/models/Course";

const initialState: IResponseCoursePaging = {
  data: {
    total_count:0,
    result: []
  },
}

const coursePagingsSlice = createSlice({
  name: 'coursePaging',
  initialState,
  reducers: {
    getcoursePaging(state, action: PayloadAction<IParamCourse>) {

    },

     // return {...state, listMovieNext:{...payload, items:[...state.listMovieNext.items, ...payload.items]}}
    courseListPaging(state, action: PayloadAction<ICoursePaging>) {
      state.data = action.payload
    //  return {...state, data:{ ...action.payload, result:{...state.data.result, ...action.payload.result}}}
    }


  }
})

export const actionGetCoursePaging = coursePagingsSlice.actions.getcoursePaging;
export const actionCourseListPaging = coursePagingsSlice.actions.courseListPaging;

export const sliceCoursePaging = (state: RootState) => state.coursePaging.data;

const CoursePagingReducer = coursePagingsSlice.reducer;
export default CoursePagingReducer;