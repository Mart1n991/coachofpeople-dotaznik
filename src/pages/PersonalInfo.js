import { Radio } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { getInput } from "../Actions/inputChange";
import Question from "../components/Question";
import Section from "../components/Section";
import ErrorMessage from "../components/ErrorMessage";
import { sectionNames } from "../constans/sectionNames";
import { errorMessages } from "../constans/errorMessages";

function PersonalInfo(props) {
  const gender = ["Muž", "Žena"];

  const onInputChange = (event) => {
    props.setPersonalInfo(event.target.name, event.target.value);
  };

  return (
    <Section sectionName={sectionNames.personalInfo} color="secondary">
      <Question
        label="Krstné meno"
        variant="outlined"
        required
        type="text"
        margin={2}
        name="firstName"
        onChange={onInputChange}
        value={props.personalInfo.firstName}
      />

      {props.personalInfoErrors.firstName && <ErrorMessage>{errorMessages.required}</ErrorMessage>}

      <Question
        label="Priezvisko"
        variant="outlined"
        required
        type="text"
        margin={2}
        name="lastName"
        onChange={onInputChange}
        value={props.personalInfo.lastName}
      />

      {props.personalInfoErrors.lastName && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
      <Question
        label="Vek"
        variant="outlined"
        required
        type="number"
        margin={2}
        name="age"
        onChange={onInputChange}
        min={0}
        value={props.personalInfo.age}
      />

      {props.personalInfoErrors.age && <ErrorMessage>{errorMessages.positiveNumber}</ErrorMessage>}

      <Question
        label="Pohlavie"
        arrayOfInputs={gender}
        required
        control={<Radio />}
        questionType="selection"
        row
        margin={2}
        onChange={onInputChange}
        name="gender"
        value={props.personalInfo.gender}
      />
      {props.personalInfoErrors.gender && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    personalInfo: state.personalInfo.data,
    personalInfoErrors: state.personalInfo.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPersonalInfo: (name, text) => dispatch(getInput(name, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
