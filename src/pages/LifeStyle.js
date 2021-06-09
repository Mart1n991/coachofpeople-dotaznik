import { useEffect } from "react";
import { Radio, Grid, TextField } from "@material-ui/core";
import React from "react";
import Headings from "../components/Headings";
import Question from "../components/Question";
import Button from "../components/Button";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import ErrorMessage from "../components/ErrorMessage";
import { sectionNames } from "../constans/sectionNames";
import { connect } from "react-redux";
import * as lifestyleActions from "../Actions/lifestyle";
import AddList from "../components/AddList";
import List from "../components/List";

function LifeStyle(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const levelOfMovementInWork = ["Žiadna", "Mierna", "Vysoká"];
  const traveling = ["Veľmi málo", "Počas týždňa", "Niekoľkokrát do mesiaca", "Niekoľkokrát za rok"];

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

  const onInputChange = (event) => {
    props.getLifeStyleInput(event.target.value);
  };

  const onMovementActivityChange = (event) => {
    props.lifestyleMovementActivity(event.target.value);
  };

  const onTravelingChange = (event) => {
    props.lifestyleTraveling(event.target.value);
  };

  const onFoodInvestmentChange = (event) => {
    props.lifestyleFoodInvestment(event.target.value);
  };

  const onSuplementInvestmentChange = (event) => {
    props.lifestyleSuplementInvestment(event.target.value);
  };

  const onOrderingFoodChange = (event) => {
    props.lifestyleOrderingFood(event.target.value);
  };

  const onAllergieAnswer = (event) => {
    props.lifestyleAllergies(event.target.value);
  };

  const onSuplementAnswer = (event) => {
    props.lifestyleSuplements(event.target.value);
  };

  const onAllergiesAdd = () => {
    if (props.data.allergies.input.length < 3) {
      window.alert("Zadajte alergiu");
      return;
    }
    props.lifestyleAllergiesAdd(props.data.allergies.input);
  };

  const onSuplementsAdd = () => {
    if (props.data.suplements.input.length < 3) {
      window.alert("Zadajte doplnok výživy");
      return;
    }
    props.lifestyleSuplementsAdd(props.data.suplements.input);
  };

  const onFavouriteFoodAdd = () => {
    if (props.data.favouriteFood.input.length < 3) {
      window.alert("Zadajte obľúbené jedlo");
      return;
    }
    props.favouriteFoodAdd(props.data.favouriteFood.input);
  };

  const onUnPopularFoodAdd = () => {
    if (props.data.unlikeFood.input.length < 3) {
      window.alert("Zadajte neobľúbené jedlo");
      return;
    }
    props.unlikeFoodAdd(props.data.unlikeFood.input);
  };

  const qualityChange = (e, newValue) => {
    props.lifestyleQualities(e.target.ariaLabel, newValue);
  };

  return (
    <Section sectionName={sectionNames.lifeStyle} color="secondary">
      <Question
        questionText={questions.lifestyle.proffesion}
        variant="outlined"
        color="primary"
        label="Povolanie"
        value={props.data.workType}
        onChange={(event) => onInputChange(event)}
      />
      {props.errors.workType && <ErrorMessage>{props.errors.workType}</ErrorMessage>}

      <Question
        questionText={questions.lifestyle.levelOfMovementInWork}
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={levelOfMovementInWork}
        color="primary"
        row
        mt={3}
        align="center"
        name="movement"
        value={props.data.movementActivity}
        onChange={onMovementActivityChange}
      />

      {props.errors.movementActivity && <ErrorMessage>{props.errors.movementActivity}</ErrorMessage>}

      <Question
        questionText={questions.lifestyle.traveling}
        align="center"
        questionType="selection"
        control={<Radio />}
        arrayOfInputs={traveling}
        color="primary"
        name="traveling"
        value={props.data.traveling}
        onChange={onTravelingChange}
        mt={3}
      />

      {props.errors.traveling && <ErrorMessage>{props.errors.traveling}</ErrorMessage>}

      <Question
        questionText={questions.lifestyle.foodInvestment}
        color="primary"
        align="center"
        variant="outlined"
        type="number"
        label="Zadajte číslo"
        mt={2}
        min={0}
        value={props.data.foodInvestment}
        onChange={onFoodInvestmentChange}
      />

      {props.errors.foodInvestment && <ErrorMessage>{props.errors.foodInvestment}</ErrorMessage>}

      <Question
        questionText={questions.lifestyle.suplementInvestment}
        color="primary"
        align="center"
        variant="outlined"
        type="number"
        label="Zadajte číslo"
        mt={2}
        min={0}
        value={props.data.suplementInvestment}
        onChange={onSuplementInvestmentChange}
      />

      {props.errors.suplementInvestment && <ErrorMessage>{props.errors.suplementInvestment}</ErrorMessage>}

      <Question
        questionText={questions.lifestyle.fastFood}
        color="primary"
        align="center"
        variant="outlined"
        type="number"
        label="Zadajte číslo"
        mt={2}
        min={0}
        value={props.data.orderingFoodPerWeek}
        onChange={onOrderingFoodChange}
      />

      {props.errors.orderingFoodPerWeek && <ErrorMessage>{props.errors.orderingFoodPerWeek}</ErrorMessage>}

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
        name="allergies"
        value={props.data.allergies.answer}
        onChange={onAllergieAnswer}
      />

      {props.errors.allergies && <ErrorMessage>{props.errors.allergies}</ErrorMessage>}

      {props.data.allergies.answer === "Áno" ? (
        <AddList
          question={questions.lifestyle.allergiesList}
          label="Alergia"
          onClick={onAllergiesAdd}
          value={props.data.allergies.input}
          onChange={(e) => props.lifestyleAllergiesInput(e.target.value)}
        />
      ) : null}

      {props.data.allergies.list &&
        props.data.allergies.list.map((list, id) => (
          <List list={list} key={id} onClick={() => props.lifestyleAllergieRemove(list)} />
        ))}

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
        value={props.data.suplements.answer}
        onChange={onSuplementAnswer}
      />

      {props.errors.suplements && <ErrorMessage>{props.errors.suplements}</ErrorMessage>}

      {props.data.suplements.answer === "Áno" ? (
        <AddList
          question={questions.lifestyle.suplementsList}
          label="Doplnok výživy"
          onClick={onSuplementsAdd}
          value={props.data.suplements.input}
          onChange={(e) => props.lifestyleSuplementsInput(e.target.value)}
        />
      ) : null}

      {props.data.suplements.list &&
        props.data.suplements.list.map((list, id) => (
          <List list={list} key={id} onClick={() => props.lifestyleSuplementRemove(list)} />
        ))}

      <Grid container justify="center">
        <Headings variant="subtitle1" color="primary" align="center" mt={2} mb={2}>
          {questions.lifestyle.popularFood}
        </Headings>

        <Grid item xs={12} align="center">
          <TextField
            variant="outlined"
            label="Napíšte jedlo a pridajte"
            type="text"
            value={props.data.favouriteFood.input}
            onChange={(e) => props.favouriteFoodInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" onClick={onFavouriteFoodAdd}>
            Pridať
          </Button>
        </Grid>
      </Grid>

      {props.data.favouriteFood.list &&
        props.data.favouriteFood.list.map((list, id) => (
          <List list={list} key={id} onClick={() => props.favouriteFoodRemove(list)} />
        ))}

      <Grid container justify="center">
        <Headings variant="subtitle1" color="primary" align="center" mt={2} mb={2}>
          {questions.lifestyle.unPopularFood}
        </Headings>

        <Grid item xs={12} align="center">
          <TextField
            variant="outlined"
            label="Napíšte jedlo a pridajte"
            type="text"
            value={props.data.unlikeFood.input}
            onChange={(e) => props.unlikeFoodInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" onClick={onUnPopularFoodAdd}>
            Pridať
          </Button>
        </Grid>
      </Grid>

      {props.data.unlikeFood.list &&
        props.data.unlikeFood.list.map((list, id) => (
          <List list={list} key={id} onClick={() => props.unlikeFoodRemove(list)} />
        ))}

      <Headings variant="subtitle1" color="primary" align="center" mt={2} mb={2}>
        {questions.lifestyle.qualities}
      </Headings>

      <Question
        questionType="slider"
        marks={marksAppetite}
        min={1}
        max={5}
        valueLabelDisplay="auto"
        color="primary"
        mt={2}
        sliderName="Chuť do jedla"
        ariaLabel="appetite"
        value={props.data.quality.appetite}
        onChange={qualityChange}
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
        ariaLabel="sleep"
        value={props.data.quality.sleep}
        onChange={qualityChange}
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
        ariaLabel="exhausted"
        value={props.data.quality.exhausted}
        onChange={qualityChange}
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
        ariaLabel="willToTrain"
        value={props.data.quality.willToTrain}
        onChange={qualityChange}
      />
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.lifestyle.data,
    errors: state.lifestyle.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLifeStyleInput: (text) => dispatch(lifestyleActions.lifestyleGetInput(text)),
    lifestyleMovementActivity: (value) => dispatch(lifestyleActions.lifestyleMovementActivity(value)),
    lifestyleTraveling: (value) => dispatch(lifestyleActions.lifestyleTraveling(value)),
    lifestyleFoodInvestment: (value) => dispatch(lifestyleActions.lifestyleFoodInvestment(value)),
    lifestyleSuplementInvestment: (value) => dispatch(lifestyleActions.lifestyleSuplementInvestment(value)),
    lifestyleOrderingFood: (value) => dispatch(lifestyleActions.lifestyleOrderingFood(value)),
    lifestyleAllergies: (answer) => dispatch(lifestyleActions.lifestyleAllergies(answer)),
    lifestyleAllergiesAdd: (allergie) => dispatch(lifestyleActions.lifestyleAllergiesAdd(allergie)),
    lifestyleAllergieRemove: (value) => dispatch(lifestyleActions.lifestyleAllergieRemove(value)),
    lifestyleAllergiesInput: (text) => dispatch(lifestyleActions.lifestyleAllergiesInput(text)),
    lifestyleSuplements: (answer) => dispatch(lifestyleActions.lifestyleSuplements(answer)),
    lifestyleSuplementsAdd: (suplement) => dispatch(lifestyleActions.lifestyleSuplementsAdd(suplement)),
    lifestyleSuplementsInput: (text) => dispatch(lifestyleActions.lifestyleSuplementsInput(text)),
    lifestyleSuplementRemove: (value) => dispatch(lifestyleActions.lifestyleSuplementRemove(value)),
    favouriteFoodAdd: (food) => dispatch(lifestyleActions.favouriteFoodAdd(food)),
    favouriteFoodRemove: (food) => dispatch(lifestyleActions.favouriteFoodRemove(food)),
    favouriteFoodInput: (text) => dispatch(lifestyleActions.favouriteFoodInput(text)),
    unlikeFoodAdd: (food) => dispatch(lifestyleActions.unlikeFoodAdd(food)),
    unlikeFoodRemove: (food) => dispatch(lifestyleActions.unlikeFoodRemove(food)),
    unlikeFoodInput: (text) => dispatch(lifestyleActions.unlikeFoodInput(text)),
    lifestyleQualities: (name, value) => dispatch(lifestyleActions.lifestyleQualities(name, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LifeStyle);
