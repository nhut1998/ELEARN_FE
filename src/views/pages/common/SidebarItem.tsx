import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../configs/colorConfigs";
import { RouteType } from "app/routes/config";
import { getSidebar } from "features/sidebar/store/slice";
import { FunctionComponent } from "react";

type Props = {
  item: RouteType;
};

const SidebarItem:FunctionComponent<Props> = ({ item }: Props) => {
  // const { appState } = useSelector((state: RootState) => state.appState);
  const appState = useSelector(getSidebar)

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
            color:"#9c71fb"

          },
          color: appState === item.state ? "#9c71fb" : "unset",
          backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          paddingY: "12px",
          paddingX: "24px",
          // paddingLeft:"24px"
        }}
      >
        <ListItemIcon sx={{
          // "&: hover": {
          //   // backgroundColor: colorConfigs.sidebar.hoverBg,
          //   color:"#9c71fb"

          // },
          color: appState === item.state ? "#9c71fb" : "unset",
        }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;