import { Box } from "@mui/material";

import ModalContainer from "../../sidebar/components/containers/SidebarModalContainer";
import LoginRegisterSwitcher from "./LoginRegisterSwitcher";

interface IProps {
  children: JSX.Element | JSX.Element[];
  isLoading: boolean;
  isError: boolean;
  handleClose: () => void;
  openState: boolean;
  handleSwitcher: () => void;
  switcherText: string;
  title: string;
}

function AuthModalContainer({
  children,
  handleClose,
  handleSwitcher,
  isError,
  isLoading,
  openState,
  switcherText,
  title,
}: IProps) {
  return (
    <ModalContainer
      isLoading={isLoading}
      isError={isError}
      closeFunction={handleClose}
      openState={openState}
      title={title}
    >
      <Box
        alignItems={"center"}
        display={"flex"}
        flex={1}
        flexDirection={"column"}
        gap={1.5}
        justifyContent={"center"}
        width={"100%"}
      >
        {children}
        <LoginRegisterSwitcher
          handleClick={handleSwitcher}
          text={switcherText}
        />
      </Box>
    </ModalContainer>
  );
}

export default AuthModalContainer;
