import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { LoginInput } from "./LoginInput";

const useStyle: any = makeStyles({
  LoginInputContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    padding: 0,
  },
});

export const ContainerForLoginInput = () => {
  const classes = useStyle();

  return (
    <Container className={classes.LoginInputContainer}>
      <LoginInput name="email" type="email" placeholder="type email" />
      <LoginInput name="password" type="password" placeholder="type password" />
    </Container>
  );
};
