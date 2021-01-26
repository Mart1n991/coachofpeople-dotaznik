import { Radio } from "@material-ui/core";
import React from "react";
import Question from "../components/Question";
import Section from "../components/Section";
import { sectionNames } from "../constans/sectionNames";

export default function PersonalInfo() {
  const gender = ["Muž", "Žena"];

  return (
    <Section sectionName={sectionNames.personalInfo} color="secondary">
      <Question
        label="Krstné meno"
        variant="outlined"
        required
        type="text"
        margin={2}
      />
      <Question
        label="Priezvisko"
        variant="outlined"
        required
        type="text"
        margin={2}
      />
      <Question
        label="Vek"
        variant="outlined"
        required
        type="number"
        margin={2}
      />
      <Question
        label="Pohlavie"
        arrayOfInputs={gender}
        required
        control={<Radio />}
        questionType="selection"
        row
        margin={2}
      />
    </Section>
  );
}
