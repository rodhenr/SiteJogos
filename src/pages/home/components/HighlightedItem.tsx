import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

interface IProps {
  image: string;
  name: string;
  url: string;
}

function HighlightedItem({ image, name, url }: IProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/jogos/${url}`);
  };

  return (
    <Box
      borderRadius={"10px"}
      display={"flex"}
      onClick={handleNavigate}
      overflow={"hidden"}
      position={"relative"}
      sx={{
        cursor: "pointer",
        flex: { laptop: 1 },
        opacity: "0.8",
        "&:img": {
          height: "auto",
          maxWidth: { laptop: "100%" },
          objectFit: "cover",
          opacity: "0.65",
          transition: "transform 0.5s",
          width: "100%",

          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      }}
    >
      <img src={image} alt={name} />
    </Box>
  );
}

export default HighlightedItem;
