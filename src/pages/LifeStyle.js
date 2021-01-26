import { Checkbox, Radio, Grid, TextField } from "@material-ui/core";
import React from "react";
import Headings from "../components/Headings";
import Question from "../components/Question";
import Button from "../components/Button";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";

export default function LifeStyle() {
  const levelOfMovementInWork = ["Žiadna", "Mierna", "Vysoká"];
  const traveling = [
    "Veľmi málo",
    "Počas týždňa",
    "Niekoľkokrát do mesiaca",
    "Niekoľkokrát za rok",
  ];

  const options = ["Áno", "Nie"];

  const marksAppetite = [
    { value: 1, label: "Žiadna" },
    { value: 2, label: "Malá" },
    { value: 3, label: "Normálna" },
    { value: 4, label: "Vyššia" },
    { value: 5, label: "Vysoká" },
  ];

  const marksSleepQuality = [
    { value: 1, label: "Veľmi veľká" },
    { value: 2, label: "Zlá" },
    { value: 3, label: "Normálna" },
    { value: 4, label: "Dobrá" },
    { value: 5, label: "Výborná" },
  ];

  const marksExhaustion = [
    { value: 1, label: "Veľmi silná" },
    { value: 2, label: "Silná" },
    { value: 3, label: "Slabá" },
    { value: 4, label: "Minimálna" },
    { value: 5, label: "Žiadna" },
  ];

  return (
    <Section sectionName={sectionNames.lifeStyle} color="secondary">
      <Question
        questionText={questions.lifestyle.proffesion}
        variant="outlined"
        color="primary"
        label="Povolanie"
      />

      <Question
        questionText={questions.lifestyle.levelOfMovementInWork}
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={levelOfMovementInWork}
        color="primary"
        row
        mt={3}
        align="center"
      />

      <Question
        questionText={questions.lifestyle.traveling}
        align="center"
        questionType="selection"
        control={<Checkbox />}
        arrayOfInputs={traveling}
        color="primary"
        mt={3}
      />

      <Question
        questionText={questions.lifestyle.foodInvestment}
        color="primary"
        align="center"
        variant="outlined"
        type="number"
        label="Zadajte číslo"
        mt={2}
        min={0}
      />

      <Question
        questionText={questions.lifestyle.suplementInvestment}
        color="primary"
        align="center"
        variant="outlined"
        type="number"
        label="Zadajte číslo"
        mt={2}
        min={0}
      />

      <Question
        questionText={questions.lifestyle.fastFood}
        color="primary"
        align="center"
        variant="outlined"
        type="number"
        label="Zadajte číslo"
        mt={2}
        min={0}
      />

      <Question
        questionText={questions.lifestyle.allergies}
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
        questionText={questions.lifestyle.suplements}
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={options}
        color="primary"
        mt={2}
        row
        direction="column"
        align="center"
      />

      <Grid container justify="center">
        <Headings
          variant="subtitle1"
          color="primary"
          align="center"
          mt={2}
          mb={2}
        >
          {questions.lifestyle.popularFood}
        </Headings>

        <Grid item xs={12} align="center">
          <TextField variant="outlined" label="Obľubené jedlo" type="text" />
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary">Pridať</Button>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Headings
          variant="subtitle1"
          color="primary"
          align="center"
          mt={2}
          mb={2}
        >
          {questions.lifestyle.unPopularFood}
        </Headings>

        <Grid item xs={12} align="center">
          <TextField
            variant="outlined"
            label="Jedlo, ktoré nemáte radi"
            type="text"
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary">Pridať</Button>
        </Grid>
      </Grid>

      <Question
        questionType="slider"
        questionText={questions.lifestyle.qualities}
        marks={marksAppetite}
        min={1}
        max={5}
        valueLabelDisplay="auto"
        color="primary"
        mt={2}
        sliderName="Chuť do jedla"
      />

      <Question
        questionType="slider"
        marks={marksSleepQuality}
        min={1}
        max={5}
        valueLabelDisplay="auto"
        color="primary"
        mt={2}
        sliderName="Kvalita spánku"
      />

      <Question
        questionType="slider"
        marks={marksExhaustion}
        min={1}
        max={5}
        valueLabelDisplay="auto"
        color="primary"
        mt={2}
        sliderName="Únava počas dňa"
      />

      <Question
        questionType="slider"
        marks={marksAppetite}
        min={1}
        max={5}
        valueLabelDisplay="auto"
        color="primary"
        mt={2}
        sliderName="Ochota trénovať"
      />
    </Section>
  );
}
