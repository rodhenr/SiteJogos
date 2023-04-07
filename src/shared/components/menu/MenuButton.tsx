import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Box, Typography, useTheme } from "@mui/material";

interface IProps {
  route: string;
  title: string;
}

function MenuButton({ route, title }: IProps) {
  const theme = useTheme();
  const [color, setColor] = useState("#FFF");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === route) {
      setColor(theme.palette.info.light);
    } else {
      setColor("#FFF");
    }
  }, [pathname, route, theme.palette.info.light]);

  const handleClick = () => {
    navigate(route);
  };

  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={0.25}
      sx={{
        cursor: "pointer",

        "& p, & svg": {
          "&:hover": {
            color: theme.palette.info.main,
          },
        },
      }}
      onClick={handleClick}
    >
      <Typography
        fontFamily={"'Roboto Condensed', sans-serif"}
        sx={{ color, fontSize: { mobile: "18px", laptop: "25px" } }}
      >
        {title.toUpperCase()}
      </Typography>
    </Box>
  );
}

export default MenuButton;
