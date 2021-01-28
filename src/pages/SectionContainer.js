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
import { errorHandlingPersonalInfo, errorHandlingAddress } from "../Actions/errorHandling";
import { getInputAddress, getInputPersonalInfo } from "../Actions/inputChange";
import * as validations from "../validations";

function SectionContainer(props) {
  const onInputChange = (event) => {
    props.step === 1 && props.handleInputPersonalInfo(event.target.name, event.target.value);
    props.step === 2 && props.handleInputAddress(event.target.name, event.target.value);
  };

  const onButtonNext = () => {
    //Validácia sekcie PersonalInfo
    props.step === 1 &&
      validations.personalInfo(props.userPersonalInfo, props.stepForward, props.errorPersonalInfo, props.step);

    //Validácia sekcie Address
    props.step === 2 && validations.address(props.userAddress, props.stepForward, props.errorAddress, props.step);
  };

  const onButtonBack = () => {
    return props.stepBack();
  };

  // Sem switchujem kroky v aplikácií na základe čísla kroku sa mi vyrenderuje daný obsah, ktorý potrebujem
  const renderContent = () => {
    switch (props.step) {
      case 2:
        return <Address onChange={onInputChange} />;
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
        return <PersonalInfo onChange={onInputChange} />;
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
          <ButtonComponent color="primary" onClick={onButtonBack}>
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
    userPersonalInfo: state.personalInfo.data,
    userAddress: state.address.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepForward: () => dispatch(stepForward()),
    stepBack: () => dispatch(stepBack()),
    errorPersonalInfo: (error) => dispatch(errorHandlingPersonalInfo(error)),
    errorAddress: (error) => dispatch(errorHandlingAddress(error)),
    handleInputPersonalInfo: (name, text) => dispatch(getInputPersonalInfo(name, text)),
    handleInputAddress: (name, text) => dispatch(getInputAddress(name, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
