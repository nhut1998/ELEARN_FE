import { IError } from "../api";

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  user_name: string,
  full_name: string,
  email: string,
  phone_number: string,
  password: string
}

export interface ILoginResponse {
  menus: IMenu
  token: string;
  user_info: IUser
}

export interface IRegisterRespone {
  code: string,
  message: string,
}


export interface IUser {
  id: number;
  username: string;
  fullname: string;
  email: string;
  role_id: any[];
  role_fcc: any[];
  roleName: string[];
  positions: {
    branch: {
      id: string,
      code: string,
      name: string,
      address: string,
      display_name: string,
      is_parent: number
    };
    department: {
      id: string,
      code: string,
      level: number,
      parent_id: string,
      name: string,
      description: string,
      short_name: string
    }
  };
  positions_fcc: {
    branch_code: string,
    branch_name: string
  }
}

export interface IAccountState {
  isAuth: boolean;
  isInitial: boolean;
  isFetching: boolean;
  isFetched: boolean;
  user?: IUser;
  errors: IError[];
  sessionOut: boolean;
}


export interface ILoginForm extends ILogin {
  remember?: boolean;
}

export interface IAccessTokenBody {
  userid: string | number;
  token: string;
}

export interface IMenu {
  id?: string;
  link?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  sub_title?: string;
  children?: IMenu[];
}