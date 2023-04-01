import CloseIcon from "@mui/icons-material/Close";

import styles from "../styles/CloseButton.module.scss";

interface IProps {
  handleClose: React.MouseEventHandler<HTMLDivElement>;
}

function CloseButton({ handleClose }: IProps) {
  return (
    <div className={styles.closeButtonContainer}>
      <div className={styles.closeButton} onClick={handleClose}>
        <CloseIcon />
      </div>
    </div>
  );
}

export default CloseButton;
