// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <>
      <NavLink to="/register" exact>
        Register
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </>
  );
}

// AuthNav.propTypes = {
// }

export default AuthNav;
