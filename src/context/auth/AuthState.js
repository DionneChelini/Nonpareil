import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import AuthContext from './authContext';
//This is in AuthState file
const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);

    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export default AuthContextProvider;