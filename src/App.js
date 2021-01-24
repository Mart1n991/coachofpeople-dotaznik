import { Checkbox, CssBaseline, Radio } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Headings from "./components/Headings";
import Question from "./components/Question";

import { theme } from "./styles/style";

const inputs = ["Muž", "Žena", "Dzecko"];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Headings variant={"h4"} color={"primary"} align="center">
        Dotazník
      </Headings>
    </ThemeProvider>
  );
}

export default App;
