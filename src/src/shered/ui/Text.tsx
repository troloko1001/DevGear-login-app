import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from '@mui/material/styles'

const useStyles: any = makeStyles((theme?: any) => ({
  MyText: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 15,
  },
}));

type PropsComponent = {
  children: ReactNode;
};

export const Text = ({ children }: PropsComponent) => {
  const classes = useStyles();
  return <Typography className={classes.MyText}>{children}</Typography>;
};
