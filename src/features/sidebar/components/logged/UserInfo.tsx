import { useGetPlayerBasicInfoQuery } from "../../userInfoApiSlice";

import Avatar from "@mui/material/Avatar";

import ExpInfo from "../../../../shared/components/ExpInfo";

import { Box, Typography } from "@mui/material";

function UserInfo() {
  const { data, isSuccess, isLoading, isError } = useGetPlayerBasicInfoQuery();

  return (
    <Box display={"flex"} flexDirection={"column"} mb={6}>
      {isLoading && <Box></Box>}
      {isError && <Box>Erro...</Box>}
      {isSuccess && (
        <>
          <Typography
            alignItems={"center"}
            color={"#6a6a84"}
            display={"flex"}
            fontFamily={"'Roboto Condensed', sans-serif"}
            fontSize={"16px"}
            justifyContent={"center"}
            m={0}
            sx={{
              fontSize: {
                mobile: "16px",
                laptop: "20px",
                desktopLarge: "22px",
              },
              hyphens: "auto",
              wordBreak: "break-word",
            }}
          >
            {data.name.toUpperCase()}
          </Typography>
          <Avatar
            alt="User Avatar"
            src={data.avatar}
            sx={{
              alignSelf: "center",
              border: "2px solid green",
              borderRadius: "50%",
              boxSizing: "border-box",
              height: "80px",
              margin: "8px 0",
              width: "80px",
            }}
          />
          <ExpInfo
            exp={data.experience}
            isModal={false}
            level={data.level}
            maxExpLevel={data.maxExperience}
          />
        </>
      )}
    </Box>
  );
}

export default UserInfo;
