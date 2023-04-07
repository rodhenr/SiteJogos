import CloseIcon from "@mui/icons-material/Close";
import { Box, useTheme } from "@mui/material";

interface IProps {
  handleClose: () => void;
}

function CloseButton({ handleClose }: IProps) {
  const theme = useTheme()
  return (
    <Box
      alignSelf={"flex-end"}
      boxSizing={"border-box"}
      display={"flex"}
      justifyContent={"flex-end"}
      sx={{ position: "absolute", right: "8px", top: "8px" }}
      width={"auto"}
    >
      <Box
        alignSelf={"flex-end"}
        alignItems={"center"}
        bgcolor={theme.palette.secondary.light}
        borderRadius={"50%"}
        display={"flex"}
        height={"30px"}
        justifyContent={"center"}
        sx={{
          "&:hover": {
            bgcolor: theme.palette.secondary.main,
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
