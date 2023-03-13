import ExpInfo from "./ExpInfo";

import Avatar from "@mui/material/Avatar";

import { fakeData } from "../../data/fakeData";

import styles from "./styles/UserInfo.module.scss";

function UserInfo() {
  return (
    <div className={styles.container}>
      <p className={styles.username}>{fakeData.user.username.toUpperCase()}</p>
      <Avatar
        alt="User Avatar"
        src={fakeData.user.avatar}
        sx={{
          alignSelf: "center",
          border: "2px solid green",
          borderRadius: "50%",
          boxSizing: "border-box",
          height: "80px",
          margin: "8px 0",
          width: "80px",
        }}
      />
      <ExpInfo
        exp={fakeData.user.expLevel}
        isModal={false}
        level={fakeData.user.level}
        maxExpLevel={fakeData.user.maxExpLevel}
      />
    </div>
  );
}

export default UserInfo;
