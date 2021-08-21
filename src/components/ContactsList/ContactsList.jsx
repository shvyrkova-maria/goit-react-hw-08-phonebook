import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import toast from 'react-hot-toast';
// import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import {
  fetchContacts,
  deleteContact,
  getFiltredContactsList,
  getLoadingStatus,
} from 'redux/contacts';

// import {
//   Contacts,
//   ContactsItem,
//   ContactsDetails,
//   Button,
// } from 'components/ContactsList/ContactsList.styled';

function ContactsList() {
  const isLoading = useSelector(getLoadingStatus);
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOnDeleteBtn = (id, name) => {
    dispatch(deleteContact(id));
    // toast.success(`Contact ${name} deleted`);
  };

  return (
    <ul>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <div>
                <div>
                  {/* <FaUser size={14} /> */}
                  <span>
                    <b>{name}</b>
                  </span>
                </div>
                <div>
                  {/* <FaPhoneAlt size={14} /> */}
                  <span>{number}</span>
                </div>
              </div>
              <button type="button" onClick={() => handleOnDeleteBtn(id, name)}>
                Delete
              </button>
            </li>
          );
        })}
      {isLoading && <div>Loading...</div>}
    </ul>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
// };

export default ContactsList;
