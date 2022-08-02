import { AuthState, IUser } from './AuthContext';

type AuthAction =
  | { type: 'set checking'; payload: boolean }
  | {
      type: 'set logged in';
      payload: { user: IUser; token: string };
    }
  | {
      type: 'set logged out';
      payload: { user: IUser; token: string };
    }
  | {
      type: 'set logout';
    };

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'set checking':
      return { ...state, isChecking: action.payload };
    case 'set logged in':
      return { ...state, ...action.payload };
    case 'set logged out':
      return { ...state, ...action.payload };

    case 'set logout':
      return { ...state, user: undefined, token: undefined };
    default:
      return state;
  }
};
