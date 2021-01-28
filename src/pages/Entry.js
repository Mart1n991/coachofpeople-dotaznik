import React from "react";

//materialUI
import { useMediaQuery, Grid } from "@material-ui/core";
import { elementsStyles } from "../styles/style";

//Image import
import coachOfPeopleLogo from "../assets/LogoTrenerLudi.svg";

//Import components
import Question from "../components/Question";
import ButtonComponent from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";

//Import redux stuff
import { getInputPersonalInfo } from "../Actions/inputChange";
import { emailVerification } from "../Actions/emailVerify";
import { connect } from "react-redux";

function Entry(props) {
  //MediaQuery pre veľkosť loga
  const isActiveMediaQuery = useMediaQuery("(min-width: 800px )");
  //Material UI styles
  const classes = elementsStyles();

  const submit = async (event) => {
    event.preventDefault();
    props.emailVerification(props.email);
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

      {props.verified === false && <ErrorMessage align="center">Nesprávny email</ErrorMessage>}
      <Grid item xs={12} align="center">
        <ButtonComponent color="primary" onClick={submit}>
          Potvrdiť
        </ButtonComponent>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.personalInfo.data.email,
    verified: state.verification.emailVerification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmailInput: (name, text) => dispatch(getInputPersonalInfo(name, text)),
    emailVerification: (email) => dispatch(emailVerification(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
