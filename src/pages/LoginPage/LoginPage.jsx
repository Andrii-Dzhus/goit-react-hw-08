import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = ({ onLogin }) => {
  return (
    <div className={styles.page}>
      <h1>Login</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
