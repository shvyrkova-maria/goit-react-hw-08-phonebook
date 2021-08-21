import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types'
import { getUserIsLoggedIn } from 'redux/auth';

function PublicRoute({
  children,
  resticted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const shouldRedirect = isLoggedIn && resticted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

// PublicRoute.propTypes = {

// }

export default PublicRoute;
