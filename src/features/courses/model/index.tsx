import { ICourse, IParamCourse, IResCourse, IResponseCourseElearn } from "types/models/Course";
import { apiGet, apiPost } from "utils/api";
import CoursePaths from "./paths";
import axios from "axios";


export const addCourseElearn = (data: ICourse) => {
  return apiPost<IResCourse>(CoursePaths.AddCourse, { ...data })
}

export const catalogCourse = () => {
  return apiGet<IResponseCourseElearn>(CoursePaths.GetCourse)
}


