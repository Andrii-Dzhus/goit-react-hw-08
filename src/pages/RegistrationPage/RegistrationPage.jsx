import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = ({ onRegister }) => {
  return (
    <div className={styles.page}>
      <h1>Register</h1>
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationPage;
