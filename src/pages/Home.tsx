import Help from "../components/home/help/Help";
import Highlighted from "../components/home/highlighted/Highlighted";
import Ranking from "../components/home/ranking/Ranking";
import Recent from "../components/home/recent/Recent";
import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "../styles/components/Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContainer}>
        <Menu />
        <div className={styles.main}>
          <Highlighted />
          <div className={styles.infos}>
            <div className={styles.double}>
              <Recent />
              <Help />
            </div>
            <Ranking />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
