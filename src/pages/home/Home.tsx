import { useEffect, useState } from "react";

import { Box } from "@mui/material";

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
      <Highlighted />
      <Recent />
      <Ranking />
    </>
  );

  if (windowWidth > 1024) {
    render = (
      <>
        <Box
          display={"flex"}
          flexDirection={"column"}
          flex={2}
          sx={{
            gap: { mobile: "8px", laptop: "16px" },
          }}
        >
          <Highlighted />
          <Recent />
        </Box>
        <Ranking />
      </>
    );
  }

  return (
    <MainLayout>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{
          flex: { laptop: 1 },
          flexDirection: { mobile: "column", laptop: "row" },
          gap: { mobile: 2, laptop: 3 },
        }}
      >
        {render}
      </Box>
    </MainLayout>
  );
}

export default Home;
