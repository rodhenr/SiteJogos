import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";

import styles from "../../styles/Message.module.scss";

interface IProps {
  avatar: string;
  name: string;
  notRead: number;
}

function Message({ avatar, name, notRead }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <Avatar
          src={avatar}
          alt="user avatar"
          sx={{
            borderRadius: "50%",
            boxsizing: "border-box",
            height: "35px",
            width: "35px",
          }}
        />
        <p>{name.substring(0, 18)}</p>
      </div>

      {notRead > 0 && (
        <div className={styles.notRead}>
          <Badge badgeContent={notRead} color="primary">
            <MailIcon color="action"  />
          </Badge>
        </div>
      )}
    </div>
  );
}

export default Message;
