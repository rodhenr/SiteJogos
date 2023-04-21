import { Box } from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";

function IconScissors() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{
        
        height: { mobile: 80, tablet: 110, laptop: 120, desktopLarge: 130 },
        width: { mobile: 80, tablet: 110, laptop: 120, desktopLarge: 130 },
        "& svg": {
          bgcolor: "#fff",
          border: "6px solid #d73753",
          borderRadius: "50%",
          boxSizing: "border-box",
          cursor: "pointer",
          height: { mobile: 70, tablet: 100, laptop: 110, desktopLarge: 120 },
          p: { mobile: 0.5, laptop: 2.5 },
          width: { mobile: 70, tablet: 100, laptop: 110, desktopLarge: 120 },

          "&:hover": {
            opacity: 0.7,
          },
        },
      }}
    >
      <ContentCutIcon />
    </Box>
  );
}

export default IconScissors;
