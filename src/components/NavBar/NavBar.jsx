// import PropTypes from 'prop-types';
// import Container from 'components/Container/Container';
import MainNav from 'components/MainNav/MainNav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

function NavBar() {
  return (
    <header>
      <nav>
        <MainNav />
        <AuthNav />
        <UserMenu />
      </nav>
    </header>
  );
}

// NavBar.propTypes = {};

export default NavBar;
