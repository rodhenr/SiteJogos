import styles from "./styles/Menu.module.scss";
import Button from "./Button";
import SearchBar from "./SearchBar";

function Menu() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.buttonsContainer}>
        <Button title={"HOME"} />
        <Button title={"JOGOS"} />
        <Button title={"RECORDES"} />
        <Button title={"FAQ"} />
      </div>
    </div>
  );
}

export default Menu;
