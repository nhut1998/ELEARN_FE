import Button from '@mui/joy/Button'
import { CssVarsProvider, Theme } from '@mui/joy/styles';
import { SxProps } from "@mui/system";
import { FunctionComponent,ReactNode } from 'react';

export interface IButtons {
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  onClick?(): void;
}
const Buttons: FunctionComponent<IButtons> = (props) => {
  const { sx={}, onClick } = props;

  const clickBtn = ()=> {
    onClick &&  onClick();
    console.log("11111111click")
  }

  return (
    <CssVarsProvider>
      <Button onClick={clickBtn} sx={{
        ...sx,
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        outline: "unset",
      }} variant="solid">
        {props.children}
      </Button>
    </CssVarsProvider>
  )

}
export default Buttons;