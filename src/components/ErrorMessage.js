import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default function ErrorMessage({ children, variant, align, color }) {
  const useStyles = makeStyles({
    root: {
      backgroundColor: red[700],
      padding: "5px 10px",
      fontWeight: "bold",
      borderRadius: "2px",
      textAlign: "center",
    },

    container: {
      width: 250,
      margin: " 0 auto",
    },
  });

  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <Typography variant={variant} align={align} color={color} className={classes.root}>
        {children}
      </Typography>
    </Grid>
  );
}
