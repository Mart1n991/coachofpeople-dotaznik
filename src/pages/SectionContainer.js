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
import { stepForward, stepBack } from "../Actions/buttonControl";
import { errorHandling } from "../Actions/errorhandling";
import { errorMessages } from "../constans/errorMessages";

function SectionContainer(props) {
  // Sem switchujem kroky v aplikácií na základe čísla kroku sa mi vyrenderuje daný obsah, ktorý potrebujem
  const onButtonNext = () => {
    const { firstName, lastName, age, gender } = props.userPersonInfo;
    if (firstName.length < 2 || lastName.length < 2 || age.length === 0 || gender === "") {
      return props.errorHandling(errorMessages);
    } else {
      return props.stepForward();
    }
  };

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
        ) : (
          <ButtonComponent color="primary" onClick={props.stepBack}>
            Späť
          </ButtonComponent>
        )}

        {props.step === TOTAL_STEPS ? (
          <ButtonComponent color="secondary">Odoslať</ButtonComponent>
        ) : (
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
    step: state.step.currentStep,
    userPersonInfo: state.personalInfo.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepForward: () => dispatch(stepForward()),
    stepBack: () => dispatch(stepBack()),
    errorHandling: (error) => dispatch(errorHandling(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
