import { Radio } from "@material-ui/core";
import React from "react";
import Question from "../components/Question";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";

export default function Health() {
  const options = ["Áno", "Nie"];

  return (
    <Section sectionName={sectionNames.health} color="secondary">
      <Question
        questionText={questions.health.healthProblems}
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={options}
        color="primary"
        mt={2}
        row
        direction="column"
        align="center"
      />

      <Question
        questionText={questions.health.medicals}
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={options}
        color="primary"
        mt={2}
        row
        direction="column"
        align="center"
      />

      <Question
        questionText={questions.health.injuries}
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={options}
        color="primary"
        mt={2}
        row
        direction="column"
        align="center"
      />
    </Section>
  );
}
