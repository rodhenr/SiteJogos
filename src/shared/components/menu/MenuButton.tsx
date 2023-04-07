import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

interface IProps {
  route: string;
  title: string;
}

function MenuButton({ route, title }: IProps) {
  const [color, setColor] = useState("#FFF");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === route) {
      setColor("info.light");
    } else {
      setColor("#FFF");
    }
  }, [pathname, route]);

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
            color: "info.main",
          },
        },
      }}
      onClick={handleClick}
    >
      <Typography
        sx={{ color, fontSize: { mobile: "18px", laptop: "25px" } }}
      >
        {title.toUpperCase()}
      </Typography>
    </Box>
  );
}

export default MenuButton;
