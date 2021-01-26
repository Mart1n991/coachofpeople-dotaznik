import React from "react";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import Exercise from "./Exercise";
import Goals from "./Goals";
import Measurments from "./Measurments";
import LifeStyle from "./LifeStyle";
import Health from "./Health";
import AdditionalInfo from "./AdditionalInfo";
import Finish from "./Finish";
import ButtonComponent from "../components/Button";
import { STEP, TOTAL_STEPS } from "../constans/steps";
import { Grid } from "@material-ui/core";

export default function SectionContainer() {
  // Sem switchujem kroky v aplikácií na základe čísla kroku sa mi vyrenderuje daný obsah, ktorý potrebujem
  const renderContent = () => {
    switch (STEP) {
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
        {STEP === 1 ? (
          <ButtonComponent disabled color="primary">
            Späť
          </ButtonComponent>
        ) : (
          <ButtonComponent color="primary">Späť</ButtonComponent>
        )}

        {STEP === TOTAL_STEPS ? (
          <ButtonComponent color="secondary">Odoslať</ButtonComponent>
        ) : (
          <ButtonComponent color="secondary">Ďalej</ButtonComponent>
        )}
      </Grid>
    </>
  );
}
