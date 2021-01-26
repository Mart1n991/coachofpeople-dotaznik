import React from "react";
import ErrorMessages from "../components/ErrorMessages";

//materialUI
import { useMediaQuery } from "@material-ui/core";
import { elementsStyles } from "../styles/style";

//Image import
import coachOfPeopleLogo from "../assets/LogoTrenerLudi.svg";
import { Grid } from "@material-ui/core";
import Question from "../components/Question";
import ButtonComponent from "../components/Button";

export default function EmailVerify({
  email,
  user,
  setUser,
  emailVerification,
  setEmailVerification,
}) {
  //MediaQuery pre veľkosť loga
  const isActiveMediaQuery = useMediaQuery("(min-width: 800px )");

  //Material UI styles
  const classes = elementsStyles();

  const onInputChange = (event) => {
    setUser({
      ...user,
      personalInfo: {
        ...user.personalInfo,
        [event.target.name]: event.target.value,
      },
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    //Overenie emailu cez API hunter.io
    const response = await fetch(
      `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=c5de266a2c76aa35f7812e74b6ee7776524bcfdb`
    );

    const json = await response.json();

    //Validácie vstupu pre pole emailu
    if ((json.data && json.data.status === "invalid") || json.errors) {
      setEmailVerification(false);
    } else if (
      (json.data && json.data.status === "webmail") ||
      json.data.status === "unknown"
    ) {
      setEmailVerification(true);
    }
  };

  /*
  Funkcia na vyrenderovanie upozornenia, že email je nesprávny
  */
  const invalidEmail = () => {
    if (emailVerification === false) {
      return <ErrorMessages>Email nie je správny</ErrorMessages>;
    }
  };

  return (
    <Grid
      container
      justify="center"
      className={classes.container}
      alignContent="center"
    >
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
      />

      <Grid item>{invalidEmail()}</Grid>

      <ButtonComponent color="primary">Potvrdiť</ButtonComponent>
    </Grid>
  );
}
