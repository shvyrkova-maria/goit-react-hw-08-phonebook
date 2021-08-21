import { useSelector } from 'react-redux';
import { getUserIsLoggedIn } from 'redux/auth';
// import Container from 'components/Container/Container';
import MainNav from 'components/MainNav/MainNav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { Nav } from 'components/NavBar/NavBar.styled';

function NavBar() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <header>
      {/* <Container> */}
      <Nav>
        <MainNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Nav>
      {/* </Container> */}
    </header>
  );
}

export default NavBar;
