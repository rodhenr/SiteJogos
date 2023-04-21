import { Box } from "@mui/material";

import AdjustIcon from "@mui/icons-material/Adjust";

function IconRock() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{
        height: { mobile: 80, tablet: 110, laptop: 120, desktopLarge: 130 },
        width: { mobile: 80, tablet: 110, laptop: 120, desktopLarge: 130 },
        "& svg": {
          bgcolor: "#fff",
          border: "6px solid #5168f2",
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
      <AdjustIcon />
    </Box>
  );
}

export default IconRock;
