import Header from "../components/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </div>
  );
};

export default Home;
