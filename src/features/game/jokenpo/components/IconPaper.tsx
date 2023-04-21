import { Box } from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";

function IconPaper() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{
        height: { mobile: 80, tablet: 110, laptop: 120, desktopLarge: 130 },
        width: { mobile: 80, tablet: 110, laptop: 120, desktopLarge: 130 },
        "& svg": {
          bgcolor: "#fff",
          border: "6px solid #efa214",
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
      <ArticleIcon />
    </Box>
  );
}

export default IconPaper;
