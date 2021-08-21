// import PropTypes from 'prop-types'
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsForm from 'components/ContactsForm/ContactsForm';

function ContactsPage(props) {
  return (
    <>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </>
  );
}

// ContactsPage.propTypes = {

// }

export default ContactsPage;
