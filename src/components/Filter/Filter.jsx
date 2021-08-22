import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { RiUserAddFill } from 'react-icons/ri';
import { nanoid } from 'nanoid';
import { getFilterValue } from 'redux/contacts';
import { setFilterValue } from 'redux/contacts/contactsSlices';
import Modal from 'components/Modal/Modal';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import {
  DebounceInputStyled,
  SearchWrap,
  Button,
} from 'components/Filter/Filter.styled';

function Filter() {
  const [toggle, setToggle] = useState(false);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleToggleOnClick = () => setToggle(!toggle);

  return (
    <>
      <SearchWrap>
        <Button onClick={handleToggleOnClick}>
          <RiUserAddFill />
        </Button>
        <DebounceInputStyled
          id={`id-${nanoid(3)}`}
          type="text"
          name="name"
          value={filter}
          debounceTimeout={700}
          autoFocus
          autoComplete="off"
          onChange={event => dispatch(setFilterValue(event.target.value))}
          placeholder="Search"
        />
      </SearchWrap>
      {toggle && (
        <Modal closeModal={handleToggleOnClick}>
          <ContactsForm />
        </Modal>
      )}
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
