
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Buttons from "app/service/Buttons";
import our1 from "assets/images/our1.png";
import our2 from "assets/images/our2.jpg";
import our3 from "assets/images/our3.jpg";
import our4 from "assets/images/our4.jpg";
import our5 from "assets/images/our5.png";
import { useDispatch, useSelector } from "react-redux";
import { cartList, removeCart } from "features/cart/store/slice";
import { useNavigate } from 'react-router-dom';

const Modal: FunctionComponent = () => {
  const cartItem = useSelector(cartList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteCart = (id: string) => {
    dispatch(removeCart(id))
  }
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
  // onClick={()=>navigate("/register")}
  const goCart = () =>{
    navigate("/cart-detail")
  }
  return (
    <>
      {
        cartItem.length ? <Box sx={{ padding: "20px" }}>
          <Typography sx={{ textAlign: "center", color: "#9c71fb", fontWeight: "bold" }}>TOTAl: 100$</Typography>
          <Box sx={{ height: "220px", overflow: "auto" }}>

            {
              cartItem.map((item) => (
                <Box key={item.courseId} sx={{
                  marginTop: "20px",
                  borderBottom: "1px solid #DCDCDC",
                  backgroundColor: "#fff",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  "& i": {
                    color: "red",
                  }
                }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "60px", height: "60px" }}>{handleImg()}</Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography sx={{ color: "#000", fontSize: "15px", fontWeight: "bold" }}>{item.name}</Typography>
                      <Typography sx={{ fontSize: "13px" }}>{item.catalogList.catalogDescription}</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#9c71fb" }}>{item.tuition}$</Typography>
                    </Box>

                  </Box>
                  <i onClick={() => deleteCart(item.courseId)} className="fa-solid fa-delete-left"></i>
                </Box>

              ))
            }
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px", }}>
            <Buttons onClick={goCart}>ĐI TỚI GIỎ HÀNG</Buttons>
            <Buttons sx={{ marginLeft: "5px" }}>THANH TOÁN</Buttons>
          </Box>
        </Box> :
          <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "red" }}>
            <Typography >
              Không có khóa học nào trong giỏ hàng
            </Typography>
          </Box>
      }




    </>



  )
}

export default Modal;