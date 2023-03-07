import { useEffect, useState } from "react";
import Help from "../components/home/Help";
import Highlighted from "../components/home/Highlighted";
import Ranking from "../components/home/Ranking";
import Recent from "../components/home/Recent";
import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";
import Drawer from "../components/home/Drawer";

import styles from "./styles/Home.module.scss";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(windowWidth);
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  let render = (
    <>
      <Recent />
      <div className={styles.double}>
        <Ranking />
        <Help />
      </div>
    </>
  );

  if (windowWidth > 600) {
    render = (
      <>
        <div className={styles.double}>
          <Recent />
          <Help />
        </div>
        <Ranking />
      </>
    );
  }

  return (
    <div className={styles.container}>
      {windowWidth < 600 && (
        <div className={styles.mobileOptions}>
          <Drawer />
        </div>
      )}
      <Sidebar />
      <div className={styles.mainContainer}>
        <Menu />
        <div className={styles.main}>
          <Highlighted />
          <div className={styles.infos}>{render}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
