import styles from "../../styles/components/SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className={styles.container}>
      <SearchIcon sx={{ color: "#6A6A84" }} />
      <p className={styles.title}>PROCURAR JOGOS</p>
    </div>
  );
}

export default SearchBar;
