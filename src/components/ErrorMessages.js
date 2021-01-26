import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    backgroundColor: red[700],
    color: "#000",
    // padding: "5px 10px", /úDomyslieť ako nechať padding
    fontWeight: "bold",
    marginBottom: "15px",
    borderRadius: "2px",
    textAlign: "center",
  },
});

export default function ErrorMessages({ children }) {
  const classes = useStyles();

  return <Typography className={classes.root}>{children}</Typography>;
}
