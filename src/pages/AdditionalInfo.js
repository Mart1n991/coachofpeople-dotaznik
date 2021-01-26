import { Radio } from "@material-ui/core";
import React from "react";
import Question from "../components/Question";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";

export default function AdditionalInfo() {
  const priority = ["Pribrať", "Schudnúť"];
  return (
    <Section sectionName={sectionNames.additionalInfo} color="secondary">
      <Question
        questionText={questions.additionalInfo.priority}
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={priority}
        color="primary"
        mt={2}
        row
        direction="column"
        align="center"
      />

      <Question
        questionText={questions.additionalInfo.requirements}
        multiline
        rows={6}
        rowsMax={10}
        color="primary"
        variant="outlined"
        align="center"
        label="Požiadavky"
      />

      <Question
        questionText={questions.additionalInfo.complaints}
        multiline
        rows={6}
        rowsMax={10}
        color="primary"
        variant="outlined"
        align="center"
        label="Sťažnosti"
      />

      <Question
        questionText={questions.additionalInfo.relax}
        multiline
        rows={6}
        rowsMax={10}
        color="primary"
        variant="outlined"
        align="center"
        label="Relax"
      />
    </Section>
  );
}
