import { useGetPlayerBasicInfoQuery } from "../userInfoApiSlice";

import Avatar from "@mui/material/Avatar";

import ExpInfo from "./ExpInfo";

import styles from "../styles/UserInfo.module.scss";

function UserInfo() {
  const { data, isSuccess, isLoading, isError } = useGetPlayerBasicInfoQuery();

  return (
    <div className={styles.container}>
      {isLoading && <div></div>}
      {isError && <div>Erro...</div>}
      {isSuccess && (
        <>
          <p className={styles.username}>{data.name.toUpperCase()}</p>
          <Avatar
            alt="User Avatar"
            src={data.avatar}
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
            exp={data.experience}
            isModal={false}
            level={data.level}
            maxExpLevel={data.maxExperience}
          />
        </>
      )}
    </div>
  );
}

export default UserInfo;
