import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import SidebarUserOptions from "./SidebarUserOptions";
import UserInfo from "./UserInfo";
import Login from "./Auth";

import Divider from "@mui/material/Divider";

import styles from "./styles/Sidebar.module.scss";



function Sidebar() {
  const token = useSelector((state: RootState) => state.token.token);

  let render = (
    <div className={styles.container}>
      <Login />
    </div>
  );

  if (token) {
    render = (
      <div className={styles.container}>
        <UserInfo />
        <Divider sx={{ backgroundColor: "#454550" }} />
        <SidebarUserOptions />
      </div>
    );
  }

  return render;
}

export default Sidebar;
