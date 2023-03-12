import { useEffect, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StarsIcon from "@mui/icons-material/Stars";
import HelpIcon from "@mui/icons-material/Help";

import Button from "./Button";
import SearchBar from "./SearchBar";

import styles from "./styles/Menu.module.scss";

function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const titles = [
    { icon: HomeIcon, name: "Inicio", route: "/" },
    { icon: SportsEsportsIcon, name: "Jogos", route: "/jogos" },
    { icon: StarsIcon, name: "Ranking", route: "/ranking" },
    { icon: StarsIcon, name: "Recordes", route: "/recordes" },
    { icon: HelpIcon, name: "Faq", route: "/faq" },
  ];

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
      <div className={styles.buttonsContainer}>
        {titles.map((title) => {
          return (
            <Button Icon={title.icon} route={title.route} title={title.name} />
          );
        })}
      </div>
      <SearchBar />
    </>
  );

  if (windowWidth > 1024) {
    render = (
      <>
        <SearchBar />
        <div className={styles.buttonsContainer}>
          {titles.map((title) => {
            return (
              <Button
                Icon={title.icon}
                route={title.route}
                title={title.name}
              />
            );
          })}
        </div>
      </>
    );
  }

  return <div className={styles.container}>{render}</div>;
}

export default Menu;
