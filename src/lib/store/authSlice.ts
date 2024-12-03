/**
 * @class authSlice
 * @description purpose of this slice is to manage authentication states
 * @author Nawod Madhuwantha
*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const loadAuthFromLocalStorage = () => {
  try {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : { isAuthenticated: false, user: null };
  } catch {
    return { isAuthenticated: false, user: null };
  }
};

const initialState : AuthState = loadAuthFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //set login user
    login(state, action: PayloadAction<{ name: string; email: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    //make user logout
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
