import styles from '../styles/loader.module.css'; // Импортируйте стили

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>Загрузка...</p>
    </div>
  );
};

export default Loader;