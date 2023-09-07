import { makeStyles } from "@mui/styles";
import our1 from "../../../assets/images/our5.png"
const courseStyle = makeStyles(() => ({
  // course: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection:"column",
  //   height:"100%"
  // },
  slider: {
    "& .MuiSlider-thumb": {
      display: "none"
    },
    "& .MuiSlider-rail": {
      height: "7px"
    },
    "& .MuiSlider-track": {
      height: "7px",
      backgroundColor: "#000"
    }
  },
  icon: {
    textAlign: "left",
    fontSize: "18px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: "50%"
  },
  ourTopParent: {
    position: "relative",
    "& .content-name": {
      zIndex:1,
      width: "100%",
      heigth: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      color: "#fff",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      "& .text-name":{
        position: "relative",
        " & .content-name--text::after": {
          position: "absolute",
          width: "70px",
          height: "1.5px",
          top:"50%",
          left:"15%",
          content: "''",
          display: "block",
          background: "linear-gradient(to left, #9c71fb, transparent)"
        },
        " & .content-name--text::before": {
          position: "absolute",
          width: "70px",
          height: "1.5px",
          top:"50%",
          right:"15%",
          content: "''",
          display: "block",
          background: "linear-gradient(to right, #9c71fb, transparent)"
        }
      }
     
    },
    " & .ourTop": {
      zIndex:2,
      padding: "10px",
      borderRadius: "5px",
      position: "absolute",
      width: "90%",
      height: "290px",
      top: "10%",
      left: "5%",
      display: "none",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      boxShadow: "rgba(255, 255, 255, 0.25) 0px 0.0625em 0.0625em, rgba(255, 255, 255, 0.25) 0px 0.125em 0.5em, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset",
      transition: "height 0.1s ease 0s",
    },
    "&:hover > .ourTopChild": {
      display: "none",

    },
    "&:hover > .ourTop": {
      borderTop: "5px solid #fff",
      display: "block",

      // "&::after": {
      //   position: "absolute",
      //   width: 0,
      //   height: 0,
      //   content: "''",
      //   display: "block",
      //   borderLeft: "10px solid transparent",
      //   borderRight: "10px solid transparent",
      //   borderTop: "10px solid #fff",
      //   left: "45%",
      //   top: "0",
      // },
    },
    "& .ourTopChild": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around ",
      transition: "all .5s",
      backgroundColor: "#fff",
      width: "90%",
      height: "80px",
      position: "absolute",
      left: "5%",
      bottom: "-28%",
      borderRadius: "5px",
      borderBottom: "5px solid #000",

      "&::after": {
        position: "absolute",
        width: 0,
        height: 0,
        content: "''",
        display: "block",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "10px solid #000",
        left: "45%",
        bottom: "0",
      },

    }
  },
  ourTops: {
    backgroundImage: `url(${our1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%"
  }
  // scrollbar: {

  //   height: "400px",
  //   backgroundColor: "#F5F5F5",
  //   overflowY: "scroll",
  //   marginBottom: "25px",
  // },
  // content:{
  //   minHeight: "500px",
  // }
})) as Function

export default courseStyle;