import { makeStyles } from "@mui/styles";


const registerStyle = makeStyles(()=>({
  bgLogin:{
    "& form":{
      width:"80%",
    },
    height:"100vh",
    backgroundColor:"#f7f7f7",
    // backgroundImage: `url(${bg})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
   login:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"400px",
    height:"600px",
    borderRadius:"30px",
    // border:"3px solid #fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
   },
   btnLogin:{
     backgroundColor:"#000 !important",
     boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    marginTop:"25px !important",
    width:"100%",
    borderRadius:"30px !important",
    color:"#fff !important",
   },
   loginInput:{
    paddingLeft:"10px !important",
    height:"45px",
    width:"100%",
    outline:"none",
    border:"none",
    borderRadius:"4px",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    // boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    //border:"2px solid #5193f2 !important",
    color:"#000 !important",
    //backgroundColor:"#000 !important",
   }
})) as Function;

export default registerStyle;