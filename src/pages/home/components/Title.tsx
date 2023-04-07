import { Box, Typography } from "@mui/material";

interface IProps {
  Icon: any;
  title: string;
}

function Title({ Icon, title }: IProps) {
  return (
    <Box display={"flex"} mb={2} sx={{ gap: { mobile: 0.5, tablet: 1 } }}>
      <Icon sx={{ color: "tertiary.main" }} />
      <Typography
        color={"tertiary.main"}
        m={0}
        sx={{
          fontSize: { tablet: "17px", laptop: "18px", desktopLarge: "19px" },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Title;
