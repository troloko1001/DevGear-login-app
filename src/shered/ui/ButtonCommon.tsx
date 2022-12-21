import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

// const useStyles: any = makeStyles({
//   button: {
//     backgroundColor: "#ab47bc",
//     border: "20px solid #ce93d8",
//     marginBottom: 20,
//     ["&:hover"]: {
//       border: "2px solid #90caf9",
//       backgroundColor: "#42a5f5",
//     },
//   },
// });

type ParamType = {
  password: string;
  email: string;
};

interface ButtonCommonType {
  type?: string;
  text: string;
  param: ParamType;
  fn: (param: ParamType) => void;
  // fn?: (param: ParamType | undefined) => void;
}

export const ButtonCommon = ({
  type = "button",
  text,
  fn,
  param,
}: ButtonCommonType) => {
  // const classes = useStyles();

  return (
    <Button
      sx={{
        backgroundColor: "#ab47bc",
        border: "2px solid #ce93d8",
        marginBottom: 20,
        ["&:hover"]: {
          border: "2px solid #90caf9",
          backgroundColor: "#42a5f5",
        },
      }}
      // className={classes.button}
      onClick={() => fn?.(param)}
      variant="contained"
      color="primary"
      // type={type}
    >
      {text}
    </Button>
  );
};
