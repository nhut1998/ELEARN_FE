import { TAuthHeader } from "../types/api";
import  Buffer from "buffer";
export interface ITokenLocal {
  token: string;
  userid: string | number;
}

export const contentType = (type: string): Record<"Content-Type", string> => {
  return { "Content-Type": type };
};


export const getAuthHeader = (
  token: string,
  type: TAuthHeader = "Bearer"
): Record<"Authorization", string> => {
  return { Authorization: `${type} ${token}` };
};



export const decodeToken = (): ITokenLocal => {
  const UT: ITokenLocal = { token: "", userid: "" };
  let localToken = getStorage("accessToken");
  if (!localToken) return UT;

  const parse = Buffer.Buffer.from(localToken, "base64").toString().split(".");
  UT.userid = parse.pop() ?? "";
  UT.token = parse.join(".");
  return UT;
};



export const getStorage = (name: string) => {
  return getLocalItem(name) || getSessionItem(name);
}

export const getLocalItem = (name: string) => {
  let data = localStorage.getItem(name)
  try {
    data = JSON.parse(data as string);
  } catch (error) {
    return null
  }
}

export const removeStorage = (name: string) => {
  removeLocalItem(name);
};


export const removeLocalItem = (name:string) =>{
  localStorage.removeItem(name)
}

export const getSessionItem = (name: string) => {
  let data = sessionStorage.getItem(name);
  try {
    data = JSON.parse(data as string)
  } catch (error) {
    return null
  }
}

export const setSessionStorage = (name: string, data: unknown) => {
sessionStorage.setItem(name, JSON.stringify(data));
}

export const setLocalItem = (name: string, data: unknown) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const stringToBase64 = (str: string): string => {
  return Buffer.Buffer.from(str).toString("base64");
};
export const encodeToken = (UT: ITokenLocal): string => {
  return stringToBase64([UT.token, UT.userid].join("."));
};

