import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Headings from "./components/Headings";

import { theme } from "./styles/style";

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
