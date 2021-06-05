import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./styles/style";

import SectionContainer from "./pages/SectionContainer";
import Entry from "./pages/Entry";

function App(props) {
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

export default connect(mapStateToProps)(App);
