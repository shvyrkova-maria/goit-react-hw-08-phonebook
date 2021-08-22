import { NavWrap, NavLinkStyled } from 'common.styled';

function AuthNav() {
  return (
    <NavWrap>
      <NavLinkStyled activeStyle={{ color: '#ec8e11' }} to="/register" exact>
        Sign Up
      </NavLinkStyled>
      <NavLinkStyled activeStyle={{ color: '#ec8e11' }} to="/login" exact>
        Login
      </NavLinkStyled>
    </NavWrap>
  );
}

export default AuthNav;
