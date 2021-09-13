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
    lineHeight: "100%",
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
});
  
  
export default typography;