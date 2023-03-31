import SearchIcon from "@mui/icons-material/Search";

import styles from "../styles/SearchBar.module.scss";

function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchIcon sx={{ color: "#6A6A84", fontSize: "20px" }} />
      </div>
      <input placeholder="PROCURAR JOGOS" className={styles.input} />
    </div>
  );
}

export default SearchBar;
