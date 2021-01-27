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

function SectionContainer(props) {
  console.log(props.step);
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
          <ButtonComponent color="secondary" onClick={props.stepForward}>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepForward: () => dispatch(stepForward()),
    stepBack: () => dispatch(stepBack()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
