import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

interface IProps {
  handleClose: () => void;
}

function CloseButton({ handleClose }: IProps) {
  return (
    <Box
      alignSelf={"flex-end"}
      boxSizing={"border-box"}
      display={"flex"}
      justifyContent={"flex-end"}
      sx={{ position: "absolute", right: "8px", top: "8px", zIndex: 100 }}
      width={"auto"}
    >
      <Box
        alignSelf={"flex-end"}
        alignItems={"center"}
        bgcolor={"tertiary.main"}
        borderRadius={"50%"}
        display={"flex"}
        height={"30px"}
        justifyContent={"center"}
        sx={{
          "&:hover": {
            bgcolor: "tertiary.light",
            cursor: "pointer",
          },
        }}
        width={"30px"}
        onClick={handleClose}
      >
        <CloseIcon />
      </Box>
    </Box>
  );
}

export default CloseButton;
