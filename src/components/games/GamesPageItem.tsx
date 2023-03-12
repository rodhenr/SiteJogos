import styles from "./styles/GamesPageItem.module.scss";

interface IProps {
  image: string;
  name: string;
}

function GamesPageItem({ name, image }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img alt={name} src={image} />
      </div>
      <p className={styles.gameName}>{name}</p>
    </div>
  );
}

export default GamesPageItem;
