import { Box, Button, CircularProgress } from "@mui/material";

const formStyle = { display: "flex", "flex-direction": "column", gap: "16px" };

interface IProps {
  buttonText: string;
  children: JSX.Element | JSX.Element[];
  handleForm: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

function Form({ buttonText, children, handleForm, isLoading }: IProps) {
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
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "#ff4c29;",
              borderRadius: "10px",
              display: "flex",
              fontSize: "18px",
              height: "50px",
              justifyContent: "center",
              width: " 100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Button
            sx={{
              backgroundColor: "#ff4c29;",
              borderRadius: "10px",
              fontSize: "18px",
              height: "50px",
              ":hover": {
                backgroundColor: "#cb3b1e;",
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
