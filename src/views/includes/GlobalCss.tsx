import { FC,memo } from "react";
import textStyle from "assets/css/text";
import ecommerce from "assets/css/ecommerce";
import sizeStyle from "assets/css/size";

const GlobalCss: FC = () => {
  textStyle();
  ecommerce();
  sizeStyle();

  return null
}
export default memo(GlobalCss)
