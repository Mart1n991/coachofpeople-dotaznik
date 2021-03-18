import React from "react";
import Button from "../components/Button";
import Headings from "../components/Headings";
import { Grid, TextField } from "@material-ui/core";

export default function AddList({ question, onClick, label, onChange, value }) {
  return (
    <Grid container justify="center">
      <Headings variant="subtitle1" color="primary" align="center" mt={2} mb={2}>
        {question}
      </Headings>

      <Grid item xs={12} align="center">
        <TextField variant="outlined" label={label} type="text" onChange={onChange} value={value} />
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" onClick={onClick}>
          Pridať
        </Button>
      </Grid>
    </Grid>
  );
}
