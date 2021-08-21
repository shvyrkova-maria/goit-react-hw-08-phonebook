// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact>
        Sign In
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </div>
  );
}

// AuthNav.propTypes = {
// }

export default AuthNav;
