// import PropTypes from 'prop-types';
// import Container from 'components/Container/Container';
import { useSelector } from 'react-redux';
import MainNav from 'components/MainNav/MainNav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getUserIsLoggedIn } from 'redux/auth';

function NavBar() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <header>
      <nav>
        <MainNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
}

// NavBar.propTypes = {};

export default NavBar;
