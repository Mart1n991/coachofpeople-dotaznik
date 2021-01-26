import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Radio,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import Headings from "../components/Headings";
import Question from "../components/Question";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";
import { uniqueKey } from "../utils/uniqueKey";

export default function Exercise() {
  const exercise = [
    "Drep s činkou",
    "Zhyby",
    "Mŕtvy ťah",
    "Upažovanie v stoji",
    "Príťahy v predklone",
    "Benchpress",
  ];

  const options = ["Áno", "Nie"];
  const value = "Áno"; //Dočasne keď budem robiť redux tak vymazať

  const [star, setStar] = React.useState(null);

  const labels = {
    1: "Nováčik",
    2: "Mierne Pokročilý",
    3: "Pokročilý",
    4: "Expert",
  };

  const trainingFrequency = [1, 2, 3, 4, 5, 6, 7];
  const trainingDuration = [
    "20 minút",
    "40 minút",
    "60 minút",
    "80 minút",
    "100 minút",
    "120 minút",
    "180 minút",
  ];

  const useStyles = makeStyles({
    root: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0px",
    },

    box: {
      width: 120,
      color: "#ffb400",
    },

    day: {
      minWidth: 150,
      marginBottom: 10,
    },

    description: {
      width: 300,
    },

    sports: {
      padding: "10px 15px 10px 15px",
      backgroundColor: "#72828f",
      margin: "5px 10px",
      width: 120,
      borderRadius: 20,
      cursor: "pointer",
    },
  });

  const classes = useStyles();

  const favouriteSports = [
    "Beh",
    "Tanec",
    "Hokej",
    "Futbal",
    "Plávanie",
    "Bicykel",
    "Korčuľovanie",
    "Turistika",
    "Aerobic",
    "Yoga",
    "Zumba",
    "Prechádzky",
    "Volejbal",
    "Basketbal",
    "Lezenie",
    "Posilňovanie",
    "Žadne z uvedených",
  ];

  const renderQuestion = () => {
    const days = [
      "Pondelok",
      "Utorok",
      "Streda",
      "Štvrtok",
      "Piatok",
      "Sobota",
      "Nedeľa",
    ];

    const typeOfExercise = ["Posilňovanie", "Kardio", "Voľno"];

    switch (value) {
      case "Áno":
        return (
          <>
            <Headings
              color="primary"
              variant="subtitle1"
              align="center"
              margin={2}
            >
              {questions.exercises.typeOfExercises}
            </Headings>

            {/* Question Ktorý typo pohybovej aktivity bežne robíte */}
            {days.map((day, index) => {
              return (
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  key={index + uniqueKey}
                  className={classes.day}
                >
                  <Headings color="secondary" variant="subtitle2" margin={1}>
                    {day}
                  </Headings>
                  <Grid item xs={12} align="center" sm={4}>
                    <FormControl className={classes.day}>
                      <InputLabel>Typ cvičenia</InputLabel>
                      <Select>
                        {typeOfExercise.map((exercise, index) => {
                          return (
                            <MenuItem key={index + uniqueKey}>
                              {exercise}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} align="center" sm={4}>
                    <FormControl className={classes.day}>
                      <InputLabel>Dĺžka cvičenia</InputLabel>
                      <Select>
                        {trainingDuration.map((duration, index) => {
                          return (
                            <MenuItem value={duration} key={index + uniqueKey}>
                              {duration}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              );
            })}

            {/* Question popíšte váš tréning */}
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Headings
                  color="primary"
                  variant="subtitle1"
                  align="center"
                  margin={2}
                >
                  {questions.exercises.descriptionOfTraining}
                </Headings>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  multiline
                  rows={6}
                  rowsMax={10}
                  className={classes.description}
                  placeholder="Aké cviky vykonávate? Koľko sérií a opakovaní pre jednotlivé cviky používate?"
                  label="Kliknite a začnite písať"
                />
              </Grid>
            </Grid>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Section sectionName={sectionNames.exercises} color="secondary">
      <Grid container justify="center">
        <Headings color="primary" variant="subtitle1" align="center" margin={2}>
          {questions.exercises.levelOfExercise}
        </Headings>
        {exercise.map((input, index) => {
          return (
            <Grid
              key={index + uniqueKey}
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography>{input}</Typography>
              </Grid>

              <Grid item className={classes.root} align="center">
                <Rating
                  value={star}
                  onChange={(event, newStar) => setStar(newStar)}
                  name={input}
                  max={4}
                />
                {
                  <Box className={classes.box}>
                    {star !== null ? labels[star] : "Bez skúseností"}
                  </Box>
                }
              </Grid>
            </Grid>
          );
        })}
      </Grid>

      <Question
        questionType="selection"
        questionText={questions.exercises.currentlyTraining}
        control={<Radio />}
        arrayOfInputs={options}
        color="primary"
        row
        direction="column"
        align="center"
      />

      {renderQuestion()}

      {/* Question Aký druh pohybu máte najradšej */}
      <Headings
        color="primary"
        variant="subtitle1"
        align="center"
        mt={5}
        mb={3}
      >
        {questions.exercises.favouriteSport}
      </Headings>

      <Grid container align="center">
        {favouriteSports.sort().map((sport, index) => {
          return (
            <Grid item key={index + uniqueKey} xs={6} sm={4} lg={3}>
              <div className={classes.sports}>{sport}</div>
            </Grid>
          );
        })}
      </Grid>

      <Headings
        color="primary"
        variant="subtitle1"
        align="center"
        mt={5}
        mb={3}
      >
        {questions.exercises.trainingFrequency}
      </Headings>

      <Grid item xs={12} align="center">
        <FormControl className={classes.day}>
          <Select>
            {trainingFrequency.map((duration, index) => {
              return (
                <MenuItem value={duration} key={index + uniqueKey}>
                  {duration}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>

      <Headings
        color="primary"
        variant="subtitle1"
        align="center"
        mt={5}
        mb={3}
      >
        {questions.exercises.trainingDuration}
      </Headings>

      <Grid item xs={12} align="center">
        <FormControl className={classes.day}>
          <Select>
            {trainingDuration.map((duration, index) => {
              return (
                <MenuItem value={duration} key={index + uniqueKey}>
                  {duration}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Section>
  );
}
