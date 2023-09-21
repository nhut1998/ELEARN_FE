import { IParamCourse, IResponseCourseElearn } from "types/models/Course"
import { IResponses } from "types/models/Response"
import { apiGet, apiPost } from "utils/api"
import LiKePaths from "./paths"



export const getListCourseAll= (param: IParamCourse) => {
  return apiGet<IResponseCourseElearn>(`/usermanagement/coursepaging?page_num=${param.page_num}&page_size=${param.page_size}`)
}

export const postLike = (data: any) => {
  return apiPost<IResponses>(LiKePaths.Like, { ...data })
}

export const postUnLike = (data: any) => {
  return apiPost<IResponses>(LiKePaths.UnLike, { ...data })
}


