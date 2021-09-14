import { Theme } from "@material-ui/core";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

const typography = (theme: Theme): TypographyOptions => ({
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
    fontSize: "5.625rem",
    lineHeight: "100%",
    [theme.breakpoints.only("sm")]: {
      fontSize: "3.5625rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.5625rem",
    },
  },
  h2: {
    fontFamily: "Roobert-SemiBold",
    fontSize: "5.0625rem",
    lineHeight: "100%",
    [theme.breakpoints.only("sm")]: {
      fontSize: "3.25rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.375rem",
    },
  },
  h3: {
    fontFamily: "Roobert-SemiBold",
    fontSize: "3.125rem",
    lineHeight: "100%",
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.3125rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9375rem",
    },
  },
  h4: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.375rem",
    lineHeight: "100%",
    letterSpacing: "-0.04em",
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.125rem",
    },
  },
  h5: {
    fontFamily: "IBM Plex Mono",
    fontWeight: "normal",
    fontSize: "1.8125rem",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    lineHeight: "100%",
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.625rem",
    },
  },
  subtitle1: {
    fontSize: "1.8125rem",
    lineHeight: "160%",
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.375rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.625rem",
    },
  },
  body1: {
    fontSize: "1.5rem",
    lineHeight: "150%",
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.375rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.625rem",
    },
  },
  body2: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
});
  
  
export default typography;