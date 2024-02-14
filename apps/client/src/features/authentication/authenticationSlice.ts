import { createSlice } from '@reduxjs/toolkit';
import { LoginDto } from 'api/dist/src/auth/dto/login.dto';
import { jwtDecode } from 'jwt-decode';

const initialState = {
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

const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    login() {
      // console.log(action.payload);
      // console.log(state);
    },
    saveToken(state, action) {
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
    error(state, action) {
      state.errorFetchingLogin = action.payload;
    },
  },
});
type AppDispatch = (args: any) => any;

export function login(email: string, password: string) {
  const postData: LoginDto = {
    email: email,
    password: password,
  };
  return async function (dispatch: AppDispatch, getState: any) {
    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'authenticate/saveToken', payload: data.accessToken }))
      .catch(() => dispatch({ type: 'authenticate/error', payload: 'Une erreur est apparut lors de la connexion' }));
  };
}

export const getDecodedAccessToken = (token: string): any => {
  try {
    return jwtDecode(token);
  } catch (Error) {
    return null;
  }
};

export const { logout } = authenticateSlice.actions;
export default authenticateSlice.reducer;
