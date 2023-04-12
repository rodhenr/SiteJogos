import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import MainLayout from "./MainLayout";

export interface ISize {
  height: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopLarger: string;
  };
  width: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopLarger: string;
  };
  rulesOnSide: {
    mobile: boolean;
    tablet: boolean;
    laptop: boolean;
    desktop: boolean;
    desktopLarger: boolean;
  };
}

interface IProps {
  children: JSX.Element | JSX.Element[];
  rulesList: string[];
  sizes: ISize;
}

function GameLayout({ children, rulesList, sizes }: IProps) {
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
        <Box display={"flex"} flex={1} flexDirection={"column"}>
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
