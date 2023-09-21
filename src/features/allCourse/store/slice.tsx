import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IAllCourse, ICoursePaging, IParamCourse, IPostLike } from "types/models/Course";


const initialState: IAllCourse = {
  data: {
    total_count: 0,
    result: []
  },
}

const courseAllSlice = createSlice({
  name: 'allCourse',
  initialState,
  reducers: {
    listCourseAll(state, action:PayloadAction<IParamCourse>){
      state.data = {...state.data}
    },
    getListCourse(state, action:PayloadAction<ICoursePaging>){
      state.data = action.payload
    },
    like(state, action: PayloadAction<IPostLike>){
      state.data = {...state.data}
    },
    unLike(state, action: PayloadAction<IPostLike>){
      state.data = {...state.data}
    },

  }
})

//actions
export const actionLike = courseAllSlice.actions.like;
export const actionUnLike = courseAllSlice.actions.unLike;
export const actionListCourse = courseAllSlice.actions.listCourseAll;
export const actionGetListCourse = courseAllSlice.actions.getListCourse

//selector

export const courseAllSelector = (state:RootState) => state.courseAll.data

const CourseAllReducer = courseAllSlice.reducer;
export default CourseAllReducer;