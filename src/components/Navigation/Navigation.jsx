// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Container from 'components/Container/Container';

function Navigation() {
  return (
    <header>
      <Container>
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/contacts" exact>
            Contacts
          </NavLink>
          <NavLink to="/register" exact>
            Register
          </NavLink>
          <NavLink to="/login" exact>
            Login
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}

// Navigation.propTypes = {

// }

export default Navigation;
