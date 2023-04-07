import { Box, Typography } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import CloseButton from "../../../shared/components/CloseButton";

interface IProps {
  handleClose: () => void;
}
function UserRegistered({ handleClose }: IProps) {
  return (
    <Box
      alignItems={"center"}
      bgcolor={"primary.dark"}
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      justifyContent={"center"}
      left={"50%"}
      position={"absolute"}
      sx={{
        border: { laptop: "2px solid #000" },
        height: { mobile: "100%", laptop: "auto" },
        maxHeight: { laptop: "700px" },
        overflowY: "auto",
        transform: "translate(-50%, -50%)",
        width: { mobile: "100%", tablet: "80vw", laptop: "800px" },
      }}
      top={"50%"}
    >
      <CloseButton handleClose={handleClose} />
      <Box
        alignItems={"center"}
        bgcolor={"success.main"}
        boxSizing={"border-box"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        position={"relative"}
        sx={{ height: { mobile: "230px" } }}
        width={"100%"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{
            "& svg": {
              color: "#FFF",
              fontSize: "100px",
            },
          }}
          width={"100%"}
        >
          <CheckCircleOutlineRoundedIcon />
        </Box>
      </Box>
      <Box display={"flex"} flex={1} justifyContent={"center"} width={"100%"}>
        <Typography
          color={"success.main"}
          sx={{ fontSize: { mobile: "32px" }, wordWrap: "break-word" }}
          textAlign={"center"}
        >
          Você se registrou com sucesso!
        </Typography>
      </Box>
    </Box>
  );
}

export default UserRegistered;
