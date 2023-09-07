import { getIsAuth, initial } from "features/auth/store/slice";
import { Fragment, FunctionComponent, ReactNode, memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, matchPath, useLocation } from "react-router-dom";
import { decodeToken, getStorage } from "utils";
import { APP_TOKEN_NAME } from "utils/constants";

export interface IAuthContextProps {
  children?: ReactNode;
}

const AuthContext: FunctionComponent<IAuthContextProps> = (props) => {
  const isAuth = useSelector(getIsAuth);
  const { children } = props;
  const location = useLocation()
  const dispatch = useDispatch();
    const token =  localStorage.getItem(APP_TOKEN_NAME)

  useEffect(() => {
    try {
      if (!isAuth) {
        // dispatch(initial({ isAuth: true }));
        // if (!isFetched){
        //   const { token, userid } = decodeToken();
          
        //   if (token && userid) {
        //     isFetching || dispatch(accessToken({token: token, userid: userid}));
        //   } else {
        //     dispatch(initial({ isAuth: false }));
        //   }
        // }
        // else{
        // isFetched || dispatch(initial({ isAuth: false }));
        // }
      } else {

      //  dispatch(initial({ isAuth: true }));
      }
    } catch (e) {
      // dispatch(initial({ isAuth: false }));
    }
  });

  if (isAuth && matchPath('/login', location.pathname)) {
    return <Navigate to="/" />
  }
  
  return (
    <Fragment>{children} </Fragment>
  )
}

export default memo(AuthContext)