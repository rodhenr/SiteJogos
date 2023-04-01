import { List } from "@mui/material";

import Auth from "../../auth";
import LoginModal from "../../auth/components/LoginModal";
import RegisterModal from "../../auth/components/RegisterModal";

function AuthSidebar() {
  return (
    <List>
      <Auth />
      <LoginModal />
      <RegisterModal />
    </List>
  );
}

export default AuthSidebar;
