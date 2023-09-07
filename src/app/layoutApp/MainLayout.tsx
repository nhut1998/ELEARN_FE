import { Navigate, Outlet, matchPath, useLocation } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import sizeConfigs from "views/pages/configs/sizeConfigs";
import Topbar from "views/pages/common/Topbar";
import Sidebar from "views/pages/common/Sidebar";
import colorConfigs from "views/pages/configs/colorConfigs";
import { useSelector } from "react-redux";
import { getIsAuth } from "features/auth/store/slice";
import { APP_TOKEN_NAME } from "utils/constants";

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = matchPath(location.pathname, '/login');
  const token = JSON.parse(localStorage.getItem(APP_TOKEN_NAME) as string) 
  const isAuth = useSelector(getIsAuth);

  if (!token) {
    return <Navigate to={{ pathname: '/login' }} state={{ from: location }} />;
  }


  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // marginTop:"40px",
          // paddingTop:"100px",
          pt: 8,
          pl:4,
          pr:4,
          pb:4,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;