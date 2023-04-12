import { v4 as uuidv4 } from "uuid";

import { Box, Divider, Typography } from "@mui/material";

import MainLayout from "./MainLayout";

export interface ISize {
  height: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopLarge: string;
  };
  width: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopLarge: string;
  };
  rulesOnSide: {
    mobile: boolean;
    tablet: boolean;
    laptop: boolean;
    desktop: boolean;
    desktopLarge: boolean;
  };
}

interface IProps {
  children: JSX.Element | JSX.Element[];
  gameName: string;
  rulesList: string[];
  sizes: ISize;
}

function GameLayout({ children, gameName, rulesList, sizes }: IProps) {
  return (
    <MainLayout>
      <Box
        bgcolor={"secondary.dark"}
        borderRadius={"10px"}
        boxSizing={"border-box"}
        boxShadow={6}
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        gap={2}
        p={2}
        sx={{
          flexDirection: {
            mobile: sizes.rulesOnSide.mobile ? "row" : "column",
            tablet: sizes.rulesOnSide.tablet ? "row" : "column",
            laptop: sizes.rulesOnSide.laptop ? "row" : "column",
            desktop: sizes.rulesOnSide.desktop ? "row" : "column",
            desktopLarge: sizes.rulesOnSide.desktopLarge ? "row" : "column",
          },
          overflowY: "auto",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          bgcolor={"info.light"}
          display={"flex"}
          overflow={"hidden"}
          sx={{ height: { ...sizes.height }, width: { ...sizes.width } }}
        >
          {children}
        </Box>
        <Box display={"flex"} flex={1} flexDirection={"column"} gap={1}>
          <Typography color={"#FFF"} variant={"h3"}>
            {gameName.toUpperCase()}
          </Typography>
          <Divider sx={{ bgcolor: "info.main", opacity: 0.75 }} />
          <Typography color={"#FFF"} mb={1} variant="h5">
            REGRAS
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            {rulesList.map((rule, index) => {
              return (
                <Box key={uuidv4()}>
                  <Typography color={"#FFF"}>
                    {index + 1} - {rule}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default GameLayout;
