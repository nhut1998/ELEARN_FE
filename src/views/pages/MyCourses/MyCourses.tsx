import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Avatar, Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import { Item } from "app/service/GridItem";
import Slider from '@mui/material/Slider';
import courseStyle from "./style";
import { useDispatch, useSelector } from 'react-redux';
import { catalog, catalogList } from "features/course/store/slice";
import our1 from "assets/images/our1.png";
import our2 from "assets/images/our2.jpg";
import our3 from "assets/images/our3.jpg";
import our4 from "assets/images/our4.jpg";
import our5 from "assets/images/our5.png";
import avatar from "assets/images/avatar-cute-vui-nhon.jpg"
import SchoolIcon from '@mui/icons-material/School';
import Buttons from "app/service/Buttons";
import { courseData, getCourse } from "features/courses/store/slice";
import { actionGetCoursePaging, sliceCoursePaging } from "features/coursePaging/store/slice";
import { cartAction, cartList } from "features/cart/store/slice";
import { ICourseElearn} from "types/models/Course";

const MyCourses: FunctionComponent = () => {
  const [pageSize, setPageSize] = useState(8)
  const dispatch = useDispatch();
  const catalogData = useSelector(catalogList);
  const coursePaging = useSelector(sliceCoursePaging);
  const cartItem = useSelector(cartList);


  useEffect(() => {
    dispatch(catalog(''))
  }, [dispatch])

  useEffect(() => {
    const param = {
      name: "",
      catalog_id: "",
      maker_id: "",
      page_num: 4,
      page_size: 0,
    }
    dispatch(actionGetCoursePaging(param))
  }, [dispatch])

  const handleAddCart = (item:ICourseElearn)=>{
    dispatch(cartAction(item))
  }
  console.log("cartItem",cartItem)
  const handleImg = () => {
    const number = Math.floor(Math.random() * 5) + 1
    switch (number) {
      case 1:
        return <img style={{ borderRadius: "5px" }} src={our1} width="100%" height="100%" alt="sss" />
      case 2:
        return <img style={{ borderRadius: "5px" }} src={our2} width="100%" height="100%" alt="sss" />;
      case 3:
        return <img style={{ borderRadius: "5px" }} src={our3} width="100%" height="100%" alt="sss" />;
      case 4:
        return <img style={{ borderRadius: "5px" }} src={our4} width="100%" height="100%" alt="sss" />;
      case 5:
        return <img style={{ borderRadius: "5px" }} src={our5} width="100%" height="100%" alt="sss" />;
    }
  }

  const handleSeeMore = (e: string) => {
    var num = pageSize
    if (e === "next") {
      setPageSize(num += 4)
    }
    const param = {
      name: "",
      catalog_id: "",
      maker_id: "",
      page_num: pageSize,
      page_size: 0,
    }
    dispatch(actionGetCoursePaging(param))
  }

  const classes = courseStyle()
  return (
    <>
      <Grid container spacing={10}>
        <Grid item xs={8}>
          <Box>
            <Box sx={{ paddingBottom: "15px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Our Category</Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {
                  catalogData.map((item) => (
                    <Grid item xs={3} key={item.id}>
                      <Item sx={{ height: "250px", backgroundColor: `${item.color}` }}>

                        <Box>
                          <Box className={classes.icon}><i className={`${item.icon}`}></i></Box>
                          <Typography sx={{ fontWeight: "bold", textAlign: "left", paddingBottom: "10px" }}> {item.catalog_name}</Typography>
                          <Box sx={{ width: "100%" }}>
                            <Typography sx={{ textAlign: "left", fontSize: "13px", }}>Progress</Typography>
                            <Slider
                              className={classes.slider}
                              aria-label="Temperature"
                              // getAriaValueText={valuetext}
                              color="secondary"
                              value={item.progress}
                            />
                            <Typography sx={{ textAlign: "right", fontSize: "13px" }}>{item.progress}%</Typography>
                          </Box>
                        </Box>

                      </Item>
                    </Grid>
                  ))
                }

              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box >
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={10} >
        <Grid item xs={12} sx={{ marginTop: "30px" }}>
          <Box>
            <Box sx={{ paddingBottom: "15px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography sx={{ fontWeight: "bold" }}>Our Top Courses</Typography>
              <Box sx={{
                marginLeft: "auto",
                color: "#999999",
                fontSize: "13px"
              }}>See all <i className="fa-solid fa-arrow-right"></i></Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} >
              <Grid container spacing={3} rowSpacing={12}>
                {
                  coursePaging.result.map((item) => (
                    <Grid item xs={3} key={item.courseId}>
                      <Box className={classes.ourTopParent} >
                        <Item sx={{
                          "&::after":{
                            borderRadius:"5px",
                            width: "100%", height: "250px",
                            content: "''",
                            display: "block",
                            background: "rgba(0, 0, 0, 0.7)",
                            position:"absolute",
                            top:0
                          },
                      
                          width: "100%", height: "250px", textAlign: "left", padding: "0px", position: "relative"
                        }}>
                          {handleImg()}

                          {/* <img style={{ borderRadius: "5px" }} src={our5} width="100%" height="100%" alt="sss" /> */}
                          <Box className="content-name">
                            <Typography sx={{ fontWeight: "bold", fontSize:"20px" }}>{item.name}</Typography>
                            <Box className="text-name"> <Typography className="content-name--text" sx={{color: "#9c71fb", fontSize:"13px" }}>{item.catalogList.catalogDescription}</Typography></Box>
                           
                          </Box>
                        </Item>
                        <Box className="ourTopChild" >
                          <Box sx={{ display: "flex" }}>
                            <Avatar src={avatar} />
                            <Box sx={{ marginLeft: "5px" }}>
                              <Typography sx={{ fontSize: "12px" }}>{item.makerCourse.roleName}</Typography>
                              <Typography sx={{ fontWeight: "bold" }}>{item.makerCourse.fullName}</Typography>
                            </Box>

                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <SchoolIcon sx={{ marginTop: "6px" }} />
                            <Box sx={{ marginLeft: "5px" }}>
                              <Typography sx={{ fontSize: "12px" }}>Học viên</Typography>
                              <Typography sx={{ fontWeight: "bold" }}>0</Typography>
                            </Box>

                          </Box>
                          <Box sx={{ fontWeight: "bold", color: "rgb(156, 113, 251)" }}>{item.tuition}$</Box>

                        </Box>
                        <Box className="ourTop">
                          <Typography sx={{ color: "#9c71fb", fontSize: "13px" }}>Ngày khởi tạo:<span className="ms-1">{moment(item.createAt).format("DD/MM/YYYY")}</span></Typography>
                          <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>{item.name} </Typography>
                          <Typography sx={{ color: "#9c71fb", fontSize: "13px" }}>{item.catalogList.catalogDescription}</Typography>

                          <Box className="mt-2" sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                            <Box sx={{ display: "flex" }}>
                              <Avatar src={avatar} />
                              <Box sx={{ marginLeft: "5px" }}>
                                <Typography sx={{ color: "#9c71fb" }}>{item.makerCourse.roleName}</Typography>
                                <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>{item.makerCourse.fullName}</Typography>
                              </Box>
                            </Box>
                            <Box sx={{ fontWeight: "bold", color: "#9c71fb", fontSize: "20px" }}>{item.tuition}$</Box>
                          </Box>

                          <Box sx={{ minHeight: "70px", maxWidth: "350px" }}>
                            <Typography sx={{ color: "#9c71fb", wordWrap: "break-word", fontSize: "13px" }}>{item.description}</Typography>
                          </Box>
                          <Box >
                            <Buttons sx={{
                              marginRight: "40px",
                              backgroundColor: "#fff",
                              color: "#000",
                              "&:hover": {
                                backgroundColor: "#fff !important"
                              }
                            }}>Chi tiết</Buttons>

                            <Buttons 
                            onClick={()=>handleAddCart(item)}
                            sx={{
                              marginTop: "10px",
                              backgroundColor: "#9c71fb",
                              color: "#000",
                              "&:hover": {
                                backgroundColor: "#9c71fb !important"
                              }
                            }}>Thêm vào giỏ hàng</Buttons>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))
                }
              </Grid>
            </Box >
          </Box >
        </Grid >

        <Grid item xs={12}>
          <Box className="mt-3" sx={{ textAlign: "center" }}>
            {
              coursePaging.result.length >=4 &&
              <Buttons
              onClick={() => handleSeeMore("next")}
              sx={{
                width: "120px",
                backgroundColor: "#000",
                color: "#fff",
                "& > i": {
                  transition: "all .5s ease-out",
                  display: "inline-block",
                },
                "&:hover": {
                  backgroundColor: "#000 !important",
                  color: "#9c71fb",
                },
                "&:hover > i": {
                  transform: "translate(0, 5px)"

                }
              }}>See More <i className="fa-solid fa-angles-down ms-2"></i></Buttons>
            }
          </Box>
        </Grid>
      </Grid >
    </>

  )
}

export default MyCourses