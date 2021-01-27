import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default function ErrorMessage({ children, variant, align, color }) {
  const useStyles = makeStyles({
    root: {
      backgroundColor: red[700],
      padding: "5px 10px",
      fontWeight: "bold",
      marginBottom: "15px",
      borderRadius: "2px",
      textAlign: "center",
    },
  });

  const classes = useStyles();

  return (
    <Grid item align="center">
      <Typography variant={variant} align={align} color={color} className={classes.root}>
        {children}
      </Typography>
    </Grid>
  );
}
