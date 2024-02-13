import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  isAuthenticated: false,
  email: '',
  password: '',
  role: '',
};

const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    login: {
      prepare(email: string, password: string): any {
        return {
          payload: { email, password },
        };
      },
      reducer(state, action) {
        state.user = 'Canse';
        state.isAuthenticated = true;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.role = 'ADMIN';
      },
    },
    logout(state) {
      state.user = '';
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authenticateSlice.actions;
export default authenticateSlice.reducer;
