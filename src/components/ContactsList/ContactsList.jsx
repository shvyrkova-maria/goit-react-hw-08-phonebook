import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import {
  fetchContacts,
  deleteContact,
  getFiltredContactsList,
  getLoadingStatus,
} from 'redux/contacts';

import {
  Ul,
  Li,
  Div,
  Button,
} from 'components/ContactsList/ContactsList.styled';

function ContactsList() {
  const isLoading = useSelector(getLoadingStatus);
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOnDeleteBtn = (id, name) => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} deleted`);
  };

  return (
    <Ul>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <Li key={id}>
              <div>
                <Div>
                  <FaUser size={16} />
                  <span>
                    <b>{name}</b>
                  </span>
                </Div>
                <Div>
                  <FaPhoneAlt size={16} />
                  <span>{number}</span>
                </Div>
              </div>
              <Button type="button" onClick={() => handleOnDeleteBtn(id, name)}>
                Delete
              </Button>
            </Li>
          );
        })}
      {isLoading && <div>Loading...</div>}
    </Ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactsList;
