import { Checkbox, Radio } from "@material-ui/core";
import React from "react";
import Question from "../components/Question";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";

export default function Goals() {
  const typeOfGoals = [
    "Zlepšiť zdravie",
    "Zlepšiť výkonnosť",
    "Zvýšiť silu",
    "Zväčšiť svalovú hmotu",
    "Zbaviť sa tuku",
    "Pribrať na váhe",
  ];

  const durationToAchieveGoal = [
    "4 Týždne",
    "8 Týždňov",
    "12 Týždňov",
    "20 Týždňov",
  ];

  const importantGoal = [
    "Okamžité dosiahnutie výsledku, ktorý je tažšie udržateľný",
    "Pomalšie dosiahnutie výsledku, ktorý je trvalo udržateľný",
  ];

  return (
    <Section sectionName={sectionNames.goals} color="secondary">
      <Question
        questionType="selection"
        arrayOfInputs={typeOfGoals}
        control={<Checkbox color="primary" />}
      />

      <Question
        questionText={questions.goals.timeToAchieveGoal}
        questionType="select"
        arrayOfInputs={durationToAchieveGoal}
        color="primary"
        align="center"
        xsH={12}
        xsQ={12}
      />

      <Question
        questionType="selection"
        arrayOfInputs={importantGoal}
        control={<Radio />}
        questionText={questions.goals.importantGoal}
        color="primary"
        direction="column"
        align="center"
      />
    </Section>
  );
}
