import { Box } from "@mui/material";

import HomeItemContainer from "./HomeItemContainer";

function Highlighted() {
  return (
    <HomeItemContainer titleIcon={"StarIcon"} titleText={"em destaque"}>
      <Box
        display={"flex"}
        flex={1}
        gap={"8px 16px"}
        overflow={"hidden"}
      >
        {/*  {fakeData.highlightedGames.map((game) => {
          return (
            <HighlightedItem
              key={uuidv4()}
              image={game.image}
              name={game.name}
              url={game.url}
            />
          );
        })} */}
      </Box>
    </HomeItemContainer>
  );
}

export default Highlighted;
