import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

function ContactsPage(props) {
  return (
    <>
      <Filter />
      <ContactsList />
    </>
  );
}

export default ContactsPage;
