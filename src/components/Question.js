import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Grid,
  Select,
  Slider,
  TextField,
  FormLabel,
} from "@material-ui/core";
import React from "react";
import Headings from "./Headings";

export default function Question({
  questionText,
  label,
  questionType,
  row,
  control,
  autoFocus,
  color,
  disabled,
  margin,
  name,
  onChange,
  placeholder,
  required,
  rows,
  rowsMax,
  type,
  value,
  variant,
  arrayOfInputs,
}) {
  const uniqueKey = new Date().getTime;

  const typeOfQuestion = () => {
    switch (questionType) {
      case "selection":
        return (
          <FormControl>
            <FormLabel>{label}</FormLabel>

            <RadioGroup onChange={onChange} row={row}>
              {arrayOfInputs.map((input, index) => {
                return (
                  <FormControlLabel
                    value={input}
                    control={control} //Radio input alebo checkbox input
                    label={input}
                    key={index + uniqueKey}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );

      case "select":
        return <Select />;

      case "slider":
        return <Slider />;

      default:
        return (
          <TextField
            label={label}
            variant={variant}
            onChange={onChange}
            required={required}
            rows={rows}
            rowsMax={rowsMax}
            type={type}
            value={value}
            autoFocus={autoFocus}
          />
        );
    }
  };

  return (
    <Grid>
      <Headings>{questionText}</Headings>
      {typeOfQuestion()}
    </Grid>
  );
}
