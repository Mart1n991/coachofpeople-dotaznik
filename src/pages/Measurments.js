import React from "react";
import { connect } from "react-redux";
import Question from "../components/Question";
import Section from "../components/Section";
import ErrorMessage from "../components/ErrorMessage";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";
import { errorMessages } from "../constans/errorMessages";

import Grid from "@material-ui/core/Grid";
import { getInputMeasurments } from "../Actions/inputChange";

function Measurments(props) {
  const marksHeight = [
    { value: 50, label: "50cm" },
    { value: 100, label: "100cm" },
    { value: 180, label: "180cm" },
  ];

  const marksWeight = [
    { value: 30, label: "30kg" },
    { value: 100, label: "100kg" },
    { value: 190, label: "190kg" },
  ];

  const onWeightHeightChange = (event, newValue) => {
    props.measurmentsInput(event.target.ariaLabel, newValue);
  };

  const onBodyMeasureChange = (event) => {
    props.measurmentsInput(event.target.name, event.target.value);
  };

  return (
    <Section sectionName={sectionNames.measurments} color={"secondary"}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <Question
            sliderName={questions.measurments.height}
            questionType="slider"
            ariaLabel="height"
            min={50}
            max={210}
            valueLabelDisplay="auto"
            marks={marksHeight}
            color="primary"
            value={props.measurments.height}
            onChange={onWeightHeightChange}
          />
          {props.errorMeasurments.height && <ErrorMessage>{errorMessages.height}</ErrorMessage>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Question
            sliderName={questions.measurments.weight}
            questionType="slider"
            ariaLabel="weight"
            min={30}
            max={200}
            valueLabelDisplay="auto"
            marks={marksWeight}
            color="primary"
            value={props.measurments.weight}
            onChange={onWeightHeightChange}
          />
          {props.errorMeasurments.weight && <ErrorMessage>{errorMessages.weight}</ErrorMessage>}
        </Grid>

        <Question
          label="Obvod krku"
          type="number"
          variant="outlined"
          value={props.measurments.neck}
          name="neck"
          onChange={onBodyMeasureChange}
          min={0}
        />
        {props.errorMeasurments.neck && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
        <Question
          label="Obvod ramien"
          type="number"
          variant="outlined"
          value={props.measurments.shoulders}
          name="shoulders"
          onChange={onBodyMeasureChange}
          min={0}
        />
        {props.errorMeasurments.shoulders && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
        <Question
          label="Obvod hrudníka"
          type="number"
          variant="outlined"
          value={props.measurments.chest}
          name="chest"
          onChange={onBodyMeasureChange}
          min={0}
        />
        {props.errorMeasurments.chest && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
        <Question
          label="Obvod bicepsu"
          type="number"
          variant="outlined"
          value={props.measurments.biceps}
          name="biceps"
          onChange={onBodyMeasureChange}
          min={0}
        />
        {props.errorMeasurments.biceps && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
        <Question
          label="Obvod pása"
          type="number"
          variant="outlined"
          value={props.measurments.belt}
          name="belt"
          onChange={onBodyMeasureChange}
          min={0}
        />
        {props.errorMeasurments.belt && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
        <Question
          label="Obvod stehna"
          type="number"
          variant="outlined"
          value={props.measurments.thigh}
          name="thigh"
          onChange={onBodyMeasureChange}
          min={0}
        />
        {props.errorMeasurments.thigh && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
      </Grid>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    measurments: state.measurments.data,
    errorMeasurments: state.measurments.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    measurmentsInput: (name, text) => dispatch(getInputMeasurments(name, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Measurments);
