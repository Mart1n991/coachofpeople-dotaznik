import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import SectionContainer from "./pages/SectionContainer";

import { theme } from "./styles/style";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AdminEntry from "./pages/AdminSection/AdminEntry";
import Entry from "./pages/Entry";

function App() {
  const emailVerification = null;
  /*
  Presmerovanie s "/questionnaire" späť na validáciu emailu v prípade ak fetchEmailData.show sa nerovná true. Chcem tak zabrániť tomu, že ak sa 
  niekto pokúsi pristúpiť na cestu "/questionnaire" manuálne, tak ho presmeruje späť.
  */
  const questionnaireRedirect = () => {
    if (emailVerification !== true) {
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
            {emailVerification ? <Redirect to="questionnaire" /> : <Entry />}
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

export default App;
