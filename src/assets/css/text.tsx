import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const textStyle = makeStyles((theme:Theme)=>({
  "@global": {
    "text-primary":{
      color:theme.palette.primary.main
    },

  }
})) as Function;

export default textStyle