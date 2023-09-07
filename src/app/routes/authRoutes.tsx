import Login from "views/pages/Login/Login";
import { RouteType } from "./config";

const authRoutes: RouteType[] = [
  {
    path: "/login",
    element: <Login/>,
    state: "login",
  },

]

export default authRoutes;