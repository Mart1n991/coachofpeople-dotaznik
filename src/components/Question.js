import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Grid,
  Select,
  TextField,
  FormLabel,
  InputLabel,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Headings from "./Headings";
import { uniqueKey } from "../utils/uniqueKey";
import { PrettoSlider } from "../styles/style";

export default function Question({
  ariaValuetext,
  ariaLabel,
  align,
  questionText,
  label,
  questionType,
  row,
  control,
  autoFocus,
  color,
  name,
  onChange,
  required,
  rows,
  rowsMax,
  type,
  value,
  variant,
  arrayOfInputs,
  marks,
  max,
  min,
  step,
  valueLabelDisplay,
  direction,
  xsH,
  xsQ,
  smH,
  smQ,
  mdH,
  mdQ,
  lgH,
  lgQ,
  xlH,
  xlQ,
  multiline,
  mt,
  mb,
  sliderName,
}) {
  const useStyles = makeStyles({
    root: {
      marginTop: "10px",
      marginBottom: "10px",
    },

    rating: {
      display: "flex",
      alignItems: "center",
    },
  });

  const classes = useStyles();

  const typeOfQuestion = () => {
    switch (questionType) {
      case "selection":
        return (
          <FormControl>
            <FormLabel required={required}>{label}</FormLabel>

            <RadioGroup onChange={onChange} row={row} value={value} name={name}>
              {arrayOfInputs.map((input, index) => {
                return (
                  <FormControlLabel
                    control={control} //Radio input alebo checkbox input
                    label={input}
                    key={index + uniqueKey}
                    value={input}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );

      case "select":
        return (
          <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select onChange={onChange}>
              {arrayOfInputs.map((input, index) => {
                return (
                  <MenuItem value={input} key={index + uniqueKey}>
                    {input}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        );

      case "slider":
        return (
          <>
            <Headings variant="body2" color="primary" mb={0}>
              {sliderName}
            </Headings>
            <PrettoSlider
              onChange={onChange}
              aria-label={ariaLabel}
              aria-valuetext={ariaValuetext}
              marks={marks}
              max={max}
              min={min}
              color={color}
              step={step}
              value={value}
              valueLabelDisplay={valueLabelDisplay}
            />
          </>
        );

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
            multiline={multiline}
            min={min}
            max={max}
            name={name}
          />
        );
    }
  };

  return (
    <Grid container justify="center" direction={direction}>
      <Grid item className={classes.root} xs={xsH} sm={smH} md={mdH} lg={lgH} xl={xlH}>
        <Headings color={color} variant="subtitle1" align={align} mt={mt} mb={mb}>
          {questionText}
        </Headings>
      </Grid>
      <Grid item className={classes.root} xs={xsQ} sm={smQ} md={mdQ} lg={lgQ} xl={xlQ} align={align}>
        {typeOfQuestion()}
      </Grid>
    </Grid>
  );
}
