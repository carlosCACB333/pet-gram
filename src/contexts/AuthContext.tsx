import { useApolloClient } from '@apollo/client';
import { createContext, FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
export interface IUser {
  email: string;
  password: string;
}
interface AuthContextProps {
  user?: IUser;
  isChecking: boolean;
  token?: string;
  signup: (user: IUser, token: string) => void;
  login: (user: IUser, token: string) => void;
  logout: () => void;
}

export interface AuthState {
  user?: IUser;
  isChecking: boolean;
  token?: string;
}

export const Auth_INITIAL_STATE: AuthState = {
  token: sessionStorage.getItem('token') || undefined,
  user: undefined,
  isChecking: true,
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);
  const client = useApolloClient();
  useEffect(() => {
    dispatch({ type: 'set checking', payload: true });
    setTimeout(() => {
      dispatch({ type: 'set checking', payload: false });
    }, 3000);
  }, []);

  const signup = (user: IUser, token: string) => {
    dispatch({ type: 'set logged out', payload: { user, token } });
    sessionStorage.setItem('token', token);
  };

  const login = (user: IUser, token: string) => {
    dispatch({ type: 'set logged in', payload: { user, token } });
    sessionStorage.setItem('token', token);
  };

  const logout = () => {
    dispatch({ type: 'set logout' });
    sessionStorage.removeItem('token');
    client.clearStore();
  };

  return <AuthContext.Provider value={{ ...state, signup, login, logout }}>{children}</AuthContext.Provider>;
};
