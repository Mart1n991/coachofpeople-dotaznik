import { Radio } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Question from "../components/Question";
import Section from "../components/Section";
import ErrorMessage from "../components/ErrorMessage";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";
import * as health from "../Actions/health";
import AddList from "../components/AddList";
import List from "../components/List";

function Health(props) {
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
        value={props.data.problems.answer}
        onChange={(e) => props.problemsAnswer(e.target.value)}
      />

      {props.errors.problems && <ErrorMessage>{props.errors.problems}</ErrorMessage>}

      {props.data.problems.answer === "Áno" && (
        <AddList
          question={questions.health.problemsList}
          label="Problém"
          value={props.data.problems.input}
          onChange={(e) => props.problemsInput(e.target.value)}
          onClick={() => props.problemsAdd(props.data.problems.input)}
        />
      )}

      {props.data.problems.list &&
        props.data.problems.list.map((list, id) => (
          <List list={list} key={id} onClick={() => props.problemsRemove(list)} />
        ))}

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
        value={props.data.medicine.answer}
        onChange={(e) => props.medicineAnswer(e.target.value)}
      />

      {props.errors.medicine && <ErrorMessage>{props.errors.medicine}</ErrorMessage>}

      {props.data.medicine.answer === "Áno" && (
        <AddList
          question={questions.health.medicineList}
          label="Liek"
          value={props.data.medicine.input}
          onChange={(e) => props.medicineInput(e.target.value)}
          onClick={() => props.medicineAdd(props.data.medicine.input)}
        />
      )}

      {props.data.medicine.list &&
        props.data.medicine.list.map((list, id) => (
          <List list={list} key={id} onClick={() => props.medicineRemove(list)} />
        ))}

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
        value={props.data.injuries.answer}
        onChange={(e) => props.injuriesAnswer(e.target.value)}
      />

      {props.errors.injuries && <ErrorMessage>{props.errors.injuries}</ErrorMessage>}

      {props.data.injuries.answer === "Áno" && (
        <AddList
          question={questions.health.injuriesList}
          label="Problém"
          value={props.data.injuries.input}
          onChange={(e) => props.injuriesInput(e.target.value)}
          onClick={() => props.injuriesAdd(props.data.injuries.input)}
        />
      )}

      {props.data.injuries.list &&
        props.data.injuries.list.map((list, id) => (
          <List list={list} key={id} onClick={() => props.injuriesRemove(list)} />
        ))}
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.health.data,
    errors: state.health.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    problemsAnswer: (answer) => dispatch(health.problemsAnswer(answer)),
    problemsAdd: (problem) => dispatch(health.problemsAdd(problem)),
    problemsRemove: (problem) => dispatch(health.problemsRemove(problem)),
    problemsInput: (text) => dispatch(health.problemsInput(text)),

    medicineAnswer: (answer) => dispatch(health.medicineAnswer(answer)),
    medicineAdd: (medicine) => dispatch(health.medicineAdd(medicine)),
    medicineRemove: (medicine) => dispatch(health.medicineRemove(medicine)),
    medicineInput: (text) => dispatch(health.medicineInput(text)),

    injuriesAnswer: (answer) => dispatch(health.injuriesAnswer(answer)),
    injuriesAdd: (injury) => dispatch(health.injuriesAdd(injury)),
    injuriesRemove: (injury) => dispatch(health.injuriesRemove(injury)),
    injuriesInput: (text) => dispatch(health.injuriesInput(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Health);
