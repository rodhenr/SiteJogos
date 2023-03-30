import { useNavigate } from "react-router-dom";
import styles from "../styles/GamesPageItem.module.scss";

interface IProps {
  image: string;
  name: string;
  url: string;
}

function GamesPageItem({ image, name, url }: IProps) {
  const navigate = useNavigate();

  const handleGameNavigate = () => {
    navigate(`/jogos/${url}`);
  };

  return (
    <div className={styles.container} onClick={handleGameNavigate}>
      <div className={styles.imageContainer}>
        <img alt={name} src={image} />
      </div>
      <p className={styles.gameName}>{name}</p>
    </div>
  );
}

export default GamesPageItem;
