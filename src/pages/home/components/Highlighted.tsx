import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import HomeItemContainer from "./HomeItemContainer";
import HighlightedItem from "./HighlightedItem";

function Highlighted() {
  return (
    <HomeItemContainer
      icon={StarIcon}
      isLoading={false}
      size={1}
      titleText={"em destaque"}
    >
      <Box display={"flex"} flex={1} gap={1} overflow={"hidden"}>
        <HighlightedItem
          image={
            "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Funo%2Fhome%2FGameName_Store_Landscape_2560x1440-2560x1440-5195e8a3e06d672f97a1ee49ecea59027c14cae4.jpg"
          }
          name={"Uno"}
          url={"Uno"}
        />
      </Box>
    </HomeItemContainer>
  );
}

export default Highlighted;
