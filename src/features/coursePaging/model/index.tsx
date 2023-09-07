import { IParamCourse, IResponseCourseElearn } from "types/models/Course"
import { apiGet } from "utils/api"


export const  getCoursePaging = (param:IParamCourse) => {
  return apiGet<IResponseCourseElearn>(`/usermanagement/coursepaging?page_num=${param.page_num}&page_size=${param.page_size}`)

}