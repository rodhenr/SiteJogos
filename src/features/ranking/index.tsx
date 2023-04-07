import { useGetPlayerRankingQuery } from "../matches/generalInfoApiSlice";
import { IRanking } from "../matches/generalInfoApiSlice";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography, useTheme } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

import RankingItem from "./components/RankingItem";
import HomeItemContainer from "../../pages/home/components/HomeItemContainer";


function Index() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetPlayerRankingQuery(20);

  const handleNavigateRanking = () => {
    navigate("/ranking");
  };

  return (
    <HomeItemContainer
      icon={BoltIcon}
      isLoading={isLoading}
      size={1}
      titleText={"ranking"}
    >
      {isSuccess ? (
        <>
          <Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              sx={{ overflowY: "auto" }}
            >
              {data.map((rank: IRanking) => (
                <RankingItem
                  key={uuidv4()}
                  level={rank.level}
                  player={rank.name}
                  playerID={rank.id}
                  position={rank.position}
                />
              ))}
            </Box>
          </Box>
          <Box
            alignItems={"center"}
            alignSelf={"center"}
            bgcolor={theme.palette.secondary.main}
            borderRadius={"30px"}
            display={"flex"}
            height={"30px"}
            justifyContent={"center"}
            mt={3}
            sx={{
              transition: "background-color 0.3s",
              "& p": { color: "#fff", fontSize: "13px" },

              "&:hover": {
                bgcolor: theme.palette.secondary.light,
                cursor: "pointer",
              },
            }}
            width={"70%"}
            onClick={handleNavigateRanking}
          >
            <Typography>VER RANKING GERAL</Typography>
          </Box>
        </>
      ) : (
        <Box
          alignItems={"center"}
          display={"flex"}
          flex={1}
          justifyContent={"center"}
        >
          <Typography color={"#FFF"}>
            Ocorreu um erro. Tente novamente.
          </Typography>
        </Box>
      )}
    </HomeItemContainer>
  );
}

export default Index;
