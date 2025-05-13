import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoDiv}>
        <a className={styles.headerLogo} href="/">
          모두노기
        </a>
      </div>
      <div className={styles.navWrapper}>
        <div className={styles.navContainer}>
          <a href="/Daily" className={styles.navP}>
            모할일
          </a>
          <a href="/" className={styles.navP}></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
