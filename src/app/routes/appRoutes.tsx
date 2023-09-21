

import { RouteType } from "./config";
import MyCourses from "views/pages/MyCourses/MyCourses";
import HouseIcon from '@mui/icons-material/House';
import AddCourse from "views/pages/AddCourse/AddCourse";
import AddIcon from '@mui/icons-material/Add';
import DetailCart from "views/pages/Cart/DetailCart";
import AllCourse from "views/pages/AllCourse/AllCourse";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <MyCourses />,
    state: "home"
  },
  {
    path: "/cart-detail",
    element: <DetailCart />,
    state: "cart",
  },
  {
    path: "/all-course",
    element: <AllCourse />,
    state: "allcourse",
  },

  {
    path: "/home",
    element: <MyCourses />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HouseIcon />
    }
  },
  {
    path: "/addCourse",
    element: <AddCourse />,
    state: "addCourse",
    sidebarProps: {
      displayText: "AddCourse",
      icon: <AddIcon />
    }
  },

  // {
  //   path: "/dashboard",
  //   element: <Outlet />,
  //   state: "dashboard",
  //   sidebarProps: {
  //     displayText: "Dashboard",
  //     icon: <DashboardOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       index: true,
  //       element: <Login/>,
  //       state: "dashboard.index"
  //     },
  //     {
  //       path: "/dashboard/default",
  //       element: <Home/>,
  //       state: "dashboard.default",
  //       sidebarProps: {
  //         displayText: "Default"
  //       },
  //     },
  //     {
  //       path: "/dashboard/analytics",
  //       element: <Dashboard/>,
  //       state: "dashboard.analytics",
  //       sidebarProps: {
  //         displayText: "Analytic"
  //       }
  //     },
  //     {
  //       path: "/dashboard/saas",
  //       element: <Dashboard/>,
  //       state: "dashboard.saas",
  //       sidebarProps: {
  //         displayText: "Saas"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/component",
  //   element: <Outlet />,
  //   state: "component",
  //   sidebarProps: {
  //     displayText: "Components",
  //     icon: <AppsOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       path: "/component/alert",
  //       element: <Dashboard/>,
  //       state: "component.alert",
  //       sidebarProps: {
  //         displayText: "Alert"
  //       },
  //     },
  //     {
  //       path: "/component/button",
  //       element: <Dashboard/>,
  //       state: "component.button",
  //       sidebarProps: {
  //         displayText: "Button"
  //       }
  //     }
  //   ]
  // },

  
];

export default appRoutes;