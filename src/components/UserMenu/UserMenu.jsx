import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types'
import { getUserName } from 'redux/auth';
import { logOut } from 'redux/auth';

function UserMenu() {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogOutOnClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <div>{user}</div>
      <button type="button" onClick={handleLogOutOnClick}>
        Log Out
      </button>
    </div>
  );
}

// UserMenu.propTypes = {
// }

export default UserMenu;
