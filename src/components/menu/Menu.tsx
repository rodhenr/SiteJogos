import styles from "./styles/Menu.module.scss";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function Menu() {
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
      <div className={styles.buttonsContainer}>
        <Button title={"HOME"} />
        <Button title={"JOGOS"} />
        <Button title={"RECORDES"} />
        <Button title={"FAQ"} />
      </div>
      <SearchBar />
    </>
  );

  if (windowWidth > 1024) {
    render = (
      <>
        <SearchBar />
        <div className={styles.buttonsContainer}>
          <Button title={"HOME"} />
          <Button title={"JOGOS"} />
          <Button title={"RECORDES"} />
          <Button title={"FAQ"} />
        </div>
      </>
    );
  }

  return <div className={styles.container}>{render}</div>;
}

export default Menu;
