import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactsPage.module.css";

const ContactsPage = ({ contacts, onAddContact, onDeleteContact }) => {
  return (
    <div className={styles.page}>
      <h1>Contacts</h1>
      <ContactForm onSubmit={onAddContact} />
      <ContactList contacts={contacts} onDelete={onDeleteContact} />
    </div>
  );
};

export default ContactsPage;
