import React from "react";
import Question from "../components/Question";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";
import { uniqueKey } from "../utils/uniqueKey";

import Grid from "@material-ui/core/Grid";

export default function Measurments() {
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

  const bodyMeasurments = [
    "Obvod krku",
    "Obvod ramien",
    "Obvod hrudníka",
    "Obvod bicepsu",
    "Obvod pása",
    "Obvod stehna",
  ];

  return (
    <Section sectionName={sectionNames.measurments} color={"secondary"}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <Question
            questionText={questions.measurments.height}
            questionType="slider"
            min={50}
            max={210}
            valueLabelDisplay="auto"
            marks={marksHeight}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Question
            questionText={questions.measurments.weight}
            questionType="slider"
            min={30}
            max={200}
            valueLabelDisplay="auto"
            marks={marksWeight}
            color="primary"
          />
        </Grid>
      </Grid>
      <Grid container justify="center">
        {bodyMeasurments.map((bodyPart, index) => {
          return (
            <Grid item key={index + uniqueKey} xs={12} sm={6} lg={4}>
              <Question
                label={bodyPart}
                type="number"
                variant="outlined"
                margin={1}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
