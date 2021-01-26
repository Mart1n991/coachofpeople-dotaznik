import React from "react";
import Question from "../components/Question";
import Section from "../components/Section";
import { sectionNames } from "../constans/sectionNames";

export default function Address() {
  return (
    <Section sectionName={sectionNames.address} color="secondary">
      <Question label="Ulica" variant="outlined" required type="text" />
      <Question label="Číslo ulice" variant="outlined" required type="number" />
      <Question label="Mesto" variant="outlined" required type="text" />
      <Question label="PSČ" variant="outlined" required type="number" />
      <Question label="Štát" variant="outlined" required type="text" />
    </Section>
  );
}
