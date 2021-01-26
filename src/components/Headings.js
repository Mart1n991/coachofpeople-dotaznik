import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Headings({
  children,
  variant,
  color,
  align,
  margin,
  mt,
  mb,
}) {
  return (
    <Grid item>
      <Box m={margin} mt={mt} mb={mb}>
        <Typography align={align} variant={variant} color={color}>
          {children}
        </Typography>
      </Box>
    </Grid>
  );
}
