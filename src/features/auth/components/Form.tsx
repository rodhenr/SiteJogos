import { Box, Button, CircularProgress, useTheme } from "@mui/material";
import Loading from "../../../shared/components/Loading";

const formStyle = { display: "flex", "flex-direction": "column", gap: "16px" };

interface IProps {
  buttonText: string;
  children: JSX.Element | JSX.Element[];
  handleForm: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

function Form({ buttonText, children, handleForm, isLoading }: IProps) {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"center"}
      sx={{
        width: { mobile: "85%", tablet: "95%" },
        "& input": {
          bgcolor: "#FFF",
          width: "100%",
        },
      }}
    >
      <form style={formStyle} onSubmit={(e) => handleForm(e)}>
        {children}

        {isLoading ? (
          <Loading />
        ) : (
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "10px",
              fontSize: "18px",
              height: "50px",
              ":hover": {
                backgroundColor: theme.palette.secondary.light,
              },
            }}
            type="submit"
            variant={"contained"}
          >
            {buttonText}
          </Button>
        )}
      </form>
    </Box>
  );
}

export default Form;
