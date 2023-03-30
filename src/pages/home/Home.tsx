import { useEffect, useState } from "react";

import Help from "./components/Help";
import Highlighted from "./components/Highlighted";
import Ranking from "../../features/ranking/index";
import Recent from "../../features/matches/index";
import styles from "./styles/Home.module.scss";
import MainLayout from "../../shared/MainLayout";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
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
      <Ranking />
      <Help />
    </>
  );

  if (windowWidth > 1024) {
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
      <MainLayout>
        <div className={styles.containerCards}>
          <Highlighted />
          <div className={styles.infos}>{render}</div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Home;
