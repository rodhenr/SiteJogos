import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StarsIcon from "@mui/icons-material/Stars";

import Button from "./Button";
import SearchBar from "./SearchBar";
import MenuUserInfo from "./MenuUserInfo";
import { useNavigate } from "react-router-dom";

function TopMenu() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const titles = [
    { icon: HomeIcon, name: "Inicio", route: "/" },
    { icon: SportsEsportsIcon, name: "Jogos", route: "/jogos" },
    { icon: StarsIcon, name: "Ranking", route: "/ranking" },
    { icon: StarsIcon, name: "Recordes", route: "/recordes" },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleClick = (route: string) => {
    navigate(route);
  };

  let render = (
    <>
      <Box display={"flex"} justifyContent={"space-between"} gap={1.5}>
        {titles.map((title) => {
          return (
            <Button
              Icon={title.icon}
              key={uuidv4()}
              route={title.route}
              title={title.name}
            />
          );
        })}
      </Box>
      <SearchBar />
    </>
  );

  if (windowWidth > 1024) {
    render = (
      <>
        <Box
          display={"flex"}
          flex={1}
          justifyContent={"flex-start"}
          sx={{
            gap: { mobile: 1.5, desktopLarge: 3 },

            "& p": {
              color: "#FFF",
              fontSize: "20px",

              "&:hover": {
                cursor: "pointer",
              },
            },
          }}
        >
          {titles.map((title) => {
            return (
              <Typography onClick={() => handleClick(title.route)}>
                {title.name}
              </Typography>
            );
          })}
        </Box>
        <Box display={"flex"} flex={1}>
          <SearchBar />
          <MenuUserInfo />
        </Box>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{
        alignItems: { laptop: "center" },
        flexDirection: { mobile: "column", laptop: "row" },
        gap: { mobile: 2, laptop: 1 },
      }}
    >
      {render}
    </Box>
  );
}

export default TopMenu;
