import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import Help from "./components/Help";
import Highlighted from "./components/Highlighted";
import Ranking from "../../features/ranking/index";
import Recent from "../../features/matches/index";
import MainLayout from "../../shared/MainLayout";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  let render = (
    <>
      <Recent />
      <Ranking />
      <Help />
    </>
  );

  if (windowWidth > 1024) {
    render = (
      <>
        <Box
          display={"flex"}
          flex={1}
          sx={{
            flex: 2,
            flexDirection: "column",
            gap: { mobile: "8px", laptop: "16px" },
          }}
        >
          <Recent />
          <Help />
        </Box>
        <Ranking />
      </>
    );
  }

  return (
    <Box flex={1}>
      <MainLayout>
        <Box
          display={"flex"}
          flex={1}
          flexDirection={"column"}
          sx={{ gap: { mobile: "8px", laptop: "16px" } }}
        >
          <Highlighted />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              flex: { laptop: 1 },
              flexDirection: { mobile: "column", laptop: "row" },
              gap: { mobile: "8px", laptop: "16px" },
            }}
          >
            {render}
          </Box>
        </Box>
      </MainLayout>
    </Box>
  );
}

export default Home;
