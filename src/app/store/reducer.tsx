import { AnyAction, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "../../types";
import AppReducer from "../../features/app/store/slice";
import AuthReducer from "../../features/auth/store/slice";
import SidebarReducer from "features/sidebar/store/slice";
import CatalogReducer from "features/course/store/slice";
import CoursesReducer from "features/courses/store/slice";
import CoursePagingReducer from "features/coursePaging/store/slice";
import CartReducer from "features/cart/store/slice";
import CourseAllReducer from "features/allCourse/store/slice";

const reducer: ReducersMapObject<RootState, AnyAction> = {
  app: AppReducer,
  auth: AuthReducer,
  sidebar: SidebarReducer,
  catalog: CatalogReducer,
  course: CoursesReducer,
  coursePaging: CoursePagingReducer,
  cart: CartReducer,
  courseAll:CourseAllReducer,
}

export default reducer