import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getUserIsLoggedIn } from 'redux/auth';
import { NavLinkStyled } from 'components/MainNav/MainNav.styled';

function MainNav() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <div>
      <NavLinkStyled to="/" exact>
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/contacts" exact>
          Contacts
        </NavLinkStyled>
      )}
    </div>
  );
}

// MainNav.propTypes = {
// }

export default MainNav;
