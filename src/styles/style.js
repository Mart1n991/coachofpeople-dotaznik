import { createMuiTheme, makeStyles, Slider, withStyles } from "@material-ui/core";

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

//Custom style for slider
export const PrettoSlider = withStyles({
  root: {
    color: "#db7107",
    height: 8,
    width: 240,
    marginTop: 20,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },

  active: {},
  valueLabel: {
    left: "calc(-50%)",
  },

  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

//Styling for individual elements
export const elementsStyles = makeStyles({
  logoSmall: {
    width: "50%",
  },

  logoLarge: {
    width: "20%",
  },

  container: {
    height: "100vh",
  },

  formControl: {
    minWidth: 120,
    marginTop: 10,
    textAlign: "center",
  },
});

export const listStyles = makeStyles({
  listContainer: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  list: {
    width: "80%",
    margin: "5px",
    padding: "5px 15px",
    letterSpacing: "1px",
    backgroundColor: "#94d1f2",
    color: "black",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
  },
});
