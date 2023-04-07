import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";

import MainLayout from "../../shared/layout/MainLayout";
import GamesPageItem from "../../features/game/components/GamesPageItem";

function Games() {
  const games = [
    {
      name: "Jogo da Velha",
      image:
        "https://store-images.s-microsoft.com/image/apps.2005.14057826194083709.67242c47-4fd7-4f1a-9dd6-5d93f6cc10df.f80f14c0-72ab-46ff-86cd-9d801c8e04e8?mode=scale&q=90&h=300&w=300",
      url: "tictactoe",
    },
    {
      name: "Yahtzee",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhYrNAU5wvi0KXwAYt-nRm0QdLOh6aESSV17zMbgynoM0GLcnH-gP-p-iEpDl1i3D64s&usqp=CAU",
      url: "yahtzee",
    },
    {
      name: "JoKenPo",
      image:
        "https://omoldbreaker.files.wordpress.com/2016/05/camiseteria_jokenpo.png?w=499&h=271",
      url: "jokenpo",
    },
    {
      name: "Uno",
      image:
        "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Funo%2Fhome%2FGameName_Store_Landscape_2560x1440-2560x1440-5195e8a3e06d672f97a1ee49ecea59027c14cae4.jpg",
      url: "uno",
    },
  ];

  return (
    <Box flex={1}>
      <MainLayout>
        <Box
          display={"grid"}
          flex={1}
          justify-content={"center"}
          sx={{
            gap: { mobile: 2, laptop: 4 },
            gridTemplateColumns: {
              mobile: "repeat(2, 1fr)",
              laptop: "repeat(3, 1fr)",
            },
            gridTemplateRows: {
              mobile: "repeat(4, 160px)",
              laptop: "repeat(2, 160px)",
            },
          }}
        >
          {games.map((game) => {
            return (
              <GamesPageItem
                image={game.image}
                key={uuidv4()}
                name={game.name}
                url={game.url}
              />
            );
          })}
        </Box>
      </MainLayout>
    </Box>
  );
}

export default Games;
