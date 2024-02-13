import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './features/authentication/authenticationSlice.ts';

const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
  },
});

export default store;
