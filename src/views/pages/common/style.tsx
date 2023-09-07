import { makeStyles } from "@mui/styles";
const topBarStyle = makeStyles(() => ({
  carAdd: {
    position: "relative",
    "& .modal:hover": {
      display: "block"
    },
    "& .modal": {

      // zIndex:2,
      height: "350px",
      // width:"200px",
      position: "absolute",
      left: "0%",
      // minHeight: "0px",
      // width:"0px",
      top: "105%",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      backgroundColor: "#fff",
      borderRadius: "5px",
      color: "#000",
      borderTop: "5px solid #9c71fb"
    },
    "& .cart": {
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      // border: "solid 1px #000",
      borderRadius: "5px",
      width: "40px",
      height: "40px",
      marginRight: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#000",
      position: "relative",

      "&:hover": {
        backgroundColor: "#DCDCDC"
      },

      "&:hover ~ .modal": {
        display: "block"
      },
      "& > .number-car": {
        borderRadius: "50%",
        width: "10px",
        height: "10px",
        color: "#fff",
        backgroundColor: "rgb(255,0,0)",
        fontSize: "6px",
        position: "absolute",
        top: "10%",
        left: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }
  }


})) as Function;
export default topBarStyle;