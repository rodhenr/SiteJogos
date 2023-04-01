import { Box } from "@mui/material";

interface IProps {
  children: JSX.Element | JSX.Element[]
}

function SidebarContainer({ children }: IProps) {
  return (
    <Box
      bgcolor={"#131315"}
      boxSizing={"border-box"}
      display={"flex"}
      height={"100%"}
      py={3}
      px={2}
      width={"300px"}
    >
      {children}
    </Box>
  );
}

export default SidebarContainer;
