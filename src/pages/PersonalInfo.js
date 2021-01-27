import { Radio } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { getInput } from "../Actions/inputChange";
import Question from "../components/Question";
import Section from "../components/Section";
import { sectionNames } from "../constans/sectionNames";

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
      />
      <Question
        label="Priezvisko"
        variant="outlined"
        required
        type="text"
        margin={2}
        name="lastName"
        onChange={onInputChange}
      />
      <Question label="Vek" variant="outlined" required type="number" margin={2} name="age" onChange={onInputChange} />
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
      />
    </Section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPersonalInfo: (name, text) => dispatch(getInput(name, text)),
  };
};

export default connect(null, mapDispatchToProps)(PersonalInfo);
