import Sidebar from "../components/sidebar/Sidebar";
import styles from "../styles/components/Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContainer}>
        <div className={styles.topMenu}></div>
        <div className={styles.main}>
          <div className={styles.highlight}></div>
          <div className={styles.infos}>
            <div className={styles.double}>
              <div className={styles.recentMatch}></div>
              <div className={styles.help}></div>
            </div>
            <div className={styles.ranking}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
