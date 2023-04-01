import { Box, Modal, Typography } from "@mui/material";

import CloseButton from "../../../../shared/components/CloseButton";
import Loading from "../../../../shared/components/Loading";
import ErrorMessage from "../ErrorMessage";

import styles from "../../styles/SidebarModalContainer.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  closeFunction: React.MouseEventHandler<HTMLDivElement>;
  openState: boolean;
  isError: boolean;
  isLoading: boolean;
  title: string;
}

function ModalContainer({
  children,
  isLoading,
  isError,
  closeFunction,
  openState,
  title,
}: IProps) {
  return (
    <Modal
      open={openState}
      onClose={closeFunction}
      aria-labelledby="modal-matches"
      aria-describedby="modal-matches-history"
    >
      <Box className={styles.container}>
        <CloseButton handleClose={closeFunction} />
        <Typography
          variant="h5"
          component="h1"
          sx={{ color: "white", textAlign: "center" }}
        >
          {title}
        </Typography>
        {children}
        {isLoading && <Loading />}
        {isError && <ErrorMessage />}
      </Box>
    </Modal>
  );
}

export default ModalContainer;
