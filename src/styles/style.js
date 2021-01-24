import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#474645",
    },
    primary: {
      main: "#94d1f2",
    },

    secondary: {
      main: "#db7107",
    },
  },
});

console.log(theme);
