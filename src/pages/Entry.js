import React from "react";

//materialUI
import { useMediaQuery, Grid } from "@material-ui/core";
import { elementsStyles } from "../styles/style";

//Image import
import coachOfPeopleLogo from "../assets/LogoTrenerLudi.svg";

//Import components
import Question from "../components/Question";
import ButtonComponent from "../components/Button";
import ErrorMessages from "../components/ErrorMessages";

//Import redux stuff
import { getInput } from "../Actions/inputChange";
import { connect } from "react-redux";

function Entry(props) {
  //MediaQuery pre veľkosť loga
  const isActiveMediaQuery = useMediaQuery("(min-width: 800px )");
  //Material UI styles
  const classes = elementsStyles();

  const submit = async (event) => {
    event.preventDefault();
  };

  return (
    <Grid container justify="center" className={classes.container} alignContent="center">
      <img
        src={coachOfPeopleLogo}
        alt="Logo Tréner ľudí"
        className={isActiveMediaQuery ? classes.logoLarge : classes.logoSmall}
      />

      <Question
        variant="outlined"
        color="primary"
        label="Zadajte váš email"
        required
        autoFocus
        mt={2}
        mb={2}
        onChange={(event) => props.setEmailInput(event.target.name, event.target.value)}
        type="email"
        name="email"
      />

      {/* <Grid item>{invalidEmail()}</Grid> */}

      <ButtonComponent color="primary" onClick={submit}>
        Potvrdiť
      </ButtonComponent>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.personalInfo.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmailInput: (name, text) => dispatch(getInput(name, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
