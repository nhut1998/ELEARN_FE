import { PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./app";
import { IListCode } from "./api";
import { IAccountState } from "./models/Account";
import { ISidebar } from "./models/Sidebar";
import { IAllCourse, IResponseCatalog, IResponseCourseElearn, IResponseCoursePaging } from "./models/Course";
import { ICart } from "./models/Cart";

export interface RootState {
  app: IAppState,
  auth: IAccountState,
  sidebar: ISidebar,
  catalog: IResponseCatalog,
  course: IResponseCourseElearn,
  coursePaging: IResponseCoursePaging,
  cart: ICart,
  courseAll:IAllCourse,
}

export type PAListCode<T> = PayloadAction<IListCode<T>>;