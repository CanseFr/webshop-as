export type AppDispatch = (args: any) => any;

export interface AuthState {
  isAuthenticated: boolean;
  tokenHashed: string;
  role: string;
  userId: null;
  avatarPath: string;
  email: string;
  firstname: string;
  lastname: string;
  exp: number | null;
  iat: number | null;
  errorFetchingLogin: string;
}