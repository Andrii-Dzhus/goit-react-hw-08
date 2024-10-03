import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to the Contacts Book!</h1>
      <p>Manage your contacts easily.</p>
    </div>
  );
};

export default HomePage;
