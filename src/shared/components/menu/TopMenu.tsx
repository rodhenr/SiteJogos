import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Box } from "@mui/material";

import LoginModal from "../../../features/auth/components/LoginModal";
import RegisterModal from "../../../features/auth/components/RegisterModal";
import MenuUserInfo from "../userInfo/MenuUserInfo";
import MenuButton from "./MenuButton";

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
            <MenuButton key={uuidv4()} route={title.route} title={title.name} />
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
