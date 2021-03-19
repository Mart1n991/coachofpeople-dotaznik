import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadReCaptcha } from "react-recaptcha-google";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./styles/style";

import SectionContainer from "./pages/SectionContainer";
import AdminEntry from "./pages/AdminSection/AdminEntry";
import Entry from "./pages/Entry";

import { recaptcha } from "./Actions/emailVerify";

function App(props) {
  /**Initialize recaptcha */
  useEffect(() => {
    loadReCaptcha();
  });

  /*
  Presmerovanie s "/questionnaire" späť na validáciu emailu v prípade ak fetchEmailData.show sa nerovná true. Chcem tak zabrániť tomu, že ak sa 
  niekto pokúsi pristúpiť na cestu "/questionnaire" manuálne, tak ho presmeruje späť.
  */
  const questionnaireRedirect = () => {
    if (props.verified !== true) {
      return <Redirect to="/" />;
    }

    return <SectionContainer />;
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            {props.verified ? <Redirect to="questionnaire" /> : <Entry />}
          </Route>

          <Route exact path="/admin">
            <AdminEntry />
          </Route>

          <Route exact path="/questionnaire">
            {questionnaireRedirect()}
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    verified: state.verification.emailVerification,
    token: state.verification.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    recaptcha: (token) => dispatch(recaptcha(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
