import palette from "./palette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { Theme } from "@material-ui/core";

const typography = (theme: Theme): TypographyOptions => ({
  fontFamily: [
    "Union",
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
  },
  h2: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: "48px",
    letterSpacing: "-1.5px",
    lineHeight: "48px",
    marginBottom: "52px",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      letterSpacing: "-1px",
      lineHeight: "32px",
      marginBottom: "32px",
    },
  },
  h3: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      letterSpacing: "-0.75px",
      lineHeight: "20px",
    },
  },
  h4: {
    color: palette.text.primary,
    fontSize: "22px",
    letterSpacing: "0",
    lineHeight: "22px",
    fontWeight: "bold",
    marginBottom: 40,
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "16px",
    letterSpacing: "-0.05px",
    lineHeight: "20px"
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "14px",
    letterSpacing: "-0.05px",
    lineHeight: "20px"
  },
  subtitle1: {
    fontSize: 42,
    lineHeight: "44px",
    letterSpacing: "-1.2px",

    [theme.breakpoints.down("md")]: {
      fontSize: 32,
      lineHeight: "36px",
      letterSpacing: "-.5px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "20px",
      letterSpacing: "-.5px",
    },
  },
  subtitle2: {
    color: palette.text.secondary,
    fontSize: "16px",
    letterSpacing: "0.2px",
    lineHeight: "21px"
  },
  body1: {
    color: palette.text.secondary,
    fontSize: "24px",
    letterSpacing: "-0.75px",
    lineHeight: "32px",
    // [theme.breakpoints.up("xl")]: {
    //   fontSize: "32px",
    //   letterSpacing: "-1px",
    //   lineHeight: "36px",
    // },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      letterSpacing: "-0.75px",
      lineHeight: "24px",
    },
  },
  body2: {
    color: palette.text.secondary,
    fontSize: "24px",
    letterSpacing: "-0.75px",
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      letterSpacing: "-0.75px",
      lineHeight: "22px",
    },
  },
  button: {
    color: palette.text.primary,
    fontSize: "14px"
  },
  caption: {
    color: palette.text.secondary,
    fontSize: "11px",
    letterSpacing: "0.33px",
    lineHeight: "13px"
  },
  overline: {
    color: palette.text.secondary,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.33px",
    lineHeight: "13px",
    textTransform: "uppercase"
  },
});


export default typography;