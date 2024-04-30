import { createSlice } from "@reduxjs/toolkit";
import { initialUsers } from "../initial";
import { TUser } from "../../../_models/user.models";
import { deleteCookie } from "cookies-next";
import type { PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: initialUsers,
  reducers: {
    login: (state, action: PayloadAction<TUser>) => {
      console.log(action.payload);

      state = { ...state, ...action.payload };
      return state;
    },
    logout: (state) => {
      deleteCookie("auth");
      state = initialUsers;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
