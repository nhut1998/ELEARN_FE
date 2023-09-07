import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse, RootState } from "types";
import { ICourse, ICourseElearn, IParamCourse, IResponseCourseElearn } from "types/models/Course";


const initialState: IResponseCourseElearn = {
  isFetching: false,
  data: []
}

const coursesSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<ICourse>) {
      state.isFetching = false;
      state.data = []
    },
    getCourse(state, action: PayloadAction<string>){
      state.isFetching = false;
      state.data = []
    },
  
    courseList(state, action: PayloadAction<ICourseElearn[]>){
      state.isFetching = false;
      state.data = action.payload
    },
    // courseListPaging(state, action: PayloadAction<ICourseElearn[]>){
    //   state.isFetching = false;
    //   state.data = action.payload
    // }



  }
})

export const addCourse = coursesSlice.actions.addCourse;
export const getCourse = coursesSlice.actions.getCourse;
export const courseList = coursesSlice.actions.courseList;
// export const coursePaging = coursesSlice.actions.getCoursePaging;
// export const courseListPaging = coursesSlice.actions.courseListPaging

export const courseData = (state: RootState) => state.course.data;

const CoursesReducer = coursesSlice.reducer;
export default CoursesReducer;

