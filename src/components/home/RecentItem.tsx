import { formatDateWithTime } from "../../utils/formatDate";

import styles from "./styles/RecentItem.module.scss";

interface IProps {
  time: Date;
  game: string;
  user: string;
  win: boolean;
}

function RecentItem({ time, game, user, win }: IProps) {
  return (
    <div className={styles.container}>
      <p>{formatDateWithTime(new Date(time))}</p>
      <p>{game}</p>
      <p>{user.substring(0, 40)}</p>
      <p style={win ? { color: "#11C318" } : { color: "#FE3434" }}>
        {win ? "VITÓRIA" : "DERROTA"}
      </p>
    </div>
  );
}

export default RecentItem;
