import { makeStyles } from "@mui/styles";

const allCourseStyle = makeStyles(() => ({
  allCourse: {
    "& .course-item": {
      position: "relative",

      "& .course-item--title": {
        position: "absolute",
        bottom: 0,
        height: "25%",
        width: "100%",
        borderTop: "1px solid #efe4f7",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        "& .course-avt":{
          position: "relative",
          "& .avt2":{
            position: "absolute",
            left:"45%",
          },
          "& .avt3":{
            position: "absolute",
            left:"90%",
          },
          "& .avt4":{
            position: "absolute",
            left:"130%",
            marginTop:"4px"
          },
        },
        "& .icon-like": {
          display: 'flex',
          alignItems: "center",
          color: "#73dcf4",
        }
      }
    }
  }

})) as Function;

export default allCourseStyle;
