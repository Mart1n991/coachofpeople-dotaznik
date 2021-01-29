import React from "react";
import { connect } from "react-redux";
import { Checkbox, FormControlLabel, FormGroup, FormControl, Grid, Radio, Select, MenuItem } from "@material-ui/core";
import { elementsStyles } from "../styles/style";
import Question from "../components/Question";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";
import { getGoalDuration, getGoalImportance, getInputGoals } from "../Actions/inputChange";
import Headings from "../components/Headings";
import ErrorMessage from "../components/ErrorMessage";

function Goals(props) {
  const classes = elementsStyles();
  const onMainGoalChecked = (event) => {
    props.getInputGoals(event.target.name, event.target.checked);
  };

  const onTimeAchieveGoalsChange = (event) => {
    props.getInputDuration(event.target.value);
  };

  const onPriorityChange = (event) => {
    props.getGoalImportance(event.target.value);
  };

  const importantGoal = [
    "Okamžité dosiahnutie výsledku, ktorý je tažšie udržateľný",
    "Pomalšie dosiahnutie výsledku, ktorý je trvalo udržateľný",
  ];

  return (
    <Section sectionName={sectionNames.goals} color="secondary">
      <Grid container justify="center" direction="column" alignItems="center">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="healthImprove"
                checked={props.goals.mainGoals.healthImprove}
                onChange={onMainGoalChecked}
              />
            }
            label="Zlepšiť zdravie"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="strengthIncrease"
                checked={props.goals.mainGoals.strengthIncrease}
                onChange={onMainGoalChecked}
              />
            }
            label="Zlepšiť výkonnosť"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="performanceImprove"
                checked={props.goals.mainGoals.performanceImprove}
                onChange={onMainGoalChecked}
              />
            }
            label="Zvýšiť silu"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="muscleMassIncrease"
                checked={props.goals.mainGoals.muscleMassIncrease}
                onChange={onMainGoalChecked}
              />
            }
            label="Zväčšiť svalovú hmotu"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="weightLoss"
                checked={props.goals.mainGoals.weightLoss}
                onChange={onMainGoalChecked}
              />
            }
            label="Zbaviť sa tuku"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="weightGain"
                checked={props.goals.mainGoals.weightGain}
                onChange={onMainGoalChecked}
              />
            }
            label="Pribrať na váhe"
          />
        </FormGroup>
        {props.errors.mainGoals && <ErrorMessage>{props.errors.mainGoals}</ErrorMessage>}

        <Headings color="primary" mt={2}>
          {questions.goals.timeToAchieveGoal}
        </Headings>
        <FormControl className={classes.formControl}>
          <Select value={props.goals.timeToAchieveGoals} onChange={onTimeAchieveGoalsChange}>
            <MenuItem value={4}>4 Týždne</MenuItem>
            <MenuItem value={8}>8 Týždňov</MenuItem>
            <MenuItem value={12}>12 Týždňov</MenuItem>
            <MenuItem value={16}>16 Týždňov</MenuItem>
            <MenuItem value={20}>20 Týždňov</MenuItem>
            <MenuItem value={-1}>Viac ako 20 Týždňov</MenuItem>
          </Select>
        </FormControl>
        {props.errors.timeToAchieveGoals && <ErrorMessage>{props.errors.timeToAchieveGoals}</ErrorMessage>}
      </Grid>

      <Question
        questionType="selection"
        arrayOfInputs={importantGoal}
        control={<Radio />}
        questionText={questions.goals.importantGoal}
        color="primary"
        direction="column"
        align="center"
        value={props.goals.priority}
        name="priority"
        mt={2}
        onChange={onPriorityChange}
      />
      {props.errors.priority && <ErrorMessage>{props.errors.priority}</ErrorMessage>}
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.data,
    errors: state.goals.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInputGoals: (name, value) => dispatch(getInputGoals(name, value)),
    getInputDuration: (value) => dispatch(getGoalDuration(value)),
    getGoalImportance: (value) => dispatch(getGoalImportance(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
