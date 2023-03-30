import { useNavigate } from "react-router-dom";
import styles from "../styles/HighlightedItem.module.scss";

interface IProps {
  image: string;
  name: string;
  url: string;
}

function HighlightedItem({ image, name, url }: IProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/jogos/${url}`);
  };

  return (
    <div className={styles.container} onClick={handleNavigate}>
      <img src={image} alt={name} className={styles.image} />
    </div>
  );
}

export default HighlightedItem;
