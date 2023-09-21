import { Box, Button, Grid, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import allCourseStyle from "./style";
import avt01 from "assets/images/avt01.png";
// import avt02 from "assets/images/avt02.png";
import avt03 from "assets/images/avt03.jpg";
import avt04 from "assets/images/avt05.jpg";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { actionLike, actionListCourse, courseAllSelector } from "features/allCourse/store/slice";
import { ICourseElearn } from "types/models/Course";
import { cartAction, cartList } from "features/cart/store/slice";

const AllCourse: FunctionComponent = () => {
  const dispatch = useDispatch();
  const courseAllList = useSelector(courseAllSelector);
  const listCart = useSelector(cartList)

  useEffect(() => {
    const param = {
      name: "",
      catalog_id: "",
      maker_id: "",
      page_num: 10,
      page_size: 0,
    }
    dispatch(actionListCourse(param))
  }, [dispatch])

  const handlePagination = (event: any, page: number) => {
    console.log("page", page)
    const param = {
      name: "",
      catalog_id: "",
      maker_id: "",
      page_num: 10,
      page_size: page - 1,
    }
    dispatch(actionListCourse(param))
  }

  const handleLike = (e: number) => {
    const param = {
      course_id: "5a81ccbc-ce65-4062-ab38-3f157f45bb56",
      user_id: "nhutscb1"
    }
    dispatch(actionLike(param))
  }

  const handleAddCart = (item: ICourseElearn) => {
    dispatch(cartAction(item))
  }

  const isBtn = (id: string) => {
    const isBtnCart = listCart.some(item=> item.courseId === id)
    return isBtnCart
  }


  const classes = allCourseStyle();
  return (
    <>
      <Grid container spacing={2} className={classes.allCourse}>
        {
          courseAllList.result.map((item) => (
            <Grid item xs={2.4} key={item.courseId}>
              <Box
                className="course-item"
                sx={{
                  borderRadius: "5px",
                  height: "250px",
                  backgroundColor: "#fff",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                <Box sx={{ padding: "15px" }}>
                  <Button sx={{ backgroundColor: "rgba(204, 243, 252, 0.5)", color: "#73dcf4", textTransform: "capitalize" }}>
                    Detail
                  </Button>
                  <Button disabled={isBtn(item.courseId)}    onClick={() => handleAddCart(item)} sx={{ backgroundColor: "rgba(240, 206, 209, 0.5)", color: "#E4A9AE", textTransform: "capitalize", marginLeft: "10px" }}>
                    Add To Cart
                  </Button>
                </Box>

                <Box sx={{ padding: "0px 15px" }}>
                  <Typography sx={{ fontSize: "20px", wordWrap: "break-word", fontWeight: "bold" }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: "14px", wordWrap: "break-word", color: "#CCCCCC" }}>{item.description}</Typography>
                </Box>

                <Box className="course-item--title" sx={{
                  padding: "15px",
                  display: 'flex',
                  alignItems: "center",
                  justifyContent: 'space-between',
                }}>
                  <Box
                    className="course-avt"
                    sx={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                    <Box sx={{ width: "25px", height: "25px" }}> <img style={{ borderRadius: "50%" }} src={avt01} width="100%" height="100%" alt="sss" /></Box>
                    <Box className="avt2" sx={{ width: "25px", height: "25px" }}> <img style={{ borderRadius: "50%" }} src={avt04} width="100%" height="100%" alt="sss" /></Box>
                    <Box className="avt3" sx={{ width: "25px", height: "25px" }}> <img style={{ borderRadius: "50%" }} src={avt03} width="100%" height="100%" alt="sss" /></Box>
                    <Box className="avt4" sx={{
                      width: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "25px",
                      backgroundColor: "rgba(204, 243, 252, 0.7)",
                      borderRadius: "50%",
                      fontSize: "14px"
                    }}> +3</Box>
                  </Box>
                  <Box className="icon-like">
                    <Box sx={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <i style={{ cursor: "pointer" }} className="fa-regular fa-comment"></i>
                      <Typography sx={{ color: "#CCCCCC", marginLeft: "6px" }}>2</Typography>
                    </Box>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "15px",

                    }}>
                      <i onClick={() => handleLike(1)} style={{ cursor: "pointer" }} className="fa-solid fa-thumbs-up"></i>
                      <Typography sx={{ color: "#CCCCCC", marginLeft: "6px" }}>2</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))
        }
      </Grid>
      <Grid container spacing={2} className="mt-4">
        <Grid item xs={12} sx={{alignContent:"center"}}>
          <Stack spacing={2}>
            <Pagination sx={{
              "& .MuiPagination-ul":{
                justifyContent:"center"
              }
            }} count={courseAllList.total_count % 10 + 1} onChange={handlePagination} variant="outlined" color="primary" />
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
export default AllCourse;