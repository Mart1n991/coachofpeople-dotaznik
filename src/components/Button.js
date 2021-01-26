import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

export default function ButtonComponent({ color, children, disabled }) {
  const useStyles = makeStyles({
    root: {
      margin: 10,
    },
  });

  const classes = useStyles();

  return (
    <Button
      color={color}
      variant="contained"
      disabled={disabled}
      className={classes.root}
    >
      {children}
    </Button>
  );
}
