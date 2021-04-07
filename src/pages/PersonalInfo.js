import { Radio } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Question from "../components/Question";
import Section from "../components/Section";
import ErrorMessage from "../components/ErrorMessage";
import { sectionNames } from "../constans/sectionNames";
import { errorMessages } from "../constans/errorMessages";
import { getInputPersonalInfo } from "../actions/inputChange";

function PersonalInfo(props) {
  const gender = ["Muž", "Žena"];

  return (
    <Section sectionName={sectionNames.personalInfo} color="secondary">
      <Question
        label="Krstné meno"
        variant="outlined"
        required
        type="text"
        margin={2}
        name="firstName"
        onChange={(e) => props.handleInputPersonalInfo(e.target.name, e.target.value)}
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
        onChange={(e) => props.handleInputPersonalInfo(e.target.name, e.target.value)}
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
        onChange={(e) => props.handleInputPersonalInfo(e.target.name, e.target.value)}
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
        onChange={(e) => props.handleInputPersonalInfo(e.target.name, e.target.value)}
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
    handleInputPersonalInfo: (name, text) => dispatch(getInputPersonalInfo(name, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
