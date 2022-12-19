import {
  createTheme,
  ThemeProvider,
  Theme,
  ThemeOptions,
} from "@mui/material/styles";
import { blue, purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

declare module "@mui/material/styles" {
  interface Palette {
    palette: any;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    palette?: {
      // mode: string;
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
    };
  }
}

export const theme = createTheme((theme) => {
  return {
    palette: {
      primary: {
        light: blue[300],
        main: blue[400],
        dark: blue[500],
        contrastText: "white",
      },
    },
  };
});

export const useStyles: any = makeStyles({
  textField: {
    // marginBottom: "10px",
    maxWidth: 400,
    minWidth: 400,
    ["& .Mui-focused + div.Mui-focused"]: {
      border: "1px solid transparent",
    },
    ["& .MuiOutlinedInput-root"]: {
      transition: "border .3s",
      border: `1px solid ${purple[500]}`,
      ["&:hover"]: {
        border: `1px solid ${purple[300]}`,
      },
    },
  },
  input: {
    color: "white",
    padding: "20px 30px",
  },
  label: {
    color: purple[500],
  },
});
