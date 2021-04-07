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
import { connect } from "react-redux";
import {
  exerciseDescription,
  exerciseFavourite,
  exerciseFrequency,
  exerciseDuration,
  exerciseLevel,
  exerciseRegularly,
  exerciseType,
} from "../Actions/exerciseActions";
import Headings from "../components/Headings";
import Question from "../components/Question";
import Section from "../components/Section";
import ErrorMessage from "../components/ErrorMessage";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";
import { uniqueKey } from "../utils/uniqueKey";

function Exercise(props) {
  const options = ["Áno", "Nie"];

  const labels = {
    1: "Nováčik",
    2: "Mierne Pokročilý",
    3: "Pokročilý",
    4: "Expert",
  };

  const trainingFrequency = ["1 krát", "2 krát", "3 krát", "4 krát", "5 krát", "6 krát", "7 krát"];
  const trainingDuration = ["20 minút", "40 minút", "60 minút", "80 minút", "100 minút", "120 minút", "180 minút"];

  const useStyles = makeStyles({
    root: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0px",
    },

    box: {
      width: 120,
      marginLeft: 10,
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
      margin: "5px 10px",
      width: 120,
      borderRadius: 20,
      cursor: "pointer",
      outline: "none",
      border: "none",
      color: "white",
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
    "Tenis",
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

  const onExerciseLevelChange = (event, newValue) => {
    props.exerciseLevel(event.target.name, newValue);
  };

  const onExerciseRegularlyChange = (event) => {
    props.exerciseRegularly(event.target.value);
  };

  const onTypeAndDurationChange = (event) => {
    props.exerciseType(event.target.name, event.target.value);
  };

  const onTrainingDescriptionChange = (event) => {
    props.exerciseDescription(event.target.value);
  };

  const onTrainingFrequencyChange = (event) => {
    props.exerciseFrequency(event.target.value);
  };

  const onExerciseFavouriteChange = (sport) => {
    props.exerciseFavourite(sport);
  };

  const onExerciseDurationChange = (event) => {
    props.exerciseDuration(event.target.value);
  };

  const renderQuestion = () => {
    const typeOfExercise = ["Posilňovanie", "Kardio", "Voľno"];

    switch (props.exercise.workoutRegularly) {
      case "Áno":
        return (
          <>
            <Headings color="primary" variant="subtitle1" align="center" margin={2}>
              {questions.exercises.typeOfExercises}
            </Headings>

            {/* Question Ktorý typo pohybovej aktivity bežne robíte */}
            {Object.values(props.exercise.exercises).map((exercise, index) => {
              return (
                <Grid container alignItems="center" justify="center" key={index + uniqueKey} className={classes.day}>
                  <Headings color="secondary" variant="subtitle2" margin={1}>
                    {exercise.day}
                  </Headings>
                  <Grid item xs={12} align="center" sm={4}>
                    <FormControl className={classes.day}>
                      <InputLabel>Typ cvičenia</InputLabel>
                      <Select value={exercise.type} onChange={onTypeAndDurationChange} name={`${exercise.day}.type`}>
                        {typeOfExercise.map((exercise, index) => {
                          return (
                            <MenuItem key={index + uniqueKey} value={exercise}>
                              {exercise}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} align="center" sm={4}>
                    <FormControl className={classes.day} disabled={exercise.type === "" || exercise.type === "Voľno"}>
                      <InputLabel>Dĺžka cvičenia</InputLabel>
                      <Select
                        value={exercise.type === "Voľno" ? "" : exercise.duration}
                        onChange={onTypeAndDurationChange}
                        name={`${exercise.day}.duration`}
                      >
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
                <Headings color="primary" variant="subtitle1" align="center" margin={2}>
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
                  value={props.exercise.trainingDescription}
                  onChange={onTrainingDescriptionChange}
                />
              </Grid>
            </Grid>
          </>
        );

      default:
        return null;
    }
  };

  const { squatDumbell, pullUps, deadLift, benchPress, sideRaises, bentOverRows } = props.exercise.exerciseLevel;

  return (
    <Section sectionName={sectionNames.exercises} color="secondary">
      <Grid container justify="center">
        {/* Question Ohodnoťte vašu úroveň pri nasledujúcich cvikoch.
            Chcel som použiť mapu, aby som nepísal toľko kódu, ale robilo mi problém, že názvy cvikov mám v slovenčine a 
            v state mám názvy po anglicky týmpádom som nevedel, ako to namapovať.
        */}
        <Headings color="primary" variant="subtitle1" align="center" margin={2}>
          {questions.exercises.levelOfExercise}
        </Headings>
        <Grid container direction="column" alignItems="center">
          <Typography>Drep s činkou</Typography>
          <Grid item className={classes.root}>
            <Rating max={4} value={squatDumbell} name="squatDumbell" onChange={onExerciseLevelChange}></Rating>
            <Box className={classes.box}>{squatDumbell !== null ? labels[squatDumbell] : "Bez skúseností"}</Box>
          </Grid>

          <Typography>Zhyby</Typography>
          <Grid item className={classes.root}>
            <Rating max={4} value={pullUps} name="pullUps" onChange={onExerciseLevelChange}></Rating>
            <Box className={classes.box}>{pullUps !== null ? labels[pullUps] : "Bez skúseností"}</Box>
          </Grid>

          <Typography>Mŕtvy ťah</Typography>
          <Grid item className={classes.root}>
            <Rating max={4} value={deadLift} name="deadLift" onChange={onExerciseLevelChange}></Rating>
            <Box className={classes.box}>{deadLift !== null ? labels[deadLift] : "Bez skúseností"}</Box>
          </Grid>

          <Typography>Tlak s veľkou činkou</Typography>
          <Grid item className={classes.root}>
            <Rating max={4} value={benchPress} name="benchPress" onChange={onExerciseLevelChange}></Rating>
            <Box className={classes.box}>{benchPress !== null ? labels[benchPress] : "Bez skúseností"}</Box>
          </Grid>

          <Typography>Upažovanie v stoji</Typography>
          <Grid item className={classes.root}>
            <Rating max={4} value={sideRaises} name="sideRaises" onChange={onExerciseLevelChange}></Rating>
            <Box className={classes.box}>{sideRaises !== null ? labels[sideRaises] : "Bez skúseností"}</Box>
          </Grid>

          <Typography>Príťahy v predklone</Typography>
          <Grid item className={classes.root}>
            <Rating max={4} value={bentOverRows} name="bentOverRows" onChange={onExerciseLevelChange}></Rating>
            <Box className={classes.box}>{bentOverRows !== null ? labels[bentOverRows] : "Bez skúseností"}</Box>
          </Grid>
        </Grid>
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
        name="workoutRegularly"
        value={props.exercise.workoutRegularly}
        onChange={onExerciseRegularlyChange}
      />
      {props.errors.workoutRegularly && <ErrorMessage>{props.errors.workoutRegularly}</ErrorMessage>}

      {renderQuestion()}

      {/* Question Aký druh pohybu máte najradšej */}
      <Headings color="primary" variant="subtitle1" align="center" mt={5} mb={3}>
        {questions.exercises.favouriteSport}
      </Headings>

      <Grid container align="center">
        {favouriteSports.sort().map((sport, index) => {
          return (
            <Grid item key={index + uniqueKey} xs={6} sm={4} lg={3}>
              <button
                className={classes.sports}
                onClick={() => onExerciseFavouriteChange(sport)}
                style={
                  props.favouriteSports.includes(sport)
                    ? { backgroundColor: "#db7107" }
                    : { backgroundColor: "#72828f" }
                }
              >
                {sport}
              </button>
            </Grid>
          );
        })}
      </Grid>
      {props.errors.favouriteSports && <ErrorMessage>{props.errors.favouriteSports}</ErrorMessage>}

      <Headings color="primary" variant="subtitle1" align="center" mt={5} mb={3}>
        {questions.exercises.trainingFrequency}
      </Headings>

      <Grid item xs={12} align="center">
        <FormControl className={classes.day}>
          <Select onChange={onTrainingFrequencyChange}>
            {trainingFrequency.map((frequency, index) => {
              return (
                <MenuItem value={frequency} key={index + uniqueKey}>
                  {frequency}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {props.errors.trainingFrequency && <ErrorMessage>{props.errors.trainingFrequency}</ErrorMessage>}

      <Headings color="primary" variant="subtitle1" align="center" mt={5} mb={3}>
        {questions.exercises.trainingDuration}
      </Headings>

      <Grid item xs={12} align="center">
        <FormControl className={classes.day}>
          <Select onChange={onExerciseDurationChange}>
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
      {props.errors.trainingDuration && <ErrorMessage>{props.errors.trainingDuration}</ErrorMessage>}
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    exercise: state.exercise.data,
    favouriteSports: state.exercise.data.favouriteSports,
    errors: state.exercise.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    exerciseLevel: (name, newValue) => dispatch(exerciseLevel(name, newValue)),
    exerciseRegularly: (value) => dispatch(exerciseRegularly(value)),
    exerciseType: (name, value) => dispatch(exerciseType(name, value)),
    exerciseDescription: (text) => dispatch(exerciseDescription(text)),
    exerciseFavourite: (sport) => dispatch(exerciseFavourite(sport)),
    exerciseFrequency: (value) => dispatch(exerciseFrequency(value)),
    exerciseDuration: (value) => dispatch(exerciseDuration(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
