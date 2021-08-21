import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types'
import { getUserIsLoggedIn } from 'redux/auth';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
// PrivateRoute.propTypes = {

// }

export default PrivateRoute;
