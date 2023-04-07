import { Box, Typography, useTheme } from "@mui/material";

import ModalContainer from "../../../shared/components/ModalContainer";
import LoginRegisterSwitcher from "./LoginRegisterSwitcher";

interface IProps {
  children: JSX.Element | JSX.Element[];
  isLoading: boolean;
  isError: boolean;
  handleClose: () => void;
  openState: boolean;
  handleSwitcher: () => void;
  reqError: string;
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
  reqError,
  switcherText,
  title,
}: IProps) {
  const theme = useTheme();
  return (
    <ModalContainer
      isLoading={isLoading}
      isError={isError}
      closeFunction={handleClose}
      openState={openState}
      title={title}
      isAuth={true}
    >
      <Typography
        color={theme.palette.error.dark}
        fontSize={"20px"}
        fontWeight={"700"}
        m={0}
        sx={{ wordWrap: "break-word" }}
        textAlign={"center"}
        width={"100%"}
      >
        {reqError.toUpperCase()}
      </Typography>
      <Box
        alignItems={"center"}
        display={"flex"}
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
