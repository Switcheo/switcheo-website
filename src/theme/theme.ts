import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F4F9FD",
    },
    primary: {
      main: "#193B4D",
    },
    secondary: {
      main: "#E2FCA4",
    },
    text: {
      primary: "#222222",
      secondary: "#4C4C4C",
    },
  },
  typography: {
    fontFamily: [
      "Roobert",
      "Roobert-SemiBold",
      "Roobert-Medium",
      "IBM Plex Mono",
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "Roboto",
      "'Helvetica Neue'",
      "Arial",
      "sans-serif",
      "'Apple Color Emoji'",
      "'Segoe UI Emoji'",
      "'Segoe UI Symbol'",
    ].join(","),
    h1: {
      fontFamily: "Roobert-SemiBold",
      fontWeight: 600,
      fontSize: "5.625rem",
      lineHeight: "100%",
    },
    h2: {
      fontFamily: "Roobert-SemiBold",
      fontWeight: 600,
      fontSize: "5.0625rem",
      lineHeight: "100%",
    },
    h3: {
      fontFamily: "Roobert-SemiBold",
      fontWeight: 600,
      fontSize: "3.125rem",
      lineHeight: "100%",
    },
    h4: {
      fontFamily: "Roobert-Medium",
      fontWeight: 400,
      fontSize: "2.375rem",
      letterSpacing: "-0.04em",
    },
    h5: {
      fontFamily: "IBM Plex Mono",
      fontWeight: "normal",
      fontSize: "1.8125rem",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      lineHeight: "100%",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.8125rem",
      lineHeight: "160%",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: "150%",
    },
    body2: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },
  },
});