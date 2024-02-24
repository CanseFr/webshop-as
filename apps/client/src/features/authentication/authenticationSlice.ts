import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDecodedAccessToken } from '../../common/tools/jwt-tool.ts';
import { AppDispatch, AuthState } from '../../common/types/auth.ts';
import { LoginDto } from 'api/dist/src/auth/dto/login.dto';

const initialState: AuthState = {
  isAuthenticated: false,
  tokenHashed: '',
  role: '',
  userId: null,
  avatarPath: '',
  email: '',
  firstname: '',
  lastname: '',
  exp: null,
  iat: null,
  errorFetchingLogin: '',
};

export const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    saveToken(state, action: PayloadAction<string>) {
      localStorage.setItem('token', action.payload);
      const tokenDecoded = getDecodedAccessToken(action.payload);
      state.isAuthenticated = true;
      state.tokenHashed = action.payload;

      state.role = tokenDecoded.role;

      state.userId = tokenDecoded.userId;
      state.avatarPath = tokenDecoded.avatarPath;
      state.email = tokenDecoded.email;
      state.firstname = tokenDecoded.firstname;
      state.lastname = tokenDecoded.lastname;
      state.exp = tokenDecoded.exp;
      state.iat = tokenDecoded.iat;

      state.errorFetchingLogin = '';
    },
    logout(state) {
      localStorage.removeItem('token');

      state.isAuthenticated = false;
      state.tokenHashed = '';

      state.role = '';

      state.userId = null;
      state.avatarPath = '';
      state.email = '';
      state.firstname = '';
      state.lastname = '';
      state.exp = null;
      state.iat = null;
    },
    error(state, action: PayloadAction<string>) {
      state.errorFetchingLogin = action.payload;
    },
  },
});

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  const postData: LoginDto = {
    email,
    password,
  };

  try {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Une erreur est survenue lors de la connexion');
    }

    const data = await response.json();
    dispatch(authenticateSlice.actions.saveToken(data.accessToken));
  } catch (error: any) {
    dispatch(authenticateSlice.actions.error(error.message));
  }
};

export const { logout } = authenticateSlice.actions;

export default authenticateSlice.reducer;
