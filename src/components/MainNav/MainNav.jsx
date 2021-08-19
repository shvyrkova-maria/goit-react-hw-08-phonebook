// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
function MainNav() {
  return (
    <>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
    </>
  );
}

// MainNav.propTypes = {
// }

export default MainNav;
