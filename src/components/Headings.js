import { Typography } from "@material-ui/core";
import React from "react";

export default function Headings({ children, variant, color, align }) {
  return (
    <Typography align={align} variant={variant} color={color}>
      {children}
    </Typography>
  );
}
