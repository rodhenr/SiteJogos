import { useEffect, useState } from "react";

import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";
import DrawerMenu from "../components/home/DrawerMenu";

import HistoryModal from "../components/sidebar/HistoryModal";
import MessagesModal from "../components/sidebar/MessagesModal";
import ProfileModal from "../components/sidebar/ProfileModal";
import LoginModal from "../components/sidebar/LoginModal";
import RegisterModal from "../components/sidebar/RegisterModal";

import styles from "./styles/Layout.module.scss";

interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
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
      <HistoryModal />
      <ProfileModal />
      <MessagesModal />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default Layout;
