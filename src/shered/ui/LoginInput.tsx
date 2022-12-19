import { useStoreMap } from "effector-react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { handleChange, $loginData } from "../models/login-input-model";
import { LoginInputType } from "../api/login-input-api";
import { theme } from "../lib/login-input-lib";
import { useStyles } from "../lib/login-input-lib";

export const LoginInput = ({ name, type, placeholder }: LoginInputType) => {
  const classes = useStyles();

  const value: string = useStoreMap({
    store: $loginData,
    keys: [name],
    fn: (values) => values[name] || "",
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        sx={{ marginBottom: "20px", color: "primary.main" }}
        className={classes.textField}
        inputProps={{ className: classes.input }}
        InputLabelProps={{ className: classes.label }}
        variant="outlined"
        required
        name={name}
        label={placeholder}
        type={type}
        color="primary"
        onChange={handleChange}
        value={value}
      />
    </ThemeProvider>
  );
};
