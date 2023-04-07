import { Box, Typography, useTheme } from "@mui/material";

interface IProps {
  Icon: any;
  title: string;
}

function Title({ Icon, title }: IProps) {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      fontFamily={"'Space Grotesk', sans-serif"}
      mb={2}
      sx={{ gap: { mobile: 0.5, tablet: 1 } }}
    >
      <Icon sx={{ color: theme.palette.info.light }} />
      <Typography
        color={"#FFF"}
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
