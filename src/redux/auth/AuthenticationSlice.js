import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : false,
};

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAccount(state, action) {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      console.log(state.user);
    },
    logoutAccount(state, action) {
      localStorage.removeItem("user");
      state.user = false;
    },
  },
});
export const { loginAccount, logoutAccount } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
