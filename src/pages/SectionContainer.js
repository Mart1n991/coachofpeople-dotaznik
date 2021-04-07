import React from "react";
import { Grid } from "@material-ui/core";

import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import Measurments from "./Measurments";
import Goals from "./Goals";
import Exercise from "./Exercise";
import Health from "./Health";
import LifeStyle from "./LifeStyle";
import AdditionalInfo from "./AdditionalInfo";
import Finish from "./Finish";

import { TOTAL_STEPS } from "../constans/steps";

import ButtonComponent from "../components/Button";

import { connect } from "react-redux";
import { stepForward, stepBack } from "../actions/buttonControl";
import {
  errorPersonalInfo,
  errorAddress,
  errorMeasurments,
  errorGoals,
  errorExercises,
  errorLifestyle,
  errorHealth,
} from "../actions/errorHandling";
import {
  personalInfoValid,
  addressValid,
  goalsValid,
  healthValid,
  exercisesValid,
  lifestyleValid,
} from "../validations";

import firebase from "../firebase/config";
import Thankyou from "./Thankyou";

function SectionContainer(props) {
  const onButtonNext = () => {
    //Validácia sekcie PersonalInfo
    props.step === 1 && personalInfoValid(props.userPersonalInfo, props.stepForward, props.errorPersonalInfo);

    //Validácia sekcie Address
    props.step === 2 && addressValid(props.userAddress, props.stepForward, props.errorAddress);

    //Validácia sekcie Measurments
    props.step === 3 && personalInfoValid(props.userMeasurments, props.stepForward, props.errorMeasurments);

    //Validácia sekcie Goals
    props.step === 4 && goalsValid(props.goals, props.stepForward, props.errorGoals);

    //Validácia sekcie Exercises
    props.step === 5 && exercisesValid(props.exercises, props.stepForward, props.errorExercises);

    //Validácia sekcie Lifestyle
    props.step === 6 && lifestyleValid(props.lifestyle, props.stepForward, props.errorLifestyle);

    //Validácia sekcie Health
    props.step === 7 && healthValid(props.health, props.stepForward, props.errorHealth);

    props.step === 8 && props.stepForward();

    localStorage.setItem("user", JSON.stringify(props.user));
  };

  const onButtonBack = () => {
    return props.stepBack();
  };

  const onSubmit = () => {
    firebase.firestore().collection("users").add({
      additionalInfo: props.user.additionalInfo,
      address: props.user.address.data,
      exercise: props.user.exercise.data,
      goals: props.user.goals.data,
      health: props.user.health.data,
      lifestyle: props.user.lifestyle.data,
      measurments: props.user.measurments.data,
      personalInfo: props.user.personalInfo.data,
    });

    props.step === 9 && props.stepForward();

    localStorage.clear();
  };

  // Sem switchujem kroky v aplikácií na základe čísla kroku sa mi vyrenderuje daný obsah, ktorý potrebujem
  const renderContent = () => {
    switch (props.step) {
      case 2:
        return <Address />;
      case 3:
        return <Measurments />;
      case 4:
        return <Goals />;
      case 5:
        return <Exercise />;
      case 6:
        return <LifeStyle />;
      case 7:
        return <Health />;
      case 8:
        return <AdditionalInfo />;
      case 9:
        return <Finish />;
      case 10:
        return <Thankyou />;

      default:
        return <PersonalInfo />;
    }
  };
  return (
    <>
      {renderContent()}

      <Grid container justify="center">
        {props.step === 1 ? (
          <ButtonComponent disabled color="primary">
            Späť
          </ButtonComponent>
        ) : props.step === TOTAL_STEPS ? null : (
          <ButtonComponent color="primary" onClick={onButtonBack}>
            Späť
          </ButtonComponent>
        )}

        {props.step === 9 ? (
          <ButtonComponent color="secondary" onClick={onSubmit}>
            Odoslať
          </ButtonComponent>
        ) : props.step === TOTAL_STEPS ? null : (
          <ButtonComponent color="secondary" onClick={onButtonNext}>
            Ďalej
          </ButtonComponent>
        )}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
    step: state.step.currentStep,
    userPersonalInfo: state.personalInfo.data,
    userAddress: state.address.data,
    userMeasurments: state.measurments.data,
    goals: state.goals.data,
    exercises: state.exercise.data,
    lifestyle: state.lifestyle.data,
    health: state.health.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepForward: () => dispatch(stepForward()),
    stepBack: () => dispatch(stepBack()),
    errorPersonalInfo: (error) => dispatch(errorPersonalInfo(error)),
    errorAddress: (error) => dispatch(errorAddress(error)),
    errorMeasurments: (error) => dispatch(errorMeasurments(error)),
    errorGoals: (error) => dispatch(errorGoals(error)),
    errorExercises: (error) => dispatch(errorExercises(error)),
    errorLifestyle: (error) => dispatch(errorLifestyle(error)),
    errorHealth: (error) => dispatch(errorHealth(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
