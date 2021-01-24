import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//Vytvorenie témy z material UI
const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#797b7d",
      default: "#797b7d",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Dotazník</h1>
    </ThemeProvider>
  );
}

export default App;
