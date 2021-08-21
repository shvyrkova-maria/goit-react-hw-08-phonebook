import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getUserIsLoggedIn } from 'redux/auth';

function MainNav() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
      )}
    </>
  );
}

// MainNav.propTypes = {
// }

export default MainNav;
