import { Avatar, Box, Drawer, List, Stack, Toolbar } from "@mui/material";
import avt from "assets/images/avt.png"
// import colorConfigs from "../configs/colorConfigs";
// import sizeConfigs from "../configs/sizeConfigs";
// import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import sizeConfigs from "../configs/sizeConfigs";
import colorConfigs from "../configs/colorConfigs";
import appRoutes from "app/routes/appRoutes";
import { FunctionComponent } from "react";

const Sidebar:FunctionComponent = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: "#000",
          color: "#9298a2"
        }
      }}
    >
      <List 
      sx={{
        padding:"15px"
      }}
      >
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Box sx={{
              display:"flex",
              flexDirection: "column",
              alignItems:"center",
             
            }}>
            <i style={{fontSize:"30px", color:"#9c71fb"}} className="fa-brands fa-meta"></i>
            <p style={{fontSize:"14px", fontWeight:"500", color:"#9c71fb"}}>LOOP ACADEMY</p>
            </Box>
   
            {/* <Avatar src={avt} /> */}
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;