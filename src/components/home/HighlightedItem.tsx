import styles from "./styles/HighlightedItem.module.scss";

interface IProps {
  url: string;
  name: string;
}

function HighlightedItem({ url, name }: IProps) {
  return (
    <div className={styles.container}>
      <img src={url} alt={name} className={styles.image} />
    </div>
  );
}

export default HighlightedItem;
