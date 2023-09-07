import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import sizeConfigs from "../configs/sizeConfigs";
import colorConfigs from "../configs/colorConfigs";
import { FunctionComponent } from "react";
import { AccountCircle, Key, Padding } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { logout } from "features/auth/store/slice";
import { CssVarsProvider } from '@mui/joy/styles';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button'
import SearchIcon from '@mui/icons-material/Search';
import Modal from "../Cart/modal/Modal";
import topBarStyle from "./style";
import { cartList } from "features/cart/store/slice";

const Topbar: FunctionComponent = () => {
  const classes = topBarStyle()
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const cartItem = useSelector(cartList);
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const location = useLocation();


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logoutUser = () => {
    dispatch(logout());
    navigation('/login')
  }
  const handleClose = () => {
    setAnchorEl(null);


  };
  return (
    <AppBar
      position="fixed"
      sx={{
        padding: "10px 10px 10px 30px !important",
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "0px 10px 6px -6px #e6e9ed",
        backgroundColor: "#fff",
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar sx={{ paddingLeft: "0px !important" }}>
        <CssVarsProvider>
          <Input
            sx={{
              width: "25%"
            }}
            placeholder="Find your course..."
            startDecorator={<SearchIcon />}
          />
          <Button sx={{
            marginLeft: "20px",
            outline: "unset",
            border: "unset",
            backgroundColor: "#000",
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            color: "#9c71fb",
            "&:hover": {
              backgroundColor: "#000",
            }
          }} variant="outlined">
            Search
          </Button>
        </CssVarsProvider>


        <Box className={classes.carAdd} sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: "auto"
        }}>
          <CssVarsProvider>

            <Button
            onClick={() => navigation("/addCourse")} 
            sx={{
              marginRight: "40px",
              backgroundColor: "#fff",
              color: "#000",
              width: "200px",
              boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              outline: "unset",
              "&:hover": {
                backgroundColor: "unset"
              }

            }} variant="solid">
              Add new courses
            </Button>
          </CssVarsProvider>

          <Box className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <Typography className="number-car">{cartItem.length}</Typography>
          </Box>

          <Box className="modal"><Modal /></Box>

          <Box sx={{
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            // border: "solid 1px #000",
            borderRadius: "5px",
            width: "40px",
            height: "40px",
            // marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <IconButton
              sx={{
                color: "#000"
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={logoutUser}>Đăng xuất</MenuItem>
            <MenuItem onClick={handleClose}>Thay đổi mật khẩu</MenuItem>
          </Menu>
         
        </Box>



      </Toolbar>
    </AppBar>
  );
};

export default Topbar;