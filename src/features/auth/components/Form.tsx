import { Box, Button } from "@mui/material";
import Loading from "../../../shared/components/Loading";

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
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"center"}
      px={1}
      width={"100%"}
      sx={{
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
              bgcolor: "tertiary.main",
              borderRadius: "10px",
              fontSize: "18px",
              height: "50px",

              ":hover": {
                bgcolor: "tertiary.light",
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
