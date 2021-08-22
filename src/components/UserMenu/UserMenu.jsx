import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth';
import { logOut } from 'redux/auth';
import { MenuWrap, Button } from 'components/UserMenu/UserMenu.styled';

function UserMenu() {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogOutOnClick = () => {
    dispatch(logOut());
  };

  return (
    <MenuWrap>
      <p> {`Welcome, ${user}`}</p>
      <Button type="button" onClick={handleLogOutOnClick}>
        Log Out
      </Button>
    </MenuWrap>
  );
}

export default UserMenu;
