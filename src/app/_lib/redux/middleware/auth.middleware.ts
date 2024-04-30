import { TUser } from "@/app/_models/user.models";
import { setAuthCookie } from "../cookies";
import { deleteCookie } from "cookies-next";
import { axiosInstance } from "../axios.config";
import { login } from "../slices/user.slice";
import { Dispatch } from "@reduxjs/toolkit";

export const userLogin = ({ username, password }: TUser) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axiosInstance().get("/users", {
        params: { username, password },
      });
      const user: TUser = res.data[0];
      console.log(user);

      if (user.id) {
        dispatch(login(user));
        setAuthCookie(JSON.stringify(user), "auth");
      }
      return;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        deleteCookie("auth");
        alert("wrong email/password");
        return err.message;
      }
    }
  };
};

export const keepLogin = (storage: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axiosInstance().get("/users", {
        params: { username: storage.username },
      });
      const user: TUser = res.data[0];
      if (user.id) {
        dispatch(login(user));
      }
      return;
    } catch (err: any) {
      deleteCookie("auth");
      window.location.reload();
      return err.message;
    }
  };
};
