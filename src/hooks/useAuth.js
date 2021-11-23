import { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};
