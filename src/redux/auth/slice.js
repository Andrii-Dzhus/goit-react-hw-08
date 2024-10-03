import { createSlice } from "@reduxjs/toolkit";

// Створюємо slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Експортуємо дії (actions)
export const { setUser, logout } = authSlice.actions;

// Експортуємо reducer під іменем authReducer
export const authReducer = authSlice.reducer; // Використовуємо іменований експорт
