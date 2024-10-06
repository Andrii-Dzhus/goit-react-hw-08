import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, selectLoading } from "../../redux/contacts/selectors";
import { addContact, deleteContact, fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = (contact) => {
    dispatch(addContact(contact));
  };

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const contactItems = useSelector(getContacts);

  return (
    <div className={styles.page}>
      <h1>Contacts</h1>
      <ContactForm onSubmit={handleSubmit} />
      <ContactList contacts={contactItems} onDelete={onDeleteContact} />
    </div>
  );
};

export default ContactsPage;
