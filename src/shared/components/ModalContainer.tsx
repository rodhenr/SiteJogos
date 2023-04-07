import { Box, Modal, Typography, useTheme } from "@mui/material";

import CloseButton from "./CloseButton";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

interface IProps {
  children: JSX.Element | JSX.Element[];
  closeFunction: () => void;
  openState: boolean;
  isError: boolean;
  isLoading: boolean;
  title: string;
  isAuth: boolean;
}

function ModalContainer({
  children,
  isLoading,
  isError,
  closeFunction,
  openState,
  title,
  isAuth,
}: IProps) {
  const theme = useTheme();

  return (
    <Modal
      open={openState}
      onClose={closeFunction}
      aria-labelledby="modal-matches"
      aria-describedby="modal-matches-history"
    >
      <Box
        alignItems={"center"}
        bgcolor={theme.palette.primary.dark}
        boxSizing={"border-box"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        justifyContent={"center"}
        left={"50%"}
        position={"absolute"}
        sx={{
          border: { laptop: "2px solid #000" },
          height: { mobile: "100%", laptop: "auto" },
          maxHeight: { laptop: "700px" },
          overflowY: "auto",
          p: {
            mobile: 1,
            laptop: 2,
          },
          transform: "translate(-50%, -50%)",
          width: { mobile: "100%", tablet: "80vw", laptop: "800px" },

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        top={"50%"}
      >
        <CloseButton handleClose={closeFunction} />
        <Typography component="h1" sx={{ color: "#FFF" }} variant="h5">
          {title}
        </Typography>
        {children}
        {isLoading && <Loading />}
        {!isAuth && isError && <ErrorMessage />}
      </Box>
    </Modal>
  );
}

export default ModalContainer;
