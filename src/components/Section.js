import { Grid } from "@material-ui/core";
import React from "react";
import Headings from "./Headings";

export default function Section({ children, sectionName, color }) {
  return (
    <Grid>
      <Headings variant="h4" color={color} align="center" margin={4}>
        {sectionName}
      </Headings>
      {children}
    </Grid>
  );
}
