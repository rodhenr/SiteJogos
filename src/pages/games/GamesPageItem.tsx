import { useNavigate } from "react-router-dom";

import { Box, Typography, useTheme } from "@mui/material";

interface IProps {
  image: string;
  name: string;
  url: string;
}

function GamesPageItem({ image, name, url }: IProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGameNavigate = () => {
    navigate(`/jogos/${url}`);
  };

  return (
    <Box
      bgcolor={theme.palette.secondary.dark}
      boxShadow={10}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        transition: "transform 0.4s, background-color 0.4s",

        "&:hover": {
          bgcolor: theme.palette.secondary.light,
          cursor: "pointer",
          transform: "scale(1.03)",
        },
      }}
      onClick={handleGameNavigate}
    >
      <Box
        boxSizing={"border-box"}
        flexGrow={2}
        height={"100px"}
        sx={{
          "& img": {
            boxSizing: "border-box",
            height: "100%",
            opacity: 0.9,
            objectFit: "cover",
            width: "100%",
          },
        }}
      >
        <img alt={name} src={image} />
      </Box>
      <Typography
        alignSelf={"center"}
        boxSizing={"border-box"}
        color={"#FFF"}
        fontSize={"18px"}
        justifySelf={"center"}
        p={1}
      >
        {name}
      </Typography>
    </Box>
  );
}

export default GamesPageItem;
