import { useEffect, useState } from "react";

import Menu from "./menu/Menu";
import Sidebar from "../features/sidebar/index";
import DrawerMenu from "../features/sidebar/components/DrawerMenu";

import styles from "./styles/Layout.module.scss";

interface IProps {
  children: React.ReactNode;
}
function MainLayout({ children }: IProps) {
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

  return (
    <div className={styles.container}>
      {windowWidth < 1024 ? (
        <div className={styles.mobileOptions}>
          <DrawerMenu />
        </div>
      ) : (
        <Sidebar />
      )}
      <div className={styles.mainContainer}>
        <Menu />
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
