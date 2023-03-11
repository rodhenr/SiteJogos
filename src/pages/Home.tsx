import { useEffect, useState } from "react";

import Help from "../components/home/Help";
import Highlighted from "../components/home/Highlighted";
import Ranking from "../components/home/Ranking";
import Recent from "../components/home/Recent";
import styles from "./styles/Home.module.scss";
import Layout from "../layouts/Layout";

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
      <div className={styles.double}>
        <Ranking />
        <Help />
      </div>
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
      <Layout>
        <Highlighted />
        <div className={styles.infos}>{render}</div>
      </Layout>
    </div>
  );
}

export default Home;
