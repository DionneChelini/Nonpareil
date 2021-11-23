import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from '../../hooks/useAuth'
const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  console.log(`AuthenticatedRoute: ${isAuthenticated}`);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to='/login' />
      }
    />
  );
};
export default AuthenticatedRoute;
