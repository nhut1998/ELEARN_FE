import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccessTokenBody , IAccountState, ILoginForm, IRegister, IUser} from "types/models/Account";
import { IError, RootState } from "types";

const initialState:IAccountState = {
  isAuth: false,
  isInitial: false,
  isFetching: false,
  isFetched: false,
  user: undefined,
  errors: [],
  sessionOut: false,
}

export enum ESUPERUSER_VALUE {
  ACCOUNT_TYPE_STAFF = 0,
  ACCOUNT_TYPE_ADMIN = 1,
}

export enum ESUPERUSER_LABEL {
  ACCOUNT_TYPE_STAFF = "Nhân viên",
  ACCOUNT_TYPE_ADMIN = "Admin",
}

const AuthSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    initial(state, action: PayloadAction<Partial<IAccountState>>) {

      state.isAuth = Boolean(action.payload.isAuth);
      state.isInitial = true;
      state.isFetching = false;
      state.user = undefined;
      state.errors = [];
    },
    accessToken(state, action: PayloadAction<IAccessTokenBody>) {
      state.isInitial = false;
      state.isAuth = false;
      state.user = undefined;
      state.isFetching = true;
      state.errors = [];
    },
    login(state, action: PayloadAction<ILoginForm>) {
      // console.log("state login",state,action)
      state.isAuth = false;
      state.isInitial = true;
      state.isFetching = true;
      state.isFetched = false;
      state.user = undefined;
      state.errors = [];
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      state.isAuth = true;
      state.isInitial = true;
      state.isFetching = false;
      state.user = action.payload;
      state.errors = [];
    },
    loginFailure(state, action: PayloadAction<IError[]>) {
      state.isAuth = false;
      state.isInitial = true;
      state.isFetching = false;
      state.isFetched = true;
      state.user = undefined;
      state.errors = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.isInitial = true;
      state.isFetching = false;
      state.user = undefined;
      state.errors = [];
    },
    sessionOut(state) {
      state.sessionOut = true;
    },
    register(state, action: PayloadAction<IRegister>){
      state.user = undefined;
    }
  }
})


// Actions 
export const initial = AuthSlice.actions.initial;
export const accessToken = AuthSlice.actions.accessToken;
export const login = AuthSlice.actions.login;
export const loginSuccess = AuthSlice.actions.loginSuccess;
export const loginFailure = AuthSlice.actions.loginFailure;
export const logout = AuthSlice.actions.logout;
export const sessionOut = AuthSlice.actions.sessionOut;
export const registerUsers = AuthSlice.actions.register;


// selectors

export const getIsAuth = (state:RootState) => state.auth.isAuth;
export const getIsInitial = (state:RootState) => state.auth.isInitial;
export const getIsFetching = (state: RootState) => state.auth.isFetching;
export const getIsFetched = (state: RootState) => state.auth.isFetched;
export const getCurrentUser = (state: RootState) => state.auth.user;
export const getAuthErrors = (state: RootState) => state.auth.errors;
export const getSesstionStatus = (state: RootState) => state.auth.sessionOut;
export const getAccountInfo = (state: RootState) => state.auth.user;
export const getReponseRegister = (state:RootState) => state.auth

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;