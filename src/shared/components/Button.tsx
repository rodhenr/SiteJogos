import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  Icon: any;
  route: string;
  title: string;
}

function Button({ Icon, route, title }: IProps) {
  const [color, setColor] = useState("#6A6A84");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === route) {
      setColor("#ff4c29");
    } else {
      setColor("#6A6A84");
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
      gap={"2px"}
      sx={{
        cursor: "pointer",
        
        "& p, & svg": {
          "&:hover": {
            color: "#ff4c29",
          },
        },
      }}
      onClick={handleClick}
    >
      <Icon sx={{ color }} />
      <Typography
        fontFamily={"'Roboto Condensed', sans-serif"}
        fontSize={"18px"}
        sx={{ color }}
      >
        {title.toUpperCase()}
      </Typography>
    </Box>
  );
}

export default Button;
