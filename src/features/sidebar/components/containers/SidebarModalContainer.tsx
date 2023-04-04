import { Box, Modal, Typography } from "@mui/material";

import CloseButton from "../../../../shared/components/CloseButton";
import Loading from "../../../../shared/components/Loading";
import ErrorMessage from "../ErrorMessage";

interface IProps {
  children: JSX.Element | JSX.Element[];
  closeFunction: React.MouseEventHandler<HTMLDivElement>;
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
  return (
    <Modal
      open={openState}
      onClose={closeFunction}
      aria-labelledby="modal-matches"
      aria-describedby="modal-matches-history"
    >
      <Box
        bgcolor={"#1b1e23"}
        boxSizing={"border-box"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        left={"50%"}
        position={"absolute"}
        sx={{
          border: "2px solid #000",
          height: { mobile: "100%", tablet: "auto" },
          maxHeight: { tablet: "700px" },
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
        {title.length > 0 && (
          <Typography
            variant="h5"
            component="h1"
            sx={{ color: "white", textAlign: "center" }}
          >
            {title}
          </Typography>
        )}
        {children}
        {isLoading && <Loading />}
        {!isAuth && isError && <ErrorMessage />}
      </Box>
    </Modal>
  );
}

export default ModalContainer;
