
export interface IResponseCatalog {
  isFetching: boolean,
  data: ICatalog[]
}

export interface IResCourse {
  code: string,
  message: string,
}

export interface ICatalog {
  id: string,
  catalog_id: string,
  catalog_name: string,
  icon: string,
  color: string,
  progress: number

}

export interface ICourse {
  name: string,
  aliases: string,
  tuition: string,
  description: string,
  catalog_id: string
}

export interface ICourseElearn {
  courseId: string,
  name: string,
  luotxem: string | null,
  evaluate: string | null,
  createAt: string,
  catalogId: string,
  description: string,
  makerId: string,
  aliases: string,
  status: string | null,
  tuition: number,
  makerCourse: IMakerCourse,
  catalogList: ICatalogList,
}

export interface ICatalogList {
  catalogName: string,
  catalogDescription: string
}

export interface IMakerCourse {
  account: string,
  fullName: string,
  role: string,
  roleName: string,
}

export interface IResponseCourseElearn {
  isFetching: boolean,
  data: ICourseElearn[]
}

export interface IParamCourse {
  name: string,
  catalog_id: string,
  maker_id: string,
  page_num: number,
  page_size: number
}

export interface IResponseCoursePaging {
  data: ICoursePaging
}
export interface ICoursePaging {
  total_count: number,
  result: ICourseElearn[]
}

