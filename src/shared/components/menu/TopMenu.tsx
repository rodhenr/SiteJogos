import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import LoginModal from "../../../features/auth/components/LoginModal";
import RegisterModal from "../../../features/auth/components/RegisterModal";
import MenuUserInfo from "../userInfo/MenuUserInfo";
import { NavLink } from "react-router-dom";

function TopMenu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const titles = [
    { name: "Inicio", route: "/" },
    { name: "Jogos", route: "/jogos" },
    { name: "Ranking", route: "/ranking" },
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

  return (
    <Box
      display={"flex"}
      sx={{
        alignItems: { laptop: "center" },
        flexDirection: { mobile: "column", laptop: "row" },
        gap: { mobile: 2, laptop: 1 },
        justifyContent: { mobile: "space-between", laptop: "flex-end" },
      }}
    >
      {windowWidth < 1024 && (
        <Box
          display={"flex"}
          flex={1}
          sx={{
            justifyContent: { mobile: "space-between", laptop: "flex-end" },
          }}
        >
          <MenuUserInfo />
        </Box>
      )}
      <Box
        display={"flex"}
        flex={1}
        sx={{
          gap: { mobile: 1.5, desktopLarge: 3 },
          justifyContent: { mobile: "space-between", laptop: "flex-start" },
        }}
      >
        {titles.map((title) => {
          return (
            <NavLink
              to={title.route}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#4C74AA" : "#FFF",
                  fontSize: "22px",
                  textDecoration: "none",
                };
              }}
            >
              {title.name.toUpperCase()}
            </NavLink>
          );
        })}
      </Box>
      {windowWidth > 1024 && (
        <Box
          display={"flex"}
          flex={1}
          sx={{
            justifyContent: { mobile: "space-between", laptop: "flex-end" },
          }}
        >
          <MenuUserInfo />
        </Box>
      )}
      <LoginModal />
      <RegisterModal />
    </Box>
  );
}

export default TopMenu;
