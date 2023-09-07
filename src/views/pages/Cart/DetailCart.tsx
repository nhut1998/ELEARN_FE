import { FunctionComponent, useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { cartList, removeCart } from "features/cart/store/slice";
import { useDispatch, useSelector } from "react-redux";
import our1 from "assets/images/our1.png";
import Input from '@mui/joy/Input';
import { CssVarsProvider } from '@mui/joy/styles';
import { List } from 'linq-typescript';

interface IInfo {
  quantity: number,
  provisional: number,
  total_count: number,
}

const DetailCart: FunctionComponent = () => {
  const cartItem = useSelector(cartList);
  const dispatch = useDispatch();
  const [totals, setTotal] = useState<IInfo>()

  const deleteCart = (id: string) => {
    dispatch(removeCart(id))
  }

  useEffect(() => {
    const total = new List<any>(cartItem).sum(s => Number.parseFloat(s.tuition));
    const info = {
      quantity: cartItem.length,
      provisional: total,
      total_count: total

    }

    setTotal(info)

  }, [totals])

  return (
    <>
      <Grid container spacing={10}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>Course</Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>Tuition</Typography>
              </Box>
            </Grid>
            {/* <Grid item xs={12}>
              <Box sx={{
                width:"100%",
                height:"60px",
                borderRadius:"5px",
                borderLeft:"5px solid #DCDDFC",
                backgroundColor:"rgba(212,243,241, 0.3)",
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}>

              </Box>
            </Grid> */}
            {
              cartItem.length ? cartItem.map((item) => (
                <Grid item xs={12} key={item.courseId}>
                  <Box sx={{
                    width: "100%",
                    height: "80px",
                    borderRadius: "5px",
                    borderLeft: "5px solid #DCDDFC",
                    backgroundColor: "rgba(228,230,255, 0.3)",
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    padding: "20px 10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "& i": {
                      color: "red",
                    }
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ width: "60px", height: "60px" }}>
                      <img style={{ borderRadius: "5px" }} src={our1} width="100%" height="100%" alt="sss" />
                      </Box>
                      <Box sx={{ marginLeft: "10px" }}>
                        <Typography sx={{ color: "#000", fontSize: "15px", fontWeight: "bold" }}>{item.name}</Typography>
                        <Typography sx={{ fontSize: "13px" }}>{item.catalogList.catalogDescription}</Typography>
                        <Typography sx={{ fontSize: "15px", color: "#9c71fb" }}>{item.tuition}$</Typography>
                      </Box>

                    </Box>
                    <i onClick={() => deleteCart(item.courseId)} className="fa-solid fa-trash-can"></i>
                  </Box>
                </Grid>
              )) :
                <Grid item xs={12}>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "60px",
                    borderRadius: "5px",
                    borderLeft: "5px solid #DCDDFC",
                    backgroundColor: "rgba(228,230,255, 0.3)",
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  }}>
                    <Typography sx={{ color: "red", fontWeight: "bold" }}>KHÔNG CÓ KHÓA HỌC NÀO TRONG GIỎ HÀNG</Typography>
                  </Box>
                </Grid>
            }
          </Grid>

        </Grid>

        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold", fontSize: "18px", textAlign: "center" }}>Infomation</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{
                width: "100%",
                height: "250px",
                borderRadius: "5px",
                padding: "20px",
                backgroundColor: "rgba(228,230,255, 0.3)",
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}>
                {


                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>Quantity:</Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}><span>{totals?.quantity ?? 0}</span> Course</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>Provisional:</Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#9c71fb" }}><span>{totals?.provisional ?? 0}</span>$</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15px" }}>
                      <CssVarsProvider>
                        <Input autoComplete="off" placeholder="Mã giảm giá (nếu có)"
                        />
                      </CssVarsProvider>
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
                        Apply
                      </Button>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>Total amount:</Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#9c71fb" }}>{totals?.total_count ?? 0}$</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "13px", textAlign: "right", color: "#9c71fb" }}>VAT Included</Typography>

                    <Button sx={{
                      width: "100%",
                      marginTop: "20px",
                      outline: "unset",
                      border: "unset",
                      backgroundColor: "#000",
                      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      color: "#9c71fb",
                      "&:hover": {
                        backgroundColor: "#000",
                      }
                    }} variant="outlined">
                      MAKE PAYMENT
                    </Button>
                  </Box>


                }



              </Box>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default DetailCart;